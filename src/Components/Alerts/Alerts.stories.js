import React from 'react';
import  { Story } from '@storybook/react';
import { AlertProps } from '@mui/material/Alert';
import BasicAlerts from './Alerts';

export default {
    title: 'Alert',
    component: 'BasicAlerts',
    argTypes: {
        severity: {
          options: ['error', 'warning', 'info', 'success'],
          control: {
            type: 'select'
          }
        },
        value: {
            name: 'value',
            type: { name: 'string', required: true },
            defaultValue: 'This is Alert!'
        },
        variant: {
          options: ['outlined', 'filled'],
          control: {
            type: 'inline-radio'
          }
        }
    }
}

const Template: Story<AlertProps> = (args) => <BasicAlerts {...args}/>

export const Default = Template.bind({});