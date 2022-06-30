import { Prompt } from './Modal';
import { action } from '@storybook/addon-actions';

export default {
    title: "Prompt",
    component: Prompt
}

const Template = (args) => <Prompt accept={action("Accepted")} reject={action("Rejected")} {...args} />

export const Primary = Template.bind({});
Primary.args = {
    enabled: true,
    title: "Prompt",
    desc: "This is a prompt.",
    acceptText: "Accept",
    rejectText: "Reject",
    height: 200
}