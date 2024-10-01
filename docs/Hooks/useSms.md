---
sidebar_position: 93
---

# useSms.js

Este hook encapsula la lógica para enviar un SMS, manejando el estado de carga de manera eficiente para indicar al usuario cuándo una operación está en progreso. También se devuelve loader para que los componentes puedan reaccionar a los cambios en el estado de carga.

```js 
import useWexClient from "./Clients/wexClient,";
import { useState } from "react";

export const useSms = () => {
    const { sendSMS } = useWexClient();
    const [loader, setLoader] = useState();

    const sendNewSms = async (fileInput, uriFile = '', nameCampaign, startDate, schedule) => {
        setLoader(true);
        try {
            const response = await sendSMS(fileInput, uriFile, nameCampaign, startDate, schedule);
            setLoader(false);
            return response;
        } catch (err) {
            setLoader(false);
            throw err;
        }
    };
    return {
        sendNewSms,
        loader,
    };

};
```

## Imports

**useWexClient**: Hook personalizado que proporciona funciones de API.
**useState**: Hook de React para manejar el estado.

## Definición del Hook

**useSms**: Un hook personalizado que encapsula la lógica para enviar SMS.

## Estados

**loader**: Estado booleano para indicar si una operación está en progreso, inicializado en false.

## Funciones

**sendNewSms**: Función asíncrona que realiza la operación de enviar un nuevo SMS.
**Parámetros**: fileInput, uriFile, nameCampaign, startDate, schedule.
**Inicio de la operación**: setLoader(true) establece el estado de carga en true.
**Llamada a la API**: sendSMS(fileInput, uriFile, nameCampaign, startDate, schedule) realiza la llamada a la API con los parámetros proporcionados.
**Fin de la operación**: setLoader(false) establece el estado de carga en false.
**Retorno de la respuesta**: La respuesta de la API se devuelve.
**Manejo de errores**: Si ocurre un error, el estado de carga se restablece y el error se relanza.

## Retorno del Hook

sendNewSms y loader se devuelven para su uso en componentes que utilicen este hook.