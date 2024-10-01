---
sidebar_position: 80
---

# SearchBox.js

Este código define un componente funcional llamado SearchBox que representa una caja de búsqueda en una interfaz de chat.

```jsx
import React from 'react'

 function SearchBox() {
  return (

   <div className="headind_srch">
   <div className="recent_heading mt-2">
   <h4>Recientes</h4>
   </div>
   <div className="srch_bar">
   <div className="stylish-input-group">
   <button className="btn text-danger">Salir</button>
   </div>
   </div>
 </div>

  )
}

export default SearchBox
```

## Explicación

### Importación de React

- **import React from 'react';**: Importa la biblioteca React para poder utilizar sus características.

### Definición del componente SearchBox

Define un componente funcional llamado SearchBox. Este componente devuelve un fragmento que representa la estructura de una caja de búsqueda en una interfaz de chat. Incluye:

- Un contenedor div con la clase de estilo headind_srch.
- Dentro de este contenedor, hay otro contenedor div con la clase recent_heading que incluye un encabezado h4 con el texto "Recientes".
- Otro contenedor div con la clase de estilo srch_bar.
- Dentro de este último contenedor, hay otro contenedor div con la clase de estilo stylish-input-group que contiene un botón button con la clase btn text-danger y el texto "Salir".

### Exportación del componente

- **export default SearchBox;**: Exporta el componente SearchBox para que pueda ser utilizado en otros archivos.

En resumen, el componente SearchBox representa visualmente una caja de búsqueda en una interfaz de chat. Incluye un encabezado indicando "Recientes" y un botón con el texto "Salir".