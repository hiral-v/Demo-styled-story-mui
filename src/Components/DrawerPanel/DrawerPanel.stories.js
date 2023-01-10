import React from 'react';
import  { Story } from '@storybook/react';
import { DrawerProps } from '@mui/material/Drawer';
import DrawerPanel from './DrawerPanel';

export default {
    title: 'Drawer',
    component: DrawerPanel,
    argTypes: {
        width: {
            name: 'width',
            type: { name: 'string', required: true },
            defaultValue: '100px'
        },
        anchor: {
            options: ['left', 'right', 'top', 'bottom'],
            control: {
                type: 'select'
            }
        },
        variant: {
            options: ['permanent', 'temporary', 'persistent'],
            control: {
                type: 'select'
            }
        },
        keepMounted: {
            options: ['true', 'false'],
            control: {
                type: 'inline-radio'
            }
        },
    }
  }
  
  const Template: Story<DrawerProps> = (args) => <DrawerPanel {...args}/>
  
  export const Basic = Template.bind({});
  
