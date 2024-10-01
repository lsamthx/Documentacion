---
sidebar_position: 82
---

# SideBar.js

Este código define un componente funcional llamado SideBar que representa la barra lateral de la interfaz de chat.

```jsx
import React from "react";
import SidebarChatItem from "./SidebarChatItem";

function SideBar() {
    const chats =[
    {
    uid: 1,
    name: 'Test 1',
    message: 'Test 1',
    online: true
    },
    {
    uid: 2,
    name: 'Test 2',
    message: 'Test 2',
    online: true
    },
    {
    uid: 3,
    name: 'Test 3',
    message: 'Test 3',
    online: false
    },
    {
    uid: 4,
    name: 'Test 4',
    message: 'Test 4',
    online: false
    },
    ]

  return (
    <div className="inbox_chat">
    {
    chats.map(chat => (
    <SidebarChatItem key={chat.uid} {...chat} />
    ))
    }

    {/* <!-- Espacio extra para scroll --> */}
    <div className="extra_space"></div>
    </div>
  );
}
export default SideBar;
```

## Explicación

### Importación de React y componente relacionado

- **import React from "react";**: Importa la biblioteca React para poder utilizar sus características.
- **import SidebarChatItem from "./SidebarChatItem";**: Importa el componente SidebarChatItem desde el archivo correspondiente.

### Definición del componente SideBar

Define un componente funcional llamado SideBar. Este componente devuelve un fragmento que representa la estructura de la barra lateral de la interfaz de chat. Incluye:

- Un contenedor div con la clase de estilo inbox_chat.
- Dentro de este contenedor, se mapea sobre el array de chats y se renderiza un componente SidebarChatItem para cada elemento del array, utilizando las propiedades de cada objeto en el array como propiedades del componente.
- Al final del contenedor, se incluye un espacio extra div con la clase de estilo extra_space que puede ser utilizado para manejar el scroll.

### Exportación del componente

- **export default SideBar;**: Exporta el componente SideBar para que pueda ser utilizado en otros archivos.

En resumen, el componente SideBar representa visualmente la barra lateral de la interfaz de chat. Renderiza elementos individuales de chat utilizando el componente SidebarChatItem para cada chat en el array chats.