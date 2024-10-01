---
sidebar_position: 92
---

# useServices.js

Este hook encapsula la lógica para actualizar el estado de un servicio y crear un nuevo servicio, manejando el estado de carga de manera eficiente para indicar al usuario cuándo una operación está en progreso. También se devuelve loaderClass para que los componentes puedan reaccionar a los cambios en el estado de carga.

```js 
import { useState } from "react";
import useWexClient from "./Clients/wexClient,";

const useServices = () => {
    const [loaderClass, setLoaderClass] = useState(false);
  const { updateServiceStatus,createService } = useWexClient();

  const updateStatus = async (body = {}) => {
    try {
      setLoaderClass(true);
      const response = await updateServiceStatus(body);
      setLoaderClass(false);
      return response;
    } catch (err) {
      setLoaderClass(false);
      throw (err);
    }
  }

  const createNewService = async (body = {}) => {
    try {
      setLoaderClass(true);
      const response = await createService(body);
      setLoaderClass(false);
      return response;
    } catch (err) {
      setLoaderClass(false);
      throw (err);
    }
  }
  return {
    updateStatus,
    createNewService
  };
};

export default useServices;
```

## Imports

**useState**: Hook de React para manejar el estado.
**useWexClient**: Hook personalizado que proporciona funciones de API.

## Definición del Hook:

**useServices**: Un hook personalizado que encapsula la lógica para actualizar el estado del servicio y crear un nuevo servicio.

## Estados:

**loaderClass**: Estado booleano para indicar si una operación está en progreso.

## Funciones:

**updateStatus**: Función asíncrona que realiza la operación de actualización del estado del servicio.
**Inicio de la operación**: setLoaderClass(true) establece el estado de carga en true.
**Llamada a la API**: updateServiceStatus(body) realiza la llamada a la API con el cuerpo proporcionado.
**Fin de la operación**: setLoaderClass(false) establece el estado de carga en false.
**Retorno de la respuesta**: La respuesta de la API se devuelve.
**Manejo de errores**: Si ocurre un error, el estado de carga se restablece y el error se relanza.
**createNewService**: Función asíncrona que realiza la operación de creación de un nuevo servicio.
**Inicio de la operación**: setLoaderClass(true) establece el estado de carga en true.
**Llamada a la API**: createService(body) realiza la llamada a la API con el cuerpo proporcionado.
**Fin de la operación**: setLoaderClass(false) establece el estado de carga en false.
**Retorno de la respuesta**: La respuesta de la API se devuelve.

## Retorno del Hook:

updateStatus, createNewService y loaderClass se devuelven para su uso en componentes que utilicen este hook.