---
sidebar_position: 89
---

# useQueue.js

Este hook encapsula la lógica para crear una nueva cola y maneja el estado de carga de manera eficiente, asegurando que los componentes que lo usen puedan indicar al usuario cuándo una operación está en progreso.

```js 
import { useState } from "react";
import useWexClient from "./Clients/wexClient,";

const useQueue = () => {
  const { createQueue } = useWexClient();
  const [loader, setLoader] = useState(false);

  const createNewQueue = async (body = {}) => {
    setLoader(true);
    try {
      const response = await createQueue(body);
      setLoader(false);
      return response;
    } catch (err) {
      setLoader(false);
      throw (err);
    }
  };

  return {
    createNewQueue,
    loader
  };
};

export default useQueue;
```

## Imports

**useState**: Hook de React para manejar el estado.
**useWexClient**: Hook personalizado que proporciona funciones de API.

## Definición del Hook

**useQueue**: Un hook personalizado que encapsula la lógica para crear una nueva cola.

## Estados

**loader**: Estado booleano para indicar si una operación está en progreso.

## Funciones

**createNewQueue**: Función asíncrona que realiza la operación de creación de una nueva cola.
**Inicio de la operación**: setLoader(true) establece el estado de carga en true.
**Llamada a la API**: createQueue(body) realiza la llamada a la API con el cuerpo proporcionado.
**Fin de la operación**: setLoader(false) establece el estado de carga en false.
**Retorno de la respuesta**: La respuesta de la API se devuelve.
**Manejo de errores**: Si ocurre un error, el estado de carga se restablece y el error se relanza.

## Retorno del Hook

createNewQueue y loader se devuelven para su uso en componentes que utilicen este hook.