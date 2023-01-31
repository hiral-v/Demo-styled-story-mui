import React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

const MuiTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    padding: '9px 14px',
  }
})

interface Props {
  placeholder?: string;
  type?: string;
  value?: string;
  variant: 'standard' | 'outlined' | 'filled';
  label?: string;
  multiline?: boolean;
  rows?: number;
  fullWidth?: boolean;
  error?: boolean;
}

const InputField: React.FC<Props> = React.forwardRef(
    (
      {
        variant,
        label,
        placeholder,
        value,
        multiline,
        rows,
        error,
        type,
        fullWidth,
        ...rest
      }: Props,
    ) => {
      return (
        <FormControl>
            <MuiTextField
              className="input-field"
              placeholder={placeholder}
              variant={variant}
              value={value}
              fullWidth={fullWidth}
              label={label}
              multiline={multiline}
              rows={rows}
              type={type}
              error={error}
              {...rest}
          />
        </FormControl>
      )
    }
)

export default InputField