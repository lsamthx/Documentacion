---
sidebar_position: 72
---

# AppRouter.js

Este código define un componente funcional llamado AppRouter que utiliza React Router para gestionar las rutas en la aplicación.

```jsx
import React from "react";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import AuthRouter from "../router/AuthRouter";
import ChatPages from "../pages/ChatPages";
import { createBrowserHistory } from "history";


const history = createBrowserHistory();

function AppRouter() {
  return (
  <Router history={history}>
  <div>
  <Switch>
  <Route path="/auth" component={AuthRouter} />
  <Route exact path="/" component={ChatPages} />
  <Redirect to="/" />
  </Switch>
  </div>
  </Router>
);
}

export default AppRouter;
```

## Explicación

### Creación del historial

Crea un objeto de historial utilizando la función createBrowserHistory de la biblioteca history. Este historial se pasa como prop al componente Router.

### Definición del componente AppRouter

Define un componente funcional llamado AppRouter. Este componente utiliza el componente Router de React Router para gestionar las rutas en la aplicación. Dentro del Switch:

- **Route path="/auth" component=AuthRouter**: Define una ruta para el manejo de la autenticación utilizando el componente AuthRouter.
- **Route exact path="/" component=ChatPages**: Define una ruta exacta para la página principal de chat utilizando el componente ChatPages.
- **Redirect to="/"**: Redirige cualquier otra ruta no definida a la ruta principal ("/").

### Exportación del componente

- **export default AppRouter;**: Exporta el componente AppRouter para que pueda ser utilizado en otros archivos.

En resumen, el componente AppRouter utiliza React Router para gestionar las rutas en la aplicación. Define rutas para la autenticación y la página principal de chat, y redirige cualquier otra ruta a la ruta principal.