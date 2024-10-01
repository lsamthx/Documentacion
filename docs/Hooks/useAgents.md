---
sidebar_position: 84
---

# useAgents.js

El hook useAgents proporciona una forma de obtener la cantidad de agentes en línea utilizando el cliente Wex. Maneja un estado de carga para indicar si la operación está en progreso. La función getCountAgents se encarga de llamar a la API, manejar el estado de carga y relanzar cualquier error que ocurra durante la llamada.

```js 
import { useState } from "react";
import useWexClient from "./Clients/wexClient,";

const useAgents = () => {
  const { getGinaAgentsOnline } = useWexClient();
  const [loaderClass, setLoaderClass] = useState(false);

  const getCountAgents = async () => {
    try {
      const response = await getGinaAgentsOnline();
      setLoaderClass(false);
      
      return response;
    } catch (err) {
      setLoaderClass(false);
      throw (err);
    }
  };

  return {
    getCountAgents
  }

};

export default useAgents;
```

## Imports

**useState**: Hook de React para manejar el estado.
**useWexClient**: Un hook personalizado importado desde ./Clients/wexClient.

## Hook useAgents (Detalles):

### Uso de useWexClient:

**useWexClient** es un hook personalizado que parece proporcionar una función llamada getGinaAgentsOnline.

### Estado loaderClass:

**loaderClass**: Un estado booleano que se inicializa en false. Se usa para indicar si la operación de obtener agentes está en progreso.

### Función getCountAgents:

**Asíncrona**: Esta función se declara como async para manejar operaciones asíncronas.

### Intento de obtener agentes:

**const response = await getGinaAgentsOnline()**: Llama a la función getGinaAgentsOnline del cliente Wex y espera su respuesta.
**setLoaderClass(false)**: Establece loaderClass en false después de recibir la respuesta.
**return response**: Devuelve la respuesta obtenida.

### Manejo de errores:

En el bloque catch, setLoaderClass(false) se asegura de que loaderClass se establezca en false si ocurre un error. throw err: Relanza el error para que pueda ser manejado por el código que llame a getCountAgents.

### Retorno del Hook:

**return getCountAgents**: Devuelve la función getCountAgents dentro de un objeto para que pueda ser utilizada por componentes que utilicen este hook.

