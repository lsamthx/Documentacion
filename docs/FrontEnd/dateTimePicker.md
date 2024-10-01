---
sidebar_position: 16
---

# DateTimePicker.js

Este componente CustomDateTimePicker integra el selector de fecha y hora de MUI X en tu aplicación de React. Las propiedades permiten personalizar la fecha y hora predeterminadas, así como la etiqueta que se muestra en el selector.

```js
import React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';

const CustomDateTimePicker = ({ defaultValue, isStartDate }) => {
  
  const today = dayjs();

  
  const defaultDate = defaultValue || today;


  const label = isStartDate ? 'Fecha de Inicio' : 'Fecha Fin';

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <MobileDateTimePicker
    label={label}
       
    />
    </LocalizationProvider>
  );
};

export default CustomDateTimePicker;
```