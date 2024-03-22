import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';

import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import Question from '@/components/Question';
import Input from '@/components/Input';
import FieldGroup from '@/components/FieldGroup';
import Pagination from '@/components/Pagination';
import SequentialNavigation from '@/components/SequentialNavigation';
import SideNavigation from '@/components/SideNavigation';
import FeatureHeader from '@/components/FeatureHeader';
import NotificationBanner from '@/components/NotificationBanner';
import DateInput from '@/components/Date';
import Accordion, { AccordionItem } from '@/components/Accordion';
import ContactDetails from '@/components/ContactDetails';
import FileDownload from '@/components/FileDownload';

export const metadata:Metadata = {
    title: 'Prototype Toolkit',
};

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const Page:React.FC = function Page() {
    const pageTitle:string = (
        typeof metadata.title === 'string'
            ? metadata.title
            : 'Social Security Scotland'
    );

    return (
        <>
            <Wrapper>
                <PageHeader
                    title={pageTitle}
                    metadata={[
                        {
                            name: 'Last updated',
                            value: <time>July 20th 2023</time>,
                        },
                    ]}
                />
            </Wrapper>
            <Wrapper>
                <p>
                    This is something that you’ll be able to use to build up pages using the
                    {' '}
                    <a href="https://designsystem.gov.scot" target="_blank" rel="noopener noreferrer">
                        Digital Scotland Design System
                    </a>
                    .
                </p>

                <hr />

                <h2>Buttons</h2>
                <h3>Styles</h3>
                <ButtonGroup>
                    <Button>Button</Button>
                    <br />
                    <Button variants="secondary">Secondary</Button>
                    <br />
                    <Button variants="cancel">Cancel</Button>
                    <br />
                    <Button disabled>Disabled</Button>
                </ButtonGroup>

                <h3>Sizes</h3>
                <ButtonGroup>
                    <Button size="small">Small</Button>
                    <br />
                    <Button size="fixed">Fixed</Button>
                    <br />
                    <Button size="max">Max</Button>
                </ButtonGroup>

                <h3>Icons</h3>
                <ButtonGroup>
                    <Button
                        variants="cancel"
                        icon="chevron_left"
                        iconSide="left"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                    >
                        Continue
                    </Button>
                    <br />
                    <Button
                        icon="search"
                        iconSide="icon-only"
                    >
                        Search
                    </Button>
                </ButtonGroup>

                <hr />

                <h2>Text Inputs</h2>
                <Question id="field-1" label="Field">
                    <Input name="field-1" id="field-1" />
                </Question>

                <fieldset>
                    <legend>Fixed-width</legend>

                    <Question id="field-1" label="20 characters">
                        <Input name="field-fixed-20" id="field-fixed-20" width="fixed-20" />
                    </Question>

                    <Question id="field-1" label="10 characters">
                        <Input name="field-fixed-10" id="field-fixed-10" width="fixed-10" />
                    </Question>

                    <Question id="field-1" label="5 characters">
                        <Input name="field-fixed-5" id="field-fixed-5" width="fixed-5" />
                    </Question>

                    <Question id="field-1" label="4 characters">
                        <Input name="field-fixed-4" id="field-fixed-4" width="fixed-4" />
                    </Question>

                    <Question id="field-1" label="3 characters">
                        <Input name="field-fixed-3" id="field-fixed-3" width="fixed-3" />
                    </Question>

                    <Question id="field-1" label="2 characters">
                        <Input name="field-fixed-2" id="field-fixed-2" width="fixed-2" />
                    </Question>
                </fieldset>

                <fieldset>
                    <legend>Fluid-width</legend>

                    <Question id="field-1" label="Three Quarter">
                        <Input
                            name="field-fluid-three-quarters"
                            id="field-fluid-three-quarters"
                            width="fluid-three-quarters"
                        />
                    </Question>

                    <Question id="field-1" label="Two Third">
                        <Input
                            name="field-fluid-two-thirds"
                            id="field-fluid-two-thirds"
                            width="fluid-two-thirds"
                        />
                    </Question>

                    <Question id="field-1" label="Half">
                        <Input
                            name="field-fluid-half"
                            id="field-fluid-half"
                            width="fluid-half"
                        />
                    </Question>

                    <Question id="field-1" label="One Third">
                        <Input
                            name="field-fluid-one-third"
                            id="field-fluid-one-third"
                            width="fluid-one-third"
                        />
                    </Question>

                    <Question id="field-1" label="One Quarter">
                        <Input
                            name="field-fluid-one-quarter"
                            id="field-fluid-one-quarter"
                            width="fluid-one-quarter"
                        />
                    </Question>
                </fieldset>

                <h3>Icon</h3>
                <Question id="field-1" label="Search">
                    <Input
                        name="search"
                        id="search"
                        icon="search"
                    />
                </Question>

                <h3>Currency</h3>
                <Question id="field-1" label="Search">
                    <Input
                        name="search"
                        id="search"
                        type="number"
                        currency="£"
                    />
                </Question>

                <h3>Inline Fields</h3>

                <Question
                    id="dob"
                    label="Date of birth"
                    tag="fieldset"
                    hintText="For example, 04 02 1992"
                >
                    <FieldGroup inline>
                        <Input
                            type="number"
                            name="dob-day"
                            id="dob-day"
                            width="fixed-2"
                        />
                        <Input
                            type="number"
                            name="dob-month"
                            id="dob-month"
                            width="fixed-2"
                        />
                        <Input
                            type="number"
                            name="dob-year"
                            id="dob-year"
                            width="fixed-4"
                        />
                    </FieldGroup>
                </Question>

                <h3>Date Picker</h3>
                <Question
                    id="dob-picker"
                    label="Date of birth"
                    tag="fieldset"
                    hintText="For example, 04 02 1992"
                >
                    <DateInput
                        name="dob-picker"
                        id="dob-picker"
                    />
                </Question>

                <Question
                    id="dob-multi"
                    label="Date of birth"
                    tag="fieldset"
                    hintText="For example, 04 02 1992"
                >
                    <DateInput
                        name="dob-multi"
                        id="dob-multi"
                        multiple
                    />
                </Question>

                <h3>Field Errors</h3>

                <Question
                    id="error"
                    label="Field Error"
                    error="This field is required"
                >
                    <Input
                        error
                        name="field-error"
                        id="field-error"
                    />
                </Question>

                <hr />

                <h2>Pagination</h2>

                <Pagination
                    aria-label="Search result pages"
                    currentIndex={5}
                    pages={['#', '#', '#', '#', '#', '#', '#', '#', '#', '#']}
                />

                <hr />

                <h2>Paging</h2>
                <SequentialNavigation
                    prev={{
                        type: 'prev',
                        label: 'Apply for or renew a Blue Badge',
                        link: '#',
                    }}
                    next={{
                        type: 'next',
                        label: 'Eligibility: who can have one?',
                        link: '#',
                    }}
                />

                <hr />
                <h2>Side Navigation</h2>

                <SideNavigation
                    items={[
                        {
                            label: 'Apples',
                            link: '#',
                            items: [
                                {
                                    label: 'Green apples',
                                    link: '#',
                                    items: [
                                        {
                                            label: 'Bramley',
                                            link: '#',
                                        },
                                        {
                                            label: 'Granny smith',
                                            link: '#',
                                        },
                                    ],
                                },
                                {
                                    label: 'Red apples',
                                    link: '#',
                                },
                            ],
                        },
                        {
                            label: 'Bananas',
                            link: '#',
                        },
                        {
                            label: 'Cherries',
                            link: '#',
                        },
                        {
                            label: 'Dates',
                            link: '#',
                        },
                    ]}
                />
                <hr />
                <h2>Feature Headers</h2>
                <FeatureHeader
                    title="Design Standards"
                    content="The patterns included here have been developed for use by government, public sector and third sector non-commercial organisations in Scotland."
                    imageData={{
                        src: '/images/social-security-scotland-logo.svg',
                        alt: 'Social Security Scotland logo',
                    }}
                />
                <h3>Coloured background</h3>
                <FeatureHeader
                    title="Design Standards"
                    content="The patterns included here have been developed for use by government, public sector and third sector non-commercial organisations in Scotland."
                    imageData={{
                        src: '/images/social-security-scotland-logo.svg',
                        alt: 'Social Security Scotland logo',
                    }}
                    background="grey"
                />
                <h3>Wide text</h3>
                <FeatureHeader
                    title="Design Standards"
                    content="The patterns included here have been developed for use by government, public sector and third sector non-commercial organisations in Scotland."
                    imageData={{
                        src: '/images/social-security-scotland-logo.svg',
                        alt: 'Social Security Scotland logo',
                    }}
                    wideText
                />
                <hr />
                <h2>Notification Banners</h2>
                <h3>Default</h3>
                <NotificationBanner
                    caption={{
                        text: 'We need to tell you about something',
                    }}
                />
                <h3>With close</h3>
                <NotificationBanner
                    caption={{
                        text: 'We need to tell you about something',
                    }}
                    hasClose
                />
                <h3>Success banner with link</h3>
                <NotificationBanner
                    caption={{
                        text: 'We need to tell you about ',
                        link: 'https://gov.scot/',
                        linkText: 'something',
                    }}
                    hasClose
                    success
                />
                <h3>With icon</h3>
                <NotificationBanner
                    caption={{
                        text: 'We need to tell you about something',
                    }}
                    icon
                    hasClose
                />

                <h2>Accordion</h2>
                <Accordion id="accordion-example" toggleAll>
                    <AccordionItem id="accordion-1" title="Healthcare for veterans">
                        <p>
                            Veterans are entitled to the same healthcare as any citizen. And there
                            are health care options and support available specifically for veterans.
                        </p>
                        <p>
                            If you have a health condition that’s related to your service, you’re
                            entitled to priority treatment based on clinical need.
                        </p>
                    </AccordionItem>
                    <AccordionItem id="accordion-2" title="Employability for veterans">
                        <p>
                            Veterans are entitled to the same healthcare as any citizen. And there
                            are health care options and support available specifically for veterans.
                        </p>
                        <p>
                            If you have a health condition that’s related to your service, you’re
                            entitled to priority treatment based on clinical need.
                        </p>
                    </AccordionItem>
                    <AccordionItem id="accordion-3" title="Housing for veterans">
                        <p>
                            Veterans are entitled to the same healthcare as any citizen. And there
                            are health care options and support available specifically for veterans.
                        </p>
                        <p>
                            If you have a health condition that’s related to your service, you’re
                            entitled to priority treatment based on clinical need.
                        </p>
                    </AccordionItem>
                </Accordion>

                <h2>Contact Details</h2>
                <ContactDetails
                    columns={[
                        [
                            {
                                title: 'Address',
                                content: (
                                    <>
                                        Scottish Government
                                        <br />
                                        St Andrew’s House
                                        <br />
                                        Regent Road
                                        <br />
                                        Edinburgh
                                        <br />
                                        EH1 3DG
                                    </>
                                ),
                            },
                            {
                                title: 'Email',
                                content: <a href="mailto:email@gov.scot">email@gov.scot</a>,
                            },
                            {
                                title: 'Phone',
                                content: (
                                    <>
                                        0123 456 7000
                                        <br />
                                        Main line is open 8am-5pm
                                        <br />
                                        <a href="https://www.gov.uk/call-charges">Find out about call charges</a>
                                    </>
                                ),
                            },
                            {
                                title: 'Out of hours',
                                content: '0123 456 7001',
                            },
                            {
                                title: 'Fax',
                                content: '0123 456 7002',
                            },
                            {
                                title: 'Website',
                                content: <a href="https://www.gov.scot">www.gov.scot</a>,
                            },
                        ],
                        [
                            {
                                title: 'Follow',
                                socials: {
                                    facebook: { link: '#', label: 'Facebook' },
                                    twitter: { link: '#', label: 'Twitter' },
                                    flickr: { link: '#', label: 'Flickr' },
                                    linkedin: { link: '#', label: 'LinkedIn' },
                                    instagram: { link: '#', label: 'Instagram' },
                                    youtube: { link: '#', label: 'YouTube' },
                                },
                            },
                        ],
                    ]}
                />
                <h2>File Download</h2>
                <FileDownload
                    link="#"
                    title="Scotland's Artificial Intelligence Strategy - Trustworthy, Ethical and Inclusive"
                    metadata={[
                        {
                            name: 'File type',
                            value: '44 page PDF',
                        },
                        {
                            name: 'File size',
                            value: '7.2MB',
                        },
                    ]}
                />
                <FileDownload
                    link="#"
                    image="https://designsystem.gov.scot/binaries/content/gallery/designsystem/examples/ai-publication-cover-png"
                    title="Scotland's Artificial Intelligence Strategy - Trustworthy, Ethical and Inclusive"
                    highlight
                    metadata={[
                        {
                            name: 'File type',
                            value: '44 page PDF',
                        },
                        {
                            name: 'File size',
                            value: '7.2MB',
                        },
                    ]}
                />
            </Wrapper>
        </>
    );
};

export default Page;