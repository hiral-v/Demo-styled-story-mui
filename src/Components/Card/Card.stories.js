import React from 'react';
import  { Story } from '@storybook/react';
import { CardProps } from '@mui/material/Card';
import ImgMediaCard from './Card';

export default {
    title: 'Card',
    component: ImgMediaCard,
    argTypes: {
        loading: {
            options: ['true'],
            control: {
                type: 'inline-radio'
            }
        },
    }
  }
  
const Template: Story<CardProps> = (args) => <ImgMediaCard  {...args}/>
const TemplateLoading: Story<CardProps> = (args) => <ImgMediaCard loading  {...args}/>
  
export const Basic = Template.bind({});
export const Loading = TemplateLoading.bind({});
  
