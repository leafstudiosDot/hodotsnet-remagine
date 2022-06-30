import {Prompt} from './Modal';

export default {
    title: "Prompt",
    component: Prompt
}

const Template = (args) => <Prompt {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    enabled: true,
    title: "Prompt",
    desc: "This is a prompt.",
    acceptText: "Accept",
    rejectText: "Reject",
    height: 200
}