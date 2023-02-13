import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/system';

const MuiButton = styled(Button)({
  padding: '8px 22px',  
})

interface Props extends ButtonProps {
  icon?: React.FC;
  className?: string;
}

const BaseButton = ({ icon: Icon, variant, size, className, value, ...rest }: Props) => {
  return (
    <MuiButton variant={variant} size={size} {...rest}>{value}</MuiButton>
  )
}

export default BaseButton