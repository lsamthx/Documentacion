---
sidebar_position: 100
---

# ButtonsRecivedCall.js

Este componente está diseñado para ser claro y accesible, con una estructura simple y funcionalidad enfocada en la gestión de eventos de llamada.

```js
import React from 'react';
import { Stack, IconButton, Typography } from '@mui/material';
import CallRounded from '@mui/icons-material/CallRounded';
import CallEndRounded from '@mui/icons-material/CallEndRounded';

const ButtonsRecived = ({ onCallButtonClick, onCallEndButtonClick ,eventCall = () => {},
eventFinishCall = () => {},}) => {
    return (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ height: '100vh' }} 
        >
          <Stack direction="column" spacing={1} alignItems="center">
          
            <Typography style={{ marginTop: '1rem' ,fontSize: "calc(0.61vw + 15px)", 
          width: "100%", color:"#8bc34a" }}>
             Llamada en curso
            </Typography>
          </Stack>
          <Stack direction="column" spacing={1}>
            <IconButton   onClick={() => eventFinishCall()} sx={{ fontSize: '3rem' }}>
              <CallEndRounded  sx={{fontSize: 100, color:"red" }}  />
            </IconButton>
            <Typography style={{ marginTop: '1rem' ,fontSize: "calc(0.61vw + 15px)", 
          width: "100%", color:"#666f88" }}>
              Colgar llamada
            </Typography>
          </Stack>
        </Stack>
      );
    };

export default ButtonsRecived;
```

## Imports

**React**: Biblioteca principal de React.
**Stack, IconButton, Typography**: Componentes de la biblioteca @mui/material.
**CallRounded, CallEndRounded**: Iconos de @mui/icons-material.

## Propiedades del Componente

**onCallButtonClick, onCallEndButtonClick**: Funciones de clic que actualmente no se usan pero pueden ser útiles para expansión futura.
**eventCall, eventFinishCall**: Funciones predeterminadas que se ejecutarán al hacer clic en los botones correspondientes.

## Estructura del Componente

**Stack Principal**: Envuelve todos los elementos y centra el contenido vertical y horizontalmente en la página.
**Sección de Llamada en Curso**: Contiene un Typography para mostrar el texto "Llamada en curso".
**Botón para Colgar la Llamada**: Un IconButton que contiene el icono CallEndRounded y un Typography debajo para describir el botón.

