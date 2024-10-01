---
sidebar_position: 90
---

# UseReports.js (hooks)

Este hook proporciona una interfaz sencilla para obtener informes de llamadas mediante el cliente Wex. Puede ser utilizado en componentes React que necesiten funcionalidades relacionadas con la obtención de informes de llamadas.

```js 
import { useState } from "react";
import useWexClient from "./Clients/wexClient,";

export const useReports = () => {
  const { getCallsForWeek } = useWexClient();
  const [loaderResponse, setLoaderResponse] = useState();

  const getAllCallReport = async (startDate = '', endDate = '', serviceId = '') => {
    setLoaderResponse(true);
    try {
      const response = await getCallsForWeek(startDate, endDate, serviceId);
      setLoaderResponse(false);
      return response;
    } catch(err) {
      setLoaderResponse(false);
      console.log(err);
    }
  };

  return {
    getAllCallReport,
    loaderResponse
  }
};
```

## Imports

- Importa el hook useWexClient desde el archivo "./Clients/wexClient".
- Importa useState de React.

## Hook Principal (useReports)

- Utiliza el hook useWexClient para obtener el método getCallsForWeek y otras funcionalidades relacionadas con la obtención de informes de llamadas mediante el servicio Wex.
- Utiliza el estado local (loaderResponse) para gestionar el estado de carga de la respuesta.

## Función getAllCallReport

Es una función asíncrona que toma tres parámetros opcionales: startDate, endDate, y serviceId.

- startDate: La fecha de inicio del periodo para el informe de llamadas.
- endDate: La fecha de fin del periodo para el informe de llamadas.
- serviceId: El identificador del servicio para el cual se desea obtener el informe de llamadas.
- Establece el estado de carga (loaderResponse) como true al inicio de la operación.
- Llama al método getCallsForWeek del cliente Wex con los parámetros proporcionados.
- Establece el estado de carga como false después de obtener la respuesta del informe de llamadas.
- Retorna la respuesta obtenida del servicio Wex.
- Captura y maneja cualquier error que pueda ocurrir durante la obtención del informe de llamadas.

## Retorno del Hook (return)

- Retorna un objeto que contiene las siguientes propiedades
- getAllCallReport: La función para obtener el informe de llamadas.
- loaderResponse: El estado de carga que indica si la operación está en curso.