---
sidebar_position: 149
---

# PublicRoute.js

El componente PublicRoute se utiliza para proteger ciertas rutas de la aplicación y garantizar que solo los usuarios no autenticados tengan acceso. 

```js
import { useContext } from "react";
import { AuthContext } from "../Auth/Context";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const lastPath = localStorage.getItem('lastPath') || '/option-dashboard';

  return (!logged)
    ? children
    : <Navigate to={lastPath} />
}
```

## Importaciones

- Importa useContext de React para utilizar el contexto de autenticación.
- Importa AuthContext de "../Auth/Context" para acceder al estado de autenticación del usuario.
- Importa Navigate de "react-router-dom" para realizar la navegación condicional.

## Función PublicRoute

Recibe una propiedad llamada children, que representa el contenido que se renderizará si el usuario no está autenticado.

## Contexto de Autenticación

Obtiene el estado de autenticación del contexto de autenticación (AuthContext).

## Obtención de la Última Ruta Visitada

Obtiene la última ruta visitada almacenada en el localStorage (localStorage.getItem('lastPath')).
Si no hay una última ruta visitada, establece la ruta predeterminada como "/option-dashboard".

## Renderización Condicional

Si el usuario no está autenticado (logged), renderiza el contenido (children).
Si el usuario está autenticado, realiza una redirección a la última ruta visitada o a la ruta predeterminada (Navigate to=lastPath).