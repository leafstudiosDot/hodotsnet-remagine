import { Prompt, SmallPrompt } from './Modal';
import { action } from '@storybook/addon-actions';

export default {
    title: "Remagine/Windows/Prompt",
    component: Prompt,
    parameters: {
        docs: {
          description: {
            component: 'Just a `Yes` or `No` dialog.',
          },
        },
    }
}

const Template = (args) => <Prompt accept={action("Accepted")} reject={action("Rejected")} {...args} />
const TemplateSmall = (args) => <SmallPrompt accept={action("Accepted")} reject={action("Rejected")} {...args} />

export const Primary = Template.bind({});
Primary.args = {
    enabled: true,
    title: "Prompt",
    desc: "This is a prompt.",
    acceptText: "Accept",
    rejectText: "Reject",
    height: 200
}

export const Small = TemplateSmall.bind({});
Small.args = {
    enabled: true,
    title: "Prompt",
    desc: "This is a prompt.",
    acceptText: "Accept",
    rejectText: "Reject",
    height: 200
}