---
sidebar_position: 74
---

# App.js

Este código define un componente funcional llamado App que renderiza el componente AppRouter.

```jsx
import React from 'react';
import AppRouter from './router/AppRouter';

function App() {
  return (
  <div>
  <AppRouter />
  </div>
  );
}

export default App;
```

## Explicación

### Importación de React

- **import React from react**: Importa la biblioteca React para poder utilizar sus características.

### Importación del componente AppRouter

- **import AppRouter from './router/AppRouter';**: Importa el componente AppRouter desde el archivo AppRouter ubicado en la carpeta router.

### Definición del componente App

- **function App**: Define un componente funcional llamado App. El componente App devuelve un fragmento que contiene el componente AppRouter. Esto se realiza mediante el uso de AppRouter dentro de un div.

### Exportación del componente App

- **export default App**: Exporta el componente App para que pueda ser utilizado en otros archivos.

En resumen, el componente App sirve como contenedor principal para la aplicación, y su función principal es renderizar el componente AppRouter. Este enfoque es común en aplicaciones de React, donde se utiliza un componente principal para organizar y renderizar otros componentes que forman la estructura de la aplicación.