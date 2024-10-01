---
sidebar_position: 81
---

# SendMessages.js

Este código define un componente funcional llamado SendMessages que representa un formulario para enviar mensajes en una interfaz de chat. 

```jsx
import React from "react";

function SendMessages() {
  return (
  <form>
  <div className="type_msg row">
  <div className="input_msg_write col-sm-9">
  <input type="text" className="write_msg" placeholder="Mensaje..." />
  </div>
  <div className="col-sm-3 text-center">
  <button className="msg_send_btn mt-3" type="submit">
  enviar
  </button>
  </div>
  </div>
  </form>
  );
}

export default SendMessages;
```

## Explicación

### Importación de React

- **import React from "react";**: Importa la biblioteca React para poder utilizar sus características.

### Definición del componente SendMessages

Define un componente funcional llamado SendMessages. Este componente devuelve un formulario form que representa la estructura para enviar mensajes en una interfaz de chat. Incluye:

- Un contenedor div con la clase de estilo type_msg row.
- Dentro de este contenedor, hay otro contenedor div con la clase de estilo input_msg_write col-sm-9 que contiene un elemento de entrada input con la clase write_msg y un marcador de posición (placeholder) que dice "Mensaje...".
- Otro contenedor div con la clase de estilo col-sm-3 text-center que contiene un botón button con la clase msg_send_btn mt-3 y el texto "Enviar".

### Exportación del componente:

- **export default SendMessages;**: Exporta el componente SendMessages para que pueda ser utilizado en otros archivos.

En resumen, el componente SendMessages representa visualmente un formulario para enviar mensajes en una interfaz de chat. Incluye un campo de entrada para escribir el mensaje y un botón para enviarlo. 