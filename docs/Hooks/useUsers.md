---
sidebar_position: 94
---

# UseUsers.js

Este hook de React se llama useUser y proporciona funcionalidades relacionadas con la creación de usuarios utilizando el cliente Wex (useWexClient). 

```js 
import { useState } from "react";
import useWexClient from "./Clients/wexClient,";

const useUser = () => {
  const { createUser } = useWexClient();
  const [loader, setLoader] = useState(false);

  const createNewUser = async (body = {}) => {
    setLoader(true);
    try {
      const response = await createUser(body);
      setLoader(false);
      return response;
    } catch (err) {
      setLoader(false);
      throw (err);
    }
  };

  return {
    createNewUser,
    loader
  };
};

export default useUser;
```

## Imports

- Importa el hook useWexClient desde el archivo "./Clients/wexClient".
- Importa useState de React.

## Hook Principal (useUser)

- Utiliza el hook useWexClient para obtener el método createUser y otras funcionalidades relacionadas con la creación de usuarios mediante el servicio Wex.
- Utiliza el estado local (loader) para gestionar el estado de carga de la respuesta.

## Función createNewUser

Es una función asíncrona que toma un parámetro opcional: body.

- body: Un objeto que contiene los datos necesarios para la creación de un nuevo usuario.
- Establece el estado de carga (loader) como true al inicio de la operación.
- Llama al método createUser del cliente Wex con el cuerpo proporcionado.
- Establece el estado de carga como false después de obtener la respuesta de la creación de usuario.
- Retorna la respuesta obtenida del servicio Wex.
- Captura y maneja cualquier error que pueda ocurrir durante la creación de usuario.

## Retorno del Hook (return)

Retorna un objeto que contiene las siguientes propiedades:

- createNewUser: La función para crear un nuevo usuario.
- loader: El estado de carga que indica si la operación está en curso.
