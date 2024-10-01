---
sidebar_position: 85
---

# UseAuthClient.js (hooks)

Este hook de React se llama useAuthClient y proporciona funcionalidades relacionadas con la autenticación utilizando el cliente Wex (useWexClient).

```js 
import { useState } from "react";
import useWexClient from "./Clients/wexClient,";

export const useAuthClient = () => {
  const { login } = useWexClient();
  const [] = useState();
  
  const loginClient = async (user, password) => {
    try {
      const response = await login(user, password);
      return response;
    } catch (err) {
      throw(err);
    }
  }

  return {
    loginClient
  }
};
```

## Imports

- Importa el hook useWexClient desde el archivo "./Clients/wexClient".
- Importa useState de React.

## Hook Principal (useAuthClient)

- Utiliza el hook useWexClient para obtener el método login y otras funcionalidades relacionadas con la autenticación mediante el servicio Wex.
- Utiliza el estado local (aunque no se utiliza en este caso).

## Función loginClient

- Es una función asíncrona que toma dos parámetros: user y password.
- user: El nombre de usuario para la autenticación.
- password: La contraseña asociada al usuario.
- Llama al método login del cliente Wex con los parámetros proporcionados.
- Retorna la respuesta obtenida del intento de inicio de sesión.
- Captura y maneja cualquier error que pueda ocurrir durante el proceso de autenticación.

## Retorno del Hook (return)

Retorna un objeto que contiene las siguientes propiedades:
- loginClient: La función para realizar el inicio de sesión con el cliente Wex.

Este hook proporciona una interfaz simple y reutilizable para realizar operaciones de inicio de sesión utilizando el cliente Wex. Puede ser utilizado en componentes React que necesiten funcionalidades de autenticación específicas