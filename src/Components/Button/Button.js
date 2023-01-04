import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

interface Props extends ButtonProps {
  icon?: React.FC;
  className?: string;
}

const BaseButton = ({ icon: Icon, variant, size, className, value, ...rest }: Props) => {
  // const {variant = 'contained', size, value, ...rest} = props
  return (
    <Button variant={variant} size={size} {...rest}>{value}</Button>
  )
}

export default BaseButton