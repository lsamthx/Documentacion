---
sidebar_position: 44
---

# TimeCounter.js

El componente TimeCounter es un componente de React que utiliza el componente TextField de Material-UI para permitir a los usuarios introducir o modificar una cantidad de tiempo en horas y minutos.

```js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const TimeCounter = ({ width }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

  if (name === 'time') {
    const [newHours, newMinutes] = value.split(':');
    setHours(parseInt(newHours, 10) || 0);
    setMinutes(parseInt(newMinutes, 10) || 0);
  }
  };

  return (
    <div>
    <TextField
    type="text"
    inputProps={{ min: '0', style: { textAlign: 'left' } }}
    name="time"
    value={`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`}
    onChange={handleInputChange}
    label="Tiempo"
    variant="outlined"
    style={{ width: width }}
    InputProps={{
    endAdornment: (
    <div
    style={{
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    }}
    >
    <AccessTimeIcon style={{ color: '#818181' }} />
    </div>
    ),
    }}
    />
    </div>
  );
};

export default TimeCounter;
```