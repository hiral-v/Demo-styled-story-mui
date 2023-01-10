import React from 'react';
import  { Story } from '@storybook/react';
import { SkeletonProps } from '@mui/material/Skeleton';
import SkeletonLoader from './SkeletonLoader';

export default {
    title: 'Skeleton',
    component: SkeletonLoader,
    argTypes: {
        width: {
            name: 'width',
            type: { name: 'string', required: true },
            defaultValue: '100px'
        },
        height: {
            name: 'height',
            type: { name: 'string', required: true },
            defaultValue: '40px'
        },
        variant: {
            options: ['text', 'circular', 'rectangular', 'rounded'],
            control: {
                type: 'select'
            }
        },
        animation: {
            options: ['wave', 'pulse', 'false'],
            control: {
                type: 'inline-radio'
            }
        },
    }
  }
  
  const Template: Story<SkeletonProps> = (args) => <SkeletonLoader {...args}/>
  
  export const Basic = Template.bind({});
  
