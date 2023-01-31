import React from 'react';
import  { Story } from '@storybook/react';
import { TextFieldProps } from '@mui/material/TextField';
import InputField from './InputField';

export default {
    title: 'Input',
    component: InputField,
    argTypes: {
      disabled: { type: 'boolean' },
      fullWidth: { type: 'boolean' },
      placeholder: {
        name: 'placeholder',
        type: { name: 'string', required: false },
        defaultValue: 'Enter Value'
      },
      type: {
        options: ['text', 'email', 'password'],
        control: {
          type: 'inline-radio'
        }
      },
      variant: {
        options: ['standard', 'outlined', 'filled'],
        control: {
          type: 'inline-radio'
        }
      },
      multiline: {
        options: ['true'],
        control: {
          type: 'inline-radio'
        }
      },
      size: {
        options: ['medium', 'small'],
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
  
  const Template: Story<TextFieldProps> = (args) => <InputField {...args}/>
  
  export const Basic = Template.bind({});
  