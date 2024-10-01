---
sidebar_position: 75
---

# chatSelect.js

Este código define un componente funcional llamado ChatSelect.

```jsx
import React from 'react'

export default function ChatSelect() {
  return (
    <div className='middle-screen'>
    <div className='alert-info'>
    <hr />
    <h3>Seleccione una persona</h3>
    {/* <img src='' className='img-fluid' alt='select' /> */}
    <span>Para comenzar una conversación</span>
    </div>
    </div>
  )
}
```

## Explicación

### Importación de React

- **import React from 'react';**: Importa la biblioteca React para poder utilizar sus características.

### Definición del componente ChatSelect

- **export default function ChatSelect()**: Define un componente funcional llamado ChatSelect que se exporta por defecto. El componente ChatSelect devuelve un fragmento que contiene un contenedor (div) con la clase de estilo middle-screen. Dentro de este contenedor, hay otro contenedor con la clase alert-info que incluye:
- Un elemento hr para separar visualmente.
- Un encabezado h3 que dice "Seleccione una persona".
- Comentarios para un elemento img que parece estar descomentado pero con una URL de imagen vacía y una clase img-fluid para hacer que la imagen sea responsiva.
- Un elemento span que dice "Para comenzar una conversación".

### Exportación del componente

- **export default ChatSelect**: Exporta el componente ChatSelect para que pueda ser utilizado en otros archivos.

