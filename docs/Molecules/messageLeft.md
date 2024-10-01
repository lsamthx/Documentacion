---
sidebar_position: 113
---

# MessageLeft.js (Molecules)

Este componente representa visualmente un mensaje del soporte en el lado izquierdo de la interfaz de chat, con el contenido del mensaje y la hora del mensaje. Los estilos específicos de chat se aplican para mantener la coherencia en la apariencia de la interfaz de chat.

```jsx
import React from "react";
import ChatStyle from "../../styles/Chat/ChatStyle";

import { Stack, Typography } from '@mui/material';

export const MessageLeft = (props) => {
  const { message = '', hourMessage = '' } = props;
  return (
  <Stack style={{...ChatStyle.BazMessage, ...ChatStyle.MessageLeft}}> 
  <Typography
  variant='helper3'
  color="bazSecondary.400"
  sx={{
  width: '92.5%',
  textAlign: 'left',
  fontSize: '16px',
  }}
  >

  <span style={ChatStyle.BoldText}>Soporte: </span>{message}
  </Typography>
  <Stack style={ChatStyle.HourText}>
  {hourMessage}
  </Stack>
  </Stack>
  );
};
```