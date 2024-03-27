'use server';

import { redirect } from 'next/navigation';
import { readFile, readdir } from 'node:fs/promises';
import { basename, extname } from 'node:path';
import { join as makePath, relative } from 'path';
import parseComponentType from './parseComponentType';

/**
 * Gets data for a given route.
 *
 * @param {string[]} route - The route to get data for.
 * @returns {Promise} - The route data
 */
export async function getData(route:string[]):Promise<ScotGov.Pages.FormPage> {
    const last = route.pop();
    const relPath = makePath(process.cwd(), 'routes', ...route, `${last}.json`);

    const fileContents = await readFile(relPath, { encoding: 'utf8' });
    return {
        ...JSON.parse(fileContents),
        route: makePath(...route, `${last}`),
    };
}

export async function getAllRoutes():Promise<string[]> {
    const relPath = makePath(process.cwd(), 'routes');
    return readdir(relPath, {
        withFileTypes: true,
        recursive: true,
    }).then((fileList) => (
        fileList
            .filter((file) => file.isFile())
            .map((file) => {
                const { name, path } = file;
                const ext = extname(name);
                const baseName = basename(name, ext);
                const relFilePath = relative(relPath, path);

                return makePath(relFilePath, baseName);
            })
    ));
}

/**
 * @param {object} prevState - the previous state of the form
 * @param {FormData} formData - data in the submitted form
 * @returns {object} - Response data for the submission
 */
const handleSubmit = async function handleSubmit(
    prevState: ScotGov.Form.State,
    formData: FormData,
):Promise<ScotGov.Form.State> {
    if (!formData.has('_form')) {
        return {
            message: 'error',
            errors: [
                {
                    field: '',
                    message: 'There was an error with form data. Please try again later.',
                },
            ],
        };
    }

    const route = (formData.get('_form') as string).split('/');
    const { components, nextPage } = await getData(route);
    const errors:ScotGov.Form.Error[] = [];

    const rawFormData:{[key:string]: string} = {};
    components.forEach((rawComponent) => {
        let formValue = '';

        if (
            typeof rawComponent === 'string'
            || !rawComponent.type
            || !rawComponent.name
        ) {
            return;
        }

        const component = parseComponentType(rawComponent);

        const {
            id,
            name,
            type,
            required,
            label,
        } = component;

        let {
            id: fieldId,
        } = component;

        if (
            type === 'date'
            && component.multiple
        ) {
            fieldId = `${id}-day`;

            if (formData.get(`${name}`)) {
                formValue = formData.get(`${name}`) as string;
            } else if (
                formData.get(`${name}-day`)
                && formData.get(`${name}-month`)
                && formData.get(`${name}-year`)
            ) {
                formValue = [
                    formData.get(`${name}-year`),
                    formData.get(`${name}-month`),
                    formData.get(`${name}-day`),
                ].join('-') as string;
            }
        } else {
            formValue = formData.get(name) as string;
        }

        rawFormData[name] = formValue;

        if (required && !formValue) {
            errors.push({
                field: id,
                href: fieldId !== id ? `#${fieldId}` : undefined,
                message: `"${label}" is required`,
                fieldMessage: 'This field is required.',
            });
        }
    });

    if (errors.length > 0) {
        return {
            message: 'error',
            errors,
            values: rawFormData,
        };
    }

    let next = '';

    if (typeof nextPage === 'string') {
        next = nextPage;
    } else {
        next = nextPage.default;

        nextPage.options?.every(({ field, value, page }) => {
            if (rawFormData[field] === value) {
                next = page;
                return false;
            }

            return true;
        });
    }

    return redirect(next);
};

export default handleSubmit;