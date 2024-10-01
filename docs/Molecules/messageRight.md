---
sidebar_position: 114
---

# MessageRight.js (Molecules)

Este componente representa visualmente un mensaje enviado por el usuario en el lado derecho de la interfaz de chat, con el nombre de usuario, el contenido del mensaje y la hora del mensaje. Los estilos específicos de chat se aplican para mantener la coherencia en la apariencia de la interfaz de chat.

```js
import React, { useState } from "react";

import { Stack, Typography } from '@mui/material';
import ChatStyle from "../../styles/Chat/ChatStyle";

export const MessageRight = (props) => {
  const { message = '', hourMessage = '', userName = 'Usuario' } = props;
  
  return (
  <Stack
  style={{...ChatStyle.BazMessage, ...ChatStyle.MessageRight}}
  >

  <Typography
  variant='helper3'
  color="bazSecondary.400"
  sx={{
  width: '93%',
  textAlign: 'left',
  fontSize: '16px',
  }}
  >
  <span
  style={ChatStyle.BoldText}
  >
  {userName}: 
  </span>
  {message}
  </Typography>

  <Stack style={ChatStyle.HourText}>
  {hourMessage}
  </Stack>
  </Stack>
  );
};
```