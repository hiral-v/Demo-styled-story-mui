import React from 'react';
import  { Story } from '@storybook/react';
import { TypographyProps } from '@mui/material/Typography';
import Typography from './Typography';

export default {
    title: 'Typography',
    component: Typography,
    argTypes: {
      variant: {
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2'],
        control: {
          type: 'inline-radio'
        }
      },
    }
  }
  
  const Template: Story<TypographyProps> = (args) => <Typography {...args} value="Typography Text"></Typography>
  
  export const Basic = Template.bind({});
  