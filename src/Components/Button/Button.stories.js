import React from 'react';
import  { Story } from '@storybook/react';
import { ButtonProps } from '@mui/material/Button';
import BaseButton from './Button';

export default {
    title: 'Button',
    component: 'BaseButton',
    argTypes: {
        disabled: { type: 'boolean' },
        disableElevation: { type: 'boolean' },
        disableFocusRipple: { type: 'boolean' },
        fullWidth: { type: 'boolean' },
        variant: {
          options: ['contained', 'outlined', 'text'],
          control: {
            type: 'inline-radio'
          }
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: {
                type: 'inline-radio'
            }
        },
        color: {
          options: ['primary', 'secondary'],
          control: {
            type: 'select'
          }
        }
    }
}

const Template: Story<ButtonProps> = (args) => <BaseButton {...args} value="Button"/>

export const Default = Template.bind({});
