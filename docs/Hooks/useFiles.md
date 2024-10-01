---
sidebar_position: 88
---

# UseFiles.js (hooks)

Este hook proporciona una interfaz simple y reutilizable para enviar archivos CSV a través del cliente Wex, y también gestiona el estado de carga asociado con la operación de envío. Puede ser utilizado en componentes React que necesiten esta funcionalidad específica.

```js
import { useState } from "react";
import useWexClient from "./Clients/wexClient,";

export const UseFile = () => {
  const { sendCSVFile } = useWexClient();
  const [loaderResponse, setLoaderResponse] = useState();
  
  const sendNewCSVFile = async (idService = '', fileInput, uriFile = '') => {
    try {
      setLoaderResponse(true);
      const response = await sendCSVFile(idService, fileInput, uriFile);
      setLoaderResponse(false);
      return response;
    } catch(err) {
      setLoaderResponse(false);
      throw new Error(err);
    }
  }

  return {
    sendNewCSVFile,
    loaderResponse
  };
};
```

## Imports

- Importa el hook useWexClient desde el archivo "./Clients/wexClient".
- Importa useState de React.

## Hook Principal (UseFile)

- Utiliza el hook useWexClient para obtener el método sendCSVFile y otras funcionalidades relacionadas con la comunicación con el servicio Wex.
- Utiliza el estado local para manejar el estado de carga (loaderResponse).

## Función sendNewCSVFile

- Es una función asíncrona que toma tres parámetros: idService, fileInput, y uriFile.
- idService: ID del servicio al que se enviará el archivo CSV.
- fileInput: El archivo CSV que se va a enviar.
- uriFile: La URI del archivo, que puede ser opcional dependiendo de la implementación.
- Establece el estado de carga (loaderResponse) a true antes de enviar la solicitud.
- Llama al método sendCSVFile del cliente Wex con los parámetros proporcionados.
- Establece el estado de carga a false después de recibir la respuesta.
- Retorna la respuesta obtenida del envío del archivo.
- Captura y maneja cualquier error que pueda ocurrir durante el proceso de envío.

## Retorno del Hook (return)

- Retorna un objeto que contiene las siguientes propiedades: sendNewCSVFile, esta función para enviar un nuevo archivo CSV y loaderResponse, en esta el estado de carga que indica si la solicitud está en progreso (true) o no (false).
