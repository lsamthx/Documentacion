---
sidebar_position: 91
---

# useResponse.js

Este hook encapsula la lógica para crear una nueva respuesta y maneja el estado de carga de manera eficiente, asegurando que los componentes que lo usen puedan indicar al usuario cuándo una operación está en progreso.

```js 
import { useState } from "react";
import useWexClient from "./Clients/wexClient,";

const useResponse = () => {
  const { createResponse } = useWexClient();
  const [loader, setLoader] = useState(false);

  const createNewResponse = async (body = {}) => {
    setLoader(true);
    try {
      const response = await createResponse(body);
      setLoader(false);
      return response;
    } catch (err) {
      setLoader(false);
      throw (err);
    }
  };

  return {
    createNewResponse,
    loader
  };
};

export default useResponse;
```

## Imports

**useState**: Hook de React para manejar el estado.
**useWexClient**: Hook personalizado que proporciona funciones de API.

## Definición del Hook

**useResponse**: Un hook personalizado que encapsula la lógica para crear una nueva respuesta.

## Estados

**loader**: Estado booleano para indicar si una operación está en progreso.

## Funciones

**createNewResponse**: Función asíncrona que realiza la operación de creación de una nueva respuesta.
**Inicio de la operación**: setLoader(true) establece el estado de carga en true.
**Llamada a la API**: createResponse(body) realiza la llamada a la API con el cuerpo proporcionado.
**Fin de la operación**: setLoader(false) establece el estado de carga en false.
**Retorno de la respuesta**: La respuesta de la API se devuelve.
**Manejo de errores**: Si ocurre un error, el estado de carga se restablece y el error se relanza.

## Retorno del Hook

createNewResponse y loader se devuelven para su uso en componentes que utilicen este hook.