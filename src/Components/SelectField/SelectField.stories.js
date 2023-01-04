import React from 'react';
import  { Story } from '@storybook/react';
import { SelectProps } from '@mui/material/Select';
import SelectField from './SelectField';

export default {
    title: 'Select',
    component: SelectField,
    argTypes: {
        autoWidth: {
            options: ['true', 'false'],
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
        labelValue: {
            name: 'labelValue',
            type: { name: 'string', required: false },
            defaultValue: 'Name'
        }
    }
  }
  
  const Template: Story<SelectProps> = (args) => <SelectField {...args}/>
  
  export const Basic = Template.bind({});
  