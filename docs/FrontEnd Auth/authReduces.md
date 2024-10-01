---
sidebar_position: 53
---

# AuthReduces.js

Este es el código de un reducer de autenticación (AuthReducer) en el que se gestionan los cambios en el estado de autenticación basados en diferentes tipos de acciones. Estas acciones son definidas en types. El reducer toma un estado inicial initialState que define el estado inicial de autenticación como "no autenticado".

## Imports

```js title="src/Auth/Context/AuthReduces.js"
 import { types } from "../types/types";
```


## Const

El reducer se encarga de actualizar el estado en función del tipo de acción recibida:

- Cuando recibe una acción de tipo types.login, actualiza el estado para indicar que el usuario está autenticado (logged: true) y almacena los datos del usuario en la propiedad payload.

- Cuando recibe una acción de tipo types.logout, actualiza el estado para indicar que el usuario no está autenticado (logged: false) y establece la propiedad payload en un objeto vacío {} para borrar los datos del usuario.

- Si recibe una acción de otro tipo, el reducer devuelve el estado actual sin realizar ningún cambio.

```js
export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        logged: true,
        payload: action.payload
      };
    case types.logout:
      return {
        logged: false,
        payload: {}
      };
    default:
      return state;
  }
};
```


