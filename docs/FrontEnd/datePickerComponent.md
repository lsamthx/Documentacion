---
sidebar_position: 15
---

# DatePickerComponent.js

Este componente DatePickerComponent integra el selector de fecha de MUI X en tu aplicación de React. Las propiedades permiten personalizar la etiqueta, el valor inicial, la función de cambio, y las fechas mínimas y máximas permitidas.

```js
import { InputLabel, Stack } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

const DatePickerComponent = (props) => {
  const {
    titleLabel = '',
    value = null,
    setValue = () => { },
    minDate = null,
    maxDate = new Date()
  } = props;

  return (
    <Stack>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
    label={titleLabel}
    value={value}
    onChange={(newValue) => setValue(newValue)}
    maxDate={maxDate}
    minDate={minDate}
    />
    </LocalizationProvider>
    </Stack>
  );
}

export default DatePickerComponent;
```