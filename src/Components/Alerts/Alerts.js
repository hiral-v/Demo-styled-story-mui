import * as React from 'react';
import Alert, { AlertProps } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

interface Props extends AlertProps {
  icon?: React.FC;
  className?: string;
}

const BasicAlerts = ({ severity, value, ...rest }: Props) => {
  return (
    <Stack>
      <Alert severity={severity} {...rest}>{value}</Alert>
    </Stack>
  )
}
export default BasicAlerts;