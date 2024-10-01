---
sidebar_position: 86
---

# useClass.js

El hook useClass proporciona una forma de crear una nueva clase utilizando el cliente Wex. Maneja un estado de carga para indicar si la operación está en progreso. La función createNewClass se encarga de llamar a la API, manejar el estado de carga y relanzar cualquier error que ocurra durante la llamada.

Este hook puede ser utilizado en componentes de React para crear y manejar la creación de nuevas clases, manteniendo una indicación del estado de carga.

```js 
import { useState } from "react";
import useWexClient from "./Clients/wexClient,";

const useClass = () => {
  const { createClass } = useWexClient();
  const [loaderClass, setLoaderClass] = useState(false);

  const createNewClass = async (body = {}) => {
    setLoaderClass(true);
    try {
      const response = await createClass(body);
      setLoaderClass(false);
      return response;
    } catch (err) {
      setLoaderClass(false);
      throw (err);
    }
  };

  return {
    createNewClass,
    loaderClass
  };
};

export default useClass;
```

## Imports

**useState**: Hook de React para manejar el estado.
**useWexClient**: Un hook personalizado importado desde ./Clients/wexClient.

## Hook useClass

### Detalles del Hook

#### Uso de useWexClient:

useWexClient es un hook personalizado que parece proporcionar una función llamada createClass.

#### Estado loaderClass:

**loaderClass**: Un estado booleano que se inicializa en false. Se usa para indicar si la operación de creación de la clase está en progreso.

#### Función createNewClass:

**Asíncrona**: Esta función se declara como async para manejar operaciones asíncronas.

#### Inicio de la operación:

**setLoaderClass(true)**: Establece loaderClass en true para indicar que la operación ha comenzado.

#### Intento de crear la clase:

**const response = await createClass(body)**: Llama a la función createClass del cliente Wex con el cuerpo proporcionado y espera su respuesta.

**setLoaderClass(false)**: Establece loaderClass en false después de recibir la respuesta.

**return response**: Devuelve la respuesta obtenida.

**Manejo de errores**: En el bloque catch, setLoaderClass(false) se asegura de que loaderClass se establezca en false si ocurre un error.

**throw err**: Relanza el error para que pueda ser manejado por el código que llame a createNewClass.

#### Retorno del Hook:

**return createNewClass, loaderClass**: Devuelve la función createNewClass y el estado loaderClass dentro de un objeto para que puedan ser utilizados por componentes que utilicen este hook.