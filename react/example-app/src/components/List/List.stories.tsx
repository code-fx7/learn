import { Story, Meta } from '@storybook/react';
import List from './List';

export default {
    title: 'List',
    component: List,
} as Meta;

const Template: Story = (args:any) => (
    <List {...args} />
);

export const Large = Template.bind({});
Large.args = {
    size: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
};