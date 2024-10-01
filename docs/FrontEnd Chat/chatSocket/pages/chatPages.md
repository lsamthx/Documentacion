---
sidebar_position: 69
---

# ChatPages.js

Este código define un componente funcional llamado ChatPages que representa la página principal de la interfaz de chat. 

```jsx
import React from "react";
import "../css/chat.css";
import InboxPeople from "../components/InboxPeople";
import Messages from "../components/Messages";
import ChatSelect from "../components/ChatSelect";

const ChatPages = () => {
  return (
    <div className="messaging">
    <div className="inbox_msg">
    <InboxPeople />
    {
    (!true) ? <Messages /> : <ChatSelect />

    }
    {/* <ChatSelect /> */}
    {/* <Messages /> */}
    </div>
    </div>
  );
};

export default ChatPages;
```

## Explicación

### Definición del componente ChatPages

Define un componente funcional llamado ChatPages. Este componente devuelve un fragmento que representa la estructura de la página principal de la interfaz de chat. Incluye:

- Un contenedor div con la clase de estilo messaging.
- Dentro de este contenedor, hay otro contenedor div con la clase de estilo inbox_msg.
- En el contenedor inbox_msg, se renderiza el componente InboxPeople.
- Se utiliza una expresión condicional ((!true) ? <Messages /> : <ChatSelect />) para decidir qué componente (Messages o ChatSelect) se debe renderizar. En este caso, siempre se renderiza el componente ChatSelect debido a la condición (!true), que siempre será false.

### Exportación del componente

- **export default ChatPages;**: Exporta el componente ChatPages para que pueda ser utilizado en otros archivos.

En resumen, el componente ChatPages representa la página principal de la interfaz de chat. Incluye un contenedor para la lista de personas (InboxPeople) y un componente de mensajes (Messages) o la selección de chat (ChatSelect) dependiendo de la lógica condicional implementada.
