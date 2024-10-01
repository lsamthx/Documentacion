---
sidebar_position: 110
---

# IncomingCalls.js

El componente IncomingCalls proporciona una interfaz de usuario para manejar llamadas entrantes, mostrando diferentes contenidos y botones de acción dependiendo de si la llamada ha sido contestada o no. Utiliza componentes de Material-UI para la presentación visual.

```js
import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import VibrationRoundedIcon from '@mui/icons-material/VibrationRounded';


const IncomingCalls = ({handleClick, nameAgent, handleEndClick,
  setCallAnswered = false,
  callAnswered = false}) => {


    return (
      <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '20vh' }}>
          {callAnswered ? (
              <>
                  <VibrationRoundedIcon sx={{ color:"#42a5f5", fontSize: 200 }} />
                  <Typography gutterBottom style={{ marginTop: '1rem', fontSize: "calc(0.61vw + 1rem)", width: "100%", color:"#666f88" }}>
                      Llamada en curso con {nameAgent} ..
                  </Typography>
                  <Button variant="contained" onClick={handleEndClick} style={{ marginLeft:"1rem", marginTop: '1rem', backgroundColor:"#830cc4", borderRadius:"1rem" }}>
                      Colgar Llamada
                  </Button>
              </>
          ) : (
              <>
                  <VibrationRoundedIcon sx={{ color:"#42a5f5", fontSize: 200 }} />
                  <Typography gutterBottom style={{ marginTop: '1rem', fontSize: "calc(0.61vw + 1rem)", width: "100%", color:"#666f88" }}>
                      Tienes una solicitud de llamada entrante de {nameAgent}
                  </Typography>
                  <Button variant="contained" onClick={handleClick} style={{ marginTop: '1rem', backgroundColor:"#830cc4", borderRadius:"1rem" }}>
                      Realizar Llamada
                  </Button>
              </>
          )}
      </Container>
  );
};

export default IncomingCalls;
```

## Imports

**React**: Se importa desde la biblioteca react para utilizar la funcionalidad de componentes de React.
**Button, Container y Typography**: Se importan desde @mui/material para usar componentes de la biblioteca Material-UI.
**VibrationRoundedIcon**: Se importa desde @mui/icons-material/VibrationRounded para mostrar un ícono de vibración.

## Definición del Componente IncomingCalls

IncomingCalls es un componente funcional que recibe varias propiedades:

**handleClick**: una función para manejar el evento de hacer clic en el botón "Realizar Llamada".
**nameAgent**: el nombre del agente que está llamando.
**handleEndClick**: una función para manejar el evento de hacer clic en el botón "Colgar Llamada".
**setCallAnswered**: una función para establecer el estado de si la llamada ha sido contestada.
**callAnswered**: un booleano que indica si la llamada ha sido contestada

## Renderización del Componente

Se utiliza el componente Container de Material-UI para centrar el contenido y establecer un ancho máximo.
Dentro del Container, se utiliza una declaración condicional para renderizar diferentes contenidos dependiendo del valor de callAnswered.

Si **callAnswered** es true:

Se muestra un ícono de vibración (VibrationRoundedIcon) con un color y tamaño específicos.
Se muestra un mensaje indicando que la llamada está en curso con el agente nameAgent.
Se muestra un botón para colgar la llamada, el cual dispara la función handleEndClick al hacer clic.

Si **callAnswered** es false:

Se muestra un ícono de vibración (VibrationRoundedIcon) con un color y tamaño específicos.
Se muestra un mensaje indicando que hay una solicitud de llamada entrante del agente nameAgent.
Se muestra un botón para realizar la llamada, el cual dispara la función handleClick al hacer clic.