import * as validation from '@/lib/validation';

const data = {
    title: {
        caption: 'Test Page',
        title: 'Outputting components?',
    },
    components: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="#">Maecenas eleifend</a> dictum lacus, id vulputate nulla egestas in. Donec vitae sapien consectetur, feugiat dolor eget, porttitor turpis. Fusce porttitor viverra feugiat. Donec pretium feugiat posuere. Praesent pharetra justo purus, et venenatis nulla efficitur sit amet. Praesent dignissim nulla nisi, dictum mattis massa pulvinar nec. Maecenas pulvinar nulla enim, at egestas risus elementum a. Proin sed hendrerit risus, nec efficitur turpis. Curabitur id cursus elit, cursus ornare dolor. Donec non tempor sapien. In hac habitasse platea dictumst. Ut malesuada elit blandit, facilisis nibh at, sodales risus.',
        {
            type: 'list',
            items: [
                'National Insurance card',
                'benefit letter',
                'payslip',
                'P60',
            ],
        },
        {
            type: 'confirmation-message',
            title: 'Landlord added successfully',
            content: 'You have added the landlord <strong>John Smith</strong> to the application.',
        },
        {
            type: 'accordion',
            id: 'accordion',
            items: [
                {
                    id: 'accordion-1',
                    title: 'Accordion 1',
                    text: '<p>Accordion 1 paragraph</p>',
                },
                {
                    id: 'accordion-2',
                    title: 'Accordion 2',
                    text: '<p>Accordion 2 paragraph</p>',
                },
            ],
        },
        {
            type: 'tabs',
            id: 'tabs',
            items: [
                {
                    id: 'tabs-1',
                    title: 'Accordion 1',
                    text: '<p>Tab 1 paragraph</p>',
                },
                {
                    id: 'tabs-2',
                    title: 'Accordion 2',
                    text: '<p>Tab 2 paragraph</p>',
                },
            ],
        },
        {
            type: 'category-list',
            layout: 'grid',
            spacing: 'narrow',
            items: [
                {
                    type: 'card',
                    title: 'Environment',
                    link: '#',
                    text: 'Access to and protection of the countryside and managing wildlife on your land',
                    image: {
                        src: 'http://placehold.it/1280x720',
                        alt: 'Hello',
                    },
                },
                {
                    type: 'card',
                    title: 'Environment',
                    link: '#',
                    text: 'Access to and protection of the countryside and managing wildlife on your land',
                },
                {
                    title: 'Environment',
                    link: '#',
                    text: 'Access to and protection of the countryside and managing wildlife on your land',
                },
            ],
        },
        {
            type: 'grid',
            columns: 2,
            items: [
                {
                    type: 'image',
                    src: 'http://placehold.it/1280x720',
                    alt: 'Hello',
                    ratio: '43',
                    caption: 'This is a caption',
                },
                {
                    type: 'image',
                    src: 'http://placehold.it/1280x720',
                    alt: 'Hello',
                    ratio: '43',
                },
                {
                    type: 'image',
                    src: 'http://placehold.it/1280x720',
                    alt: 'Hello',
                    ratio: '43',
                },
            ],
        },
        {
            id: 'national-insurance-warning',
            type: 'warning',
            text: 'You do not need to add your National Insurance number. If you do it helps us process your application as quickly as possible.',
        },
        {
            id: 'radios',
            type: 'radios',
            name: 'radios',
            label: 'Was this page useful?',
            hintText: 'Select one',
            required: true,
            items: [
                {
                    label: 'Yes',
                    value: 'yes',
                },
                {
                    label: 'No',
                    value: 'no',
                },
                {
                    label: 'Maybe',
                    value: 'maybe',
                },
            ],
        },
        {
            id: 'checkboxes',
            type: 'checkboxes',
            name: 'checkboxes',
            label: 'Do you receive any of these benefits?',
            hintText: 'Select all that apply',
            required: true,
            items: [
                {
                    label: 'Universal credit',
                    value: 'uc',
                },
                {
                    label: 'Pension credit',
                    value: 'pc',
                },
                {
                    label: 'Income-based job seekers allowance',
                    value: 'jsa',
                },
                {
                    label: 'I do not recieve any of these benefits',
                    value: 'none',
                    exclusive: true,
                },
            ],
        },
        {
            id: 'textarea',
            type: 'textarea',
            name: 'textarea',
            label: 'Description',
            required: true,
            conditional: {
                type: 'or',
                conditions: [
                    {
                        field: 'checkboxes',
                        value: 'uc',
                        operator: 'contains',
                    },
                    {
                        field: 'radios',
                        value: 'yes',
                        operator: 'equals',
                    },
                ]
            },
        },
        {
            id: 'details',
            type: 'details',
            label: 'I cannot sign in',
            items: [
                'This is some text!',
                {
                    type: 'list',
                    items: [
                        'A list',
                        'inside',
                        'the details',
                    ],
                },
            ],
        },
        {
            id: 'download',
            type: 'download',
            label: 'Scotland\'s Artificial Intelligence Strategy - Trustworthy, Ethical and Inclusive',
            metadata: [
                {
                    name: 'File type',
                    value: '44 page pdf',
                },
            ],
            link: '#',
        },
        {
            type: 'sequential-navigation',
            id: 'sequential-navigation',
            prev: {
                label: 'Apply for or renew a blue badge',
                link: '#',
            },
            next: {
                label: 'Eligability: who can have one',
                link: '#',
            },
        },
        {
            id: 'select',
            name: 'select',
            type: 'select',
            label: 'Dropdown',
            items: [
                {
                    label: 'Universal credit',
                    value: 'uc',
                },
                {
                    label: 'Pension credit',
                    value: 'pc',
                },
                {
                    label: 'Income-based job seekers allowance',
                    value: 'jsa',
                },
                {
                    label: 'I do not recieve any of these benefits',
                    value: 'none',
                },
            ],
        },
        {
            id: 'nino',
            name: 'nino',
            type: 'text',
            label: 'National Insurance number',
            hintText: 'For example, QQ 12 34 56 C',
            optional: 'if you know it',
            validation: [
                validation.isValidNino(),
                validation.maxLength(4),
                validation.pattern(/^[A-Z]+$/i),
            ],
        },
    ],
    nextButton: 'Continue',
    backButton: false,
    nextPage: {
        default: '/about-you/details',
        options: [
            {
                field: 'nino',
                isNull: true,
                page: '/about-you/nino',
            },
        ],
    },
};

export default data;
