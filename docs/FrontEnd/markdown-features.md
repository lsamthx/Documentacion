---
sidebar_position: 4
---

# 📨 BoxMessage.js

Este componente **BoxMessage** es un contenedor para mensajes que utiliza `@mui/material` y `@material-ui/core` para mostrar un mensaje, una fecha, y la hora de forma apilada.

### 🛠️ Implementación del componente

```jsx
import { Stack } from "@mui/material";
import stylesChatWex from "../../styles/Molecules/ChatWex/ChatWex";
import { Typography } from "@material-ui/core";

const BoxMessaje = ({
    messsage = '',  // 📝 El mensaje a mostrar
    date = '',      // 📅 La fecha a mostrar
    hours = '',     // ⏰ La hora a mostrar
    sx = {},        // ✨ Estilos adicionales para el contenedor
    extraClass = {} // 🎨 Clases CSS adicionales para el contenedor
}) => {
  return (
    <Stack style={{ ...stylesChatWex.messageBox, ...sx, ...extraClass }}>
      <Stack style={stylesChatWex.textMessage}>
        <Typography variant="p">
          {messsage}  // 📝 Mensaje de texto
        </Typography>
      </Stack>
      <Stack style={stylesChatWex.textDate}>
        <Typography variant="p">
          {date}-{hours}  // 📅 Fecha y ⏰ hora
        </Typography>
      </Stack>
    </Stack>    
  );
}

export default BoxMessaje;
```

### 🗃️ Imports

- Stack: Componente de la biblioteca @mui/material para crear contenedores flexibles y apilados.
- stylesChatWex: Archivo de estilos que contiene los estilos personalizados para los mensajes de chat.
- Typography: Componente de @material-ui/core para mostrar texto con estilos predefinidos.

### 📦 Propiedades del componente

| Propiedad     | Tipo       | Descripción                                                          |
| ------------- | ---------- | -------------------------------------------------------------------- |
| `messsage`    | `string`   | 📝 El mensaje a mostrar (por defecto es una cadena vacía)             |
| `date`        | `string`   | 📅 La fecha a mostrar (por defecto es una cadena vacía)               |
| `hours`       | `string`   | ⏰ Las horas a mostrar (por defecto es una cadena vacía)              |
| `sx`          | `object`   | ✨ Un objeto de estilos adicionales que se aplican al contenedor      |
| `extraClass`  | `object`   | 🎨 Un objeto de clases CSS adicionales para el contenedor principal   |
