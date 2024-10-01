---
sidebar_position: 35
---

# RadioButton.js

Este componente proporciona un grupo de botones de radio estilizados con Material-UI, lo que facilita la integración en una aplicación React.

```js
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const SelectCircle = ({
  title,
  options,
  selectedValue,
  onChange,
  onOptionSelect,
  orientation = 'vertical'
}) => {
  const theme = createTheme({
  palette: {
  primary: {
  main:"#9c27be",
  },
  },
  });

  const handleOptionSelect = (value) => {
  onChange(value);
  onOptionSelect(value); 
  };

  return (
    <ThemeProvider theme={theme}>
    <FormControl>
    <FormLabel id="demo-radio-buttons-group-label">{title}</FormLabel>
    <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    value={selectedValue}
    onChange={(event) => handleOptionSelect(event.target.value)}
    name="radio-buttons-group"
    sx={{
    flexDirection: orientation === 'horizontal' ? 'row' : 'column'
    }}
    >
    {options.map((option) => (
    <FormControlLabel
    key={option.value}
    value={option.value}
    control={<Radio color="primary" />}
    label={option.label}
    onChange={(e) => console.log('Hola: ', e.target.value)}
    />
    ))}
    </RadioGroup>
    </FormControl>
    </ThemeProvider>
  );
};

export default SelectCircle;
```