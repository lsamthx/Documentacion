---
sidebar_position: 76
---

# inboxPeople.js

Este código define un componente funcional llamado InboxPeople que representa la sección de personas en una bandeja de entrada. 

```jsx
import React from "react";
import SearchBox from "../components/SearchBox";
import SideBar from "./SideBar";

 function InboxPeople() {
  return (
    <div className="inbox_people">
    <SearchBox />
    <SideBar />
    </div>
  );
}


export default InboxPeople;
```

## Explicación

### Importación de React y componentes

- **import React from "react";**: Importa la biblioteca React para poder utilizar sus características.
- **import SearchBox from "../components/SearchBox";**: Importa el componente SearchBox desde el archivo correspondiente.
- **import SideBar from "./SideBar";**: Importa el componente SideBar desde el archivo correspondiente.

### Definición del componente InboxPeople

Define un componente funcional llamado InboxPeople. Este componente devuelve un fragmento que contiene un contenedor div con la clase de estilo inbox_people. Dentro de este contenedor, se incluyen el componente SearchBox y el componente SideBar.

### Exportación del componente

- **export default InboxPeople;**: Exporta el componente InboxPeople para que pueda ser utilizado en otros archivos.

En resumen, el componente InboxPeople representa la sección de personas en una interfaz de bandeja de entrada. Incluye un cuadro de búsqueda (SearchBox) y la barra lateral (SideBar). 