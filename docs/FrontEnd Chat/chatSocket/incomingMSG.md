---
sidebar_position: 77
---

# IncomingMSG.js

Este código define un componente funcional llamado IncomingMSG que representa un mensaje entrante en una interfaz de chat. 

```jsx
import React from "react";

function IncomingMSG() {
  return (
    <div className="incoming_msg">
    <div className="incoming_msg_img">
    <img
    src="https://ptetutorials.com/images/user-profile.png"
    alt="sunil"
    />
    </div>
    <div className="received_msg">
    <div className="received_withd_msg">
    <p>Test which is a new approach to have all solutions</p>
    <span className="time_date"> 11:01 AM | June 9</span>
    </div>
    </div>
    </div>
  );
}

export default IncomingMSG;
```

## Explicación

### Importación de React

- **import React from "react";**: Importa la biblioteca React para poder utilizar sus características.

### Definición del componente IncomingMSG

Define un componente funcional llamado IncomingMSG. Este componente devuelve un fragmento que representa la estructura de un mensaje entrante en una interfaz de chat. Incluye:
- Un contenedor div con la clase de estilo incoming_msg.
- Un contenedor adicional div con la clase incoming_msg_img que contiene una imagen de perfil img.
- Un contenedor div con la clase de estilo received_msg.
- Dentro de este último contenedor, hay otro contenedor div con la clase de estilo received_withd_msg que contiene el contenido del mensaje, incluyendo un párrafo p con el texto del mensaje y un span span con la hora y la fecha.

### Exportación del componente

- **export default IncomingMSG;**: Exporta el componente IncomingMSG para que pueda ser utilizado en otros archivos.

En resumen, el componente IncomingMSG representa visualmente un mensaje entrante en una interfaz de chat. Puede ser utilizado en conjunto con otros componentes para construir una conversación completa en la aplicación.