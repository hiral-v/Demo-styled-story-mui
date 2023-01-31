import React from 'react';
import  { Story } from '@storybook/react';
import AvatarDisplay from './AvatarDisplay';
import { AvatarProps } from '@mui/material/Avatar'

export default {
    title: 'Avatar',
    component: 'AvatarDisplay',
    argTypes: {
      size: {
          name: 'Size',
          type: { name: 'string', required: true },
          defaultValue: '40px'
        },
        value: {
            name: 'value',
            type: { name: 'string', required: true },
            defaultValue: 'H'
        },
        variant: {
          options: ['rounded', 'square', 'contained', 'circular'],
          control: {
            type: 'inline-radio'
          }
        },
        stringAvatar: {
            name: 'stringAvatar',
            type: { name: 'string', required: true },
            defaultValue: 'Kent Dodds'
        }
    }
}
const Template: Story<AvatarProps> = (args) => <AvatarDisplay {...args}></AvatarDisplay>
const TemplateLoading: Story<AvatarProps> = (args) => <AvatarDisplay {...args} loading></AvatarDisplay>

export const Default = Template.bind({});
export const Loading = TemplateLoading.bind({});
