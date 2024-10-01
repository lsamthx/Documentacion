---
sidebar_position: 148
---

# PrivateRoute.js 

El componente PrivateRoute es un componente personalizado que se utiliza para proteger ciertas rutas de la aplicación y garantizar que solo los usuarios autenticados con roles específicos tengan acceso. 

```js
import { useContext, useEffect } from "react";
import { AuthContext } from "../Auth/Context";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ allowedClasses, children }) => {
  const { logged, payload } = useContext(AuthContext);
  const { pathname } = useLocation();

  const classUser = payload?.profile?.class || '';

  const hasAccess = logged && allowedClasses.includes(classUser);

  useEffect(() => {
    if (hasAccess) {
      localStorage.setItem('lastPath', pathname);
    }
  }, [hasAccess, pathname]);

  return hasAccess ? children : <Navigate to='/' />;
}
```

## Importaciones

- Importa useContext y useEffect de React para utilizar el contexto de autenticación y realizar efectos secundarios.
- Importa AuthContext de "../Auth/Context" para acceder al estado de autenticación y perfil del usuario.
- Importa Navigate y useLocation de "react-router-dom" para realizar la navegación condicional.

## Función PrivateRoute

Recibe dos propiedades: allowedClasses y children.
allowedClasses es un array que contiene los roles permitidos para acceder a la ruta protegida.
children es el contenido que se renderizará si el usuario tiene acceso.

## Contexto de Autenticación

Obtiene el estado de autenticación y el perfil del usuario del contexto de autenticación (AuthContext).

## Ubicación Actual

Obtiene la ubicación actual usando useLocation().

## Clase de Usuario

Extrae la clase del usuario desde el perfil del usuario (payload.profile.class).

## Verificación de Acceso

Verifica si el usuario está autenticado (logged) y si su clase de usuario (classUser) está incluida en el array de roles permitidos (allowedClasses).
Si tiene acceso, actualiza la última ruta visitada en el almacenamiento local (localStorage.setItem('lastPath', pathname)).

## Renderización Condicional

Si el usuario tiene acceso, renderiza el contenido (children).
Si no tiene acceso, realiza una redirección a la página de inicio (Navigate to='/').

## Efecto Secundario

Utiliza un efecto secundario para actualizar la última ruta visitada en el almacenamiento local cuando el usuario tiene acceso.