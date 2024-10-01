---
sidebar_position: 36
---

# Select.js

Este componente ofrece un campo de selección personalizado con opciones dinámicas y la capacidad de ajustar dinámicamente su ancho en función del contenido seleccionado.

```js
import React, { useRef, useEffect } from 'react';
import { InputLabel, MenuItem, Select, Stack } from '@mui/material';

function SelectComponent({
  label,
  colorLabel,
  options,
  valueSelect = 'name',
  value = '',
  textColor,
  fontSize,
  borderColor,
  backgroundColor = 'transparent', 
  onChange = () => {},
}) {
  const selectRef = useRef(null);

  useEffect(() => {
    if (selectRef.current) {
    selectRef.current.style.width = 'auto';
    }
  }, [value]);

  return (
    <Stack>
    <InputLabel sx={{color:colorLabel}}>{label}</InputLabel>
    <Select
    ref={selectRef}
    sx={{
    '& .MuiOutlinedInput-notchedOutline': {
    borderColor: borderColor,
    },
    '& .MuiSelect-select': {
    backgroundColor: backgroundColor,
    },
    '& .MuiSelect-root': {
    height: '60%',
    width: '100%',
    color: textColor || 'white',
    fontSize: fontSize || 'inherit',
    },
    '& .MuiInputLabel-root': {
    color: textColor || 'white',
    fontSize: fontSize || 'inherit',
    },
    '& .MuiInputBase-input': {
    color: textColor || 'white',
    fontSize: fontSize || 'inherit',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
    },
    }}
    value={value}
    onChange={onChange}
    >
    {options
    ? options.map((option) => (
    <MenuItem key={`${option._id}`} value={option[valueSelect]}>
    {option.name}
    </MenuItem>
    ))
    : <></>}
    </Select>
    </Stack>
  );
}

export default SelectComponent;
```