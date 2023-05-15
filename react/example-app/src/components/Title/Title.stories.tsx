import React from 'react';
import { Story, Meta } from '@storybook/react';
import Title, { Props } from './Title';

export default {
    title: 'Title',
    component: Title,
} as Meta;

const Template: Story<Props> = (args) => (
    <Title {...args} />
);

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    children: 'Example title',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    children: 'Example title',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    children: 'Example title',
};