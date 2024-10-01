---
sidebar_position: 45
---

# TimePicker.js

Este componente proporciona un selector de tiempo personalizado con estilos específicos y opciones de configuración para las horas y minutos.

```js
import React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { styled } from '@mui/system';
import { Label } from '@material-ui/icons';

const StyledMobileTimePicker = styled(MobileTimePicker)({
  width: '6rem', 
  color:"gray"
});

const CustomTimePicker = ({ defaultValue, label }) => {
  const currentTime = dayjs().format('HH:mm');
  const defaultTime = defaultValue || currentTime;

return (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
  <StyledMobileTimePicker
  defaultValue={defaultTime}
  label={label}
  ampmInClock
  views={['hours', 'minutes']}
  />
  </LocalizationProvider>
  );
};

export default CustomTimePicker;
```