---
sidebar_position: 37
---

# SelectDashboard.js

El componente SelectDashboard es un selector personalizable que muestra una lista de opciones proporcionadas a través de la prop options. Utiliza useRef para obtener una referencia directa al selector y ajustar su ancho. También utiliza useEffect para actualizar el ancho del selector cada vez que cambia el valor seleccionado. Los estilos del selector y sus elementos secundarios se personalizan mediante el sistema de estilo sx de Material-UI. Si no hay opciones proporcionadas, el selector no mostrará ningún elemento del menú.

```js
import React, { useRef, useEffect } from 'react';
import { InputLabel, MenuItem, Select, Stack } from '@mui/material';

function SelectDashboard({
  label,
  fontFamily,
  fontWeight,
  colorLabel,
  options,
  valueSelect = 'name',
  value = '',
  textColor,
  fontSizeInput,
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
      <InputLabel sx={{ color: colorLabel, fontWeight: fontWeight, fontFamily: fontFamily, fontSize: fontSizeInput }}>
        {label}
      </InputLabel>
      <Select
        ref={selectRef}
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
            height: 'auto',
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
          '@media (max-width: 715px)': {
            fontSize: '1.5rem',
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
          : null}
      </Select>
    </Stack>
  );
}

export default SelectDashboard;
```


## Imports

### React:

 Se importa la biblioteca React para usar la funcionalidad de componentes, y se desestructuran useRef y useEffect.

### @mui/material:

**InputLabel**: Componente de Material-UI para etiquetas de entrada.
**MenuItem**: Componente de Material-UI para elementos del menú en el selector.
**Select**: Componente de Material-UI para el selector desplegable.
**Stack**: Componente de Material-UI para manejar el diseño flexbox de forma vertical u horizontal.

## Uso de useRef y useEffect

**useRef**: Se usa para crear una referencia mutable (selectRef) que se puede asignar al elemento Select para manipular su DOM directamente.

**useEffect**: Se ejecuta después de cada renderizado cuando cambia value. Si selectRef.current no es nulo, ajusta el ancho del selector a 'auto'.

### Estructura del JSX

**Stack**: Contenedor que organiza los elementos en una pila vertical.
**InputLabel**: Etiqueta del selector con estilos personalizados aplicados mediante sx.
**Select**: Elemento selector con referencia selectRef y estilos personalizados aplicados mediante sx.
**sx**: Objeto de estilos que personaliza la apariencia del selector y sus subcomponentes (.MuiOutlinedInput-notchedOutline, .MuiSelect-select, etc.).
**MenuItem**: Elementos del menú que se generan dinámicamente a partir del arreglo options.

