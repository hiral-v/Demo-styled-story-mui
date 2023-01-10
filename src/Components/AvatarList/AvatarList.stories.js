import React from 'react';
import  { Story } from '@storybook/react';
import AvatarList from './AvatarList';
import { AvatarProps } from '@mui/material/Avatar'

export default {
    title: 'Avatar List',
    component: 'AvatarList',
    argTypes: {
        value: {
            name: 'value',
            type: { name: 'string', required: true },
            defaultValue: 'H'
        },
        max: {
            name: 'max',
            type: { name: 'string', required: true },
            defaultValue: '4'
        },
        total: {
            name: 'total',
            type: { name: 'string', required: true },
            defaultValue: '6'
        },
        variant: {
          options: ['rounded', 'square', 'contained'],
          control: {
            type: 'inline-radio'
          }
        },
    }
}
const Template: Story<AvatarProps> = (args) => <AvatarList {...args}></AvatarList>
const TemplateLoading: Story<AvatarProps> = (args) => <AvatarList loading  {...args}></AvatarList>

export const Default = Template.bind({});
export const Loading = TemplateLoading.bind({});