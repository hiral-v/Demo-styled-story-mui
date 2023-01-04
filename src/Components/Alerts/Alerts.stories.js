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
            type: 'inline-radio'
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

// export const Error = () => <BasicAlerts severity="error" value="This is an error alert — check it out!"/>
// export const Warning = () => <BasicAlerts severity="warning" value="This is a warning alert — check it out!" />
// export const Info = () => <BasicAlerts severity="info"  value="This is an info alert — check it out!" />
// export const Success = () => <BasicAlerts severity="success" value="This is a success alert — check it out!" />
