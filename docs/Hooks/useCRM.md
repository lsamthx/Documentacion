---
sidebar_position: 87
---

# useCRM.js

Este hook encapsula la lógica para actualizar el CRM y maneja el estado de carga de manera eficiente, asegurando que los componentes que lo usen puedan indicar al usuario cuándo una operación está en progreso.

```js 
import { useState } from "react";
import useWexClient from "./Clients/wexClient,";

const useCRM = () => {
  const { getAddCRM } = useWexClient(); //! Esta no es la peticion
  const [loader, setLoader] = useState(false);

  const updateCRM = async (body = {}) => {
    setLoader(true);
    try {
      const response = await getAddCRM(body);
      setLoader(false);
      return response;
    } catch (err) {
      setLoader(false);
      throw err;
    }
  };

  return {
    updateCRM,
    loader,
  };
};

export default useCRM;
```

## Imports

**useState**: Hook de React para manejar el estado.
**useWexClient**: Hook personalizado que proporciona funciones de API.

## Definición del Hook

**useCRM**: Un hook personalizado que encapsula la lógica para actualizar el CRM.

## Estados

**loader**: Estado booleano para indicar si una operación está en progreso.

## Funciones

**updateCRM**: Función asíncrona que realiza la operación de actualización del CRM.
**Inicio de la operación**: setLoader(true) establece el estado de carga en true.
**Llamada a la API**: correctApiFunctionName(body) realiza la llamada a la API con el cuerpo proporcionado.
**Fin de la operación**: setLoader(false) establece el estado de carga en false.
**Retorno de la respuesta**: La respuesta de la API se devuelve.
**Manejo de errores**: Si ocurre un error, el estado de carga se restablece y el error se relanza.

## Retorno

updateCRM y loader se devuelven para su uso en componentes que utilicen este hook.
