---
sidebar_position: 52
---

# AuthProvider.js

Este código es una implementación básica de un contexto de autenticación y debe funcionar si se utiliza junto con un componente que consume el contexto, como un componente de inicio de sesión o un componente de barra de navegación que muestra contenido diferente según si el usuario está autenticado o no.

## Imports

```js title="src/Auth/Context/AuthProvider.js"
import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReduces";
import { types } from "../types/types";
```

Importamos las dependencias necesarias, incluyendo useReducer y las definiciones de tipos (types) que se utilizan en el reducer, así como AuthReducer y AuthContext.

## Consts

Creamos una función init que se utilizará como función de inicialización para el estado del contexto. Esta función intenta obtener el usuario desde el almacenamiento local (localStorage) y lo interpreta. Luego, devuelve un objeto con propiedades logged (verdadero o falso, dependiendo de si se encontró un usuario en el almacenamiento local) y payload (los datos del usuario si se encontró, o null si no).

```js
const init = () => {
  const payload = localStorage.getItem('payload');
  
  try {
    const user = JSON.parse(payload);
    return {
      logged: !!user,
      payload: user
    };
  } catch (error) {
    return {
      logged: false,
      payload: null
    };
  }
}
```

Definimos el componente AuthProvider que toma un argumento children, que representará a los componentes hijos envueltos por este proveedor.

```js
export const AuthProvider = ({ children }) => {
    ...
}
```

En el interior del AuthProvider, utilizamos useReducer con un reducer llamado AuthReducer y el estado inicial proporcionado por la función init. Esto crea un estado y un despachador que se utilizarán para administrar el estado de autenticación.

```js
const [authState, dispatch] = useReducer(AuthReducer, {} , init);
```

Definimos dos funciones, login y logout, que se utilizan para iniciar sesión y cerrar sesión. login toma un argumento payload y dispatcha una acción de tipo types.login para almacenar estos datos en el localStorage y actualizar el estado de autenticación. logout simplemente elimina los datos del usuario del localStorage y realiza una acción de tipo types.logout.

```js
const login = async (payload) => {
    const action = {
      type: types.login,
      payload: payload
    };

    localStorage.setItem('payload', JSON.stringify(payload));

    dispatch(action);
  }

  const logout = async () => {
    localStorage.removeItem('payload');
    const action = {
      type: types.logout,
    };

    dispatch(action);
  }
```

El componente AuthProvider proporciona el contexto AuthContext con valores que incluyen el estado de autenticación (authState), las funciones login y logout.

Finalmente, se envuelven los componentes hijos ({children}) con el contexto AuthContext.Provider, lo que permite que los componentes descendientes accedan a los valores proporcionados en el contexto.

```js
{..
return (
    <AuthContext.Provider value={{ 
      ...authState,
      login,
      logout
     }}>
      {children}
    </AuthContext.Provider>
  );
};
```
