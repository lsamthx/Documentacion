---
sidebar_position: 189
---

# WexChat.js

El componente WexChat proporciona una interfaz de chat con mensajes predefinidos y opciones para enviar varios tipos de contenido.

```js
import { Button, TextareaAutosize } from "@material-ui/core";
import { Stack } from "@mui/material";
import { useState } from "react";
import stylesHome from "../../../styles/Molecules/ButtonsAgentsHome/agentHome";
import stylesChatWex from "../../../styles/Molecules/ChatWex/ChatWex";
import BoxMessaje from "../../../components/atoms/BoxMessaje";
import ButtonComponent from "../../../components/atoms/ButtonComponent";

function WexChat ({
}) {
  const [chatExample, setChatExample] = useState([{
    id: 1,
    userType: 'client',
    message: 'Hola, me gustaria pedir informes',
    date: '20/12/2024',
    hour: '12:30PM'
  }, {
    id: 1,
    userType: 'agent',
    message: 'Hola, buenas tarder',
    date: '20/12/2024',
    hour: '12:30PM'
  }, {
    id: 1,
    userType: 'agent',
    message: '¿Que paquete le interesa?',
    date: '20/12/2024',
    hour: '12:30PM'
  }, {
    id: 1,
    userType: 'client',
    message: 'Minutos ilimitados',
    date: '20/12/2024',
    hour: '12:30PM'
  }, {
    id: 1,
    userType: 'agent',
    message: '¿Que paquete le interesa?',
    date: '20/12/2024',
    hour: '12:30PM'
  }, {
    id: 1,
    userType: 'client',
    message: 'Minutos ilimitados',
    date: '20/12/2024',
    hour: '12:30PM'
  }, {
    id: 1,
    userType: 'agent',
    message: '¿Que paquete le interesa?',
    date: '20/12/2024',
    hour: '12:30PM'
  }, {
    id: 1,
    userType: 'client',
    message: 'Minutos ilimitados',
    date: '20/12/2024',
    hour: '12:30PM'
  }]);
  
  return (
      <Stack 
        direction="column"
        spacing={2}
        style={{ ...stylesChatWex.stack }}
      >
        <Stack style={stylesChatWex.chatStyle}>
          {chatExample.map(item => {
            console.log('item: ', item);
            return (
              <BoxMessaje
                key={`${item.userType}-${item.id}`}
                messsage={item.message}
                date={item.date}
                hours={item.hour}
                extraClass={item.userType === 'client' ? stylesChatWex.messageBoxClient : stylesChatWex.messageBoxAgent}
              />
            )
          })}
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
          spacing={2}
          style={stylesChatWex.textAreaWex}
        >
          <Stack sx={{ width: '50%' }}>
            <textarea style={{ resize: 'none' }} />
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="flex-start"
            spacing={2}
          >
            <ButtonComponent label="Enviar" />
            <ButtonComponent label="Imagen" />
            <ButtonComponent label="Archivo" />
            <ButtonComponent label="Terminar" />
          </Stack>
        </Stack>
      </Stack>
  );
}

export default WexChat;
```

## Hook useState

**chatExample**: Gestiona un array de mensajes de chat entre un cliente y un agente. Cada objeto de mensaje contiene propiedades como id, userType (cliente o agente), message (mensaje), date (fecha) y hour (hora).

## Renderización de Mensajes de Chat

Itera sobre el array chatExample usando map() para renderizar cada mensaje en un componente BoxMessaje. La propiedad extraClass se aplica condicionalmente según userType para estilar los mensajes de forma diferente para clientes y agentes.

## Interfaz de Chat

Utiliza componentes Stack de MUI para controlar el diseño.
Los mensajes están apilados verticalmente (direction="column").
Hay un área de texto para escribir mensajes con un elemento textarea redimensionable.
Botones para enviar mensajes, cargar imágenes, archivos y terminar la sesión de chat se muestran en un Stack horizontal (direction="row").

## Estilos

Se importan estilos CSS desde hojas de estilo externas (stylesChatWex, stylesHome) para aplicar estilos específicos a las cajas de mensajes y otros elementos dentro de la interfaz de chat.

## Componentes Utilizados

**BoxMessaje**: Un componente personalizado (presumiblemente definido en otro lugar) usado para mostrar mensajes individuales de chat con marcas de tiempo.
**ButtonComponent**: Un componente de botón personalizado usado para enviar mensajes, cargar archivos, etc.
