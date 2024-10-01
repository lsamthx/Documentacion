---
sidebar_position: 73
---

# AuthRouter.js

Este código define un componente funcional llamado AuthRouter, que utiliza React Router para gestionar las rutas relacionadas con la autenticación

```jsx
//Switch ya no se usa en la version 6 de react-router-dom
//Se remplaza por Routes

// Funcional Component

import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginPages from "../pages/LoginPages";
import RegisterPages from "../pages/RegisterPages";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import '../css/login-register.css'

const AuthRouter = () => {
  return (
    <div className="liter">
    <div className="container-login100">
    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
    <Switch>
    <Route path="/auth/login" component={LoginPages} />
    <Route path="/auth/register" component={RegisterPages} />

    <Redirect to="/auth/login" />
    </Switch>
    </div>
    </div>
    </div>
  );
};

export default AuthRouter;
```

## Explicación

### Definición del componente AuthRouter

Define un componente funcional llamado AuthRouter. Este componente representa el área de autenticación de la aplicación. Dentro del Switch:

- **Route path="/auth/login" component=LoginPages**: Define una ruta para la página de inicio de sesión utilizando el componente LoginPages.
- **Route path="/auth/register" component=RegisterPages**: Define una ruta para la página de registro utilizando el componente RegisterPages.
- **Redirect to="/auth/login"**: Redirige cualquier otra ruta no definida dentro de la sección de autenticación a la página de inicio de sesión.

### Exportación del componente

- **export default AuthRouter;**: Exporta el componente AuthRouter para que pueda ser utilizado en otros archivos.

En resumen, el componente AuthRouter utiliza React Router para gestionar las rutas relacionadas con la autenticación. Define rutas para la página de inicio de sesión y la página de registro, y redirige cualquier otra ruta no definida en la sección de autenticación a la página de inicio de sesión.