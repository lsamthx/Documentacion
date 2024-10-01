---
sidebar_position: 17
---

# DayCounter.js

Este componente DayCounter ofrece un campo de entrada de números con un ícono de calendario que permite al usuario incrementar rápidamente el número de días. El ancho del campo de entrada se puede personalizar mediante la propiedad width.

```js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const DayCounter = ({width}) => {
  const [days, setDays] = useState(1);

  const handleIncrement = () => {
    setDays(prevDays => prevDays + 1);
  };

  return (
    <div>
      <TextField
      type="number"
      value={days}
      onChange={(e) => setDays(e.target.value)}
      label="Días"
      variant="outlined"
      style={{width: width}}
      InputProps={{
      endAdornment: (
      <div
      style={{
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer', 
      }}
      onClick={handleIncrement}
      >
      <CalendarMonthIcon style={{ color: '#818181' }} />
      </div>
      ),
      }}
      />
    </div>
  );
};

export default DayCounter;
```
