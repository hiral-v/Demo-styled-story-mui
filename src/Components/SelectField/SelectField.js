import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectField = ({variant,autoWidth, multiple, labelValue, ...rest }: Props) => {
  const [value, setvalue] = React.useState('');

  const handleChange = (event) => {
    setvalue(event.target.value);
  };

  return (
    <div>
      <FormControl variant={variant} sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">{labelValue}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          autoWidth={autoWidth}
          onChange={handleChange}
          label={labelValue}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
export default SelectField 