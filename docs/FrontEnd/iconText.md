---
sidebar_position: 24
---

Este componente IconText combina un icono y un texto en un formato visualmente agradable utilizando un contenedor div flexible y el componente Typography de Material-UI.

# IconText.js

```js
import React from 'react';
import Typography from '@mui/material/Typography';

function IconText({ iconName, text,numb }) {
  return (
    <div style={{ display: 'flex' }}>
    <div style={{ marginTop: '1px', marginRight: '5px' }}>{iconName}</div>
    <Typography variant="h7"
    sx={{ color: "darkgray" }}>{text}</Typography>
    </div>
  );
}

export default IconText;
```