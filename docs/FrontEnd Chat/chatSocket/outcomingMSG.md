---
sidebar_position: 79
---

# OutcomingMSG.js

Este código define un componente funcional llamado OutcomingMSG que representa un mensaje saliente en una interfaz de chat.

```jsx
import React from "react";

function OutcomingMSG() {
  return (
    <div className="outgoing_msg">
    <div className="sent_msg">
    <p>Test which is a new approach to have all solutions</p>
    <span className="time_date"> 11:01 AM | June 9</span>
    </div>
    </div>
  );
}

export default OutcomingMSG;
```

## Explicación

### Importación de React

- **import React from "react";**: Importa la biblioteca React para poder utilizar sus características.

### Definición del componente OutcomingMSG

Define un componente funcional llamado OutcomingMSG. Este componente devuelve un fragmento que representa la estructura de un mensaje saliente en una interfaz de chat. Incluye:

- Un contenedor div con la clase de estilo outgoing_msg.
- Dentro de este contenedor, hay otro contenedor div con la clase de estilo sent_msg que contiene el - contenido del mensaje, incluyendo un párrafo p con el texto del mensaje y un span con la hora y la fecha.

### Exportación del componente

- **export default OutcomingMSG;**: Exporta el componente OutcomingMSG para que pueda ser utilizado en otros archivos.

En resumen, el componente OutcomingMSG representa visualmente un mensaje saliente en una interfaz de chat. Puede ser utilizado junto con otros componentes para construir una conversación completa en la aplicación. Este componente en particular muestra un mensaje de ejemplo con un formato específico.