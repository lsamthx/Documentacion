---
sidebar_position: 78
---

# Messages.js

Este código define un componente llamado Messages que representa la sección de mensajes en una interfaz de chat. 

```jsx
import React from "react";
import SendMessages from "./SendMessages";
import IncomingMSG from "./IncomingMSG";
import OutcomingMSG from "./OutcomingMSG";

function Messages() {

    const messages = [1,2,3,4,5,6,7,8,9,10,11,12];

  return (
    <div className="mesgs">
      {/* <!-- Historia inicio --> */}
      <div className="msg_history">
      {
      messages.map( (msg) => (
      (msg % 2) ? <IncomingMSG key={msg} /> : <OutcomingMSG key={msg} />
      ))
      }

    {/* <IncomingMSG />
    <OutcomingMSG /> */}
    </div>
    {/* <!-- Historia Fin --> */}

    <SendMessages />
    </div>
  );
}

export default Messages;
```

## Explicación

### Importación de React y componentes relacionados

- **import React from "react";**: Importa la biblioteca React para poder utilizar sus características.
- **import SendMessages from "./SendMessages";**: Importa el componente SendMessages desde el archivo correspondiente.
- **import IncomingMSG from "./IncomingMSG";**: Importa el componente IncomingMSG desde el archivo correspondiente.
- **import OutcomingMSG from "./OutcomingMSG";**: Importa el componente OutcomingMSG desde el archivo correspondiente.

### Definición del componente Messages

Define un componente funcional llamado Messages. Este componente devuelve un fragmento que contiene:

- Un contenedor div con la clase de estilo mesgs.
- Dentro de este contenedor, hay otro contenedor div con la clase de estilo msg_history. Este contenedor renderiza mensajes entrantes IncomingMSG o salientes OutcomingMSG dependiendo del valor par o impar de cada elemento en el array messages.
- Después del contenedor de historia de mensajes, se incluye el componente SendMessages.

### Exportación del componente

- **export default Messages;**: Exporta el componente Messages para que pueda ser utilizado en otros archivos.

En resumen, el componente Messages representa la sección de mensajes en una interfaz de chat. Renderiza mensajes entrantes o salientes dependiendo del valor par o impar de los elementos en el array messages. También incluye el componente SendMessages para permitir a los usuarios enviar nuevos mensajes. 
