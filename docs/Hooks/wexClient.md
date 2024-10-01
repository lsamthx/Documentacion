---
sidebar_position: 95
---

# wexClient.js (Client)

Este hook de React se llama useWexClient y proporciona métodos para realizar operaciones relacionadas con la API de Wex Services. 

```js 
import { HttpFetchClient } from "../../lib/httpWexClient";
import { useParams } from "react-router-dom";

export class WexApiError extends Error {
  constructor(message, errorType, httpCode = null, extraContent = null) {
    super(message);
    this.name = "WexApiError";
    this.httpCode = httpCode;
    this.errorType = errorType;
    this.extraContent = extraContent;
  }
}

const useWexClient = () => {
  const { id } = useParams();

  const WEX_API_URL = "https://devapi.wex.services/";
  // const WEX_API_URL = "http://localhost:3001/";

  const clientFetch = HttpFetchClient(WEX_API_URL);

  const login = async (user, password) => {
    const path = "login";

    const dataObjt = {
      user,
      password,
    };

    const response = await clientFetch.post(path, dataObjt);

    return response;
  };

  const getQueues = async () => {
    const path = `api/detail-service/${id}`;
    const objet = {
      idUser: id,
    };

    const response = await clientFetch.post(path, objet);
    return response;
  };

  const getInfoGeneral = async () => {
    const path = `api/generalInformation/${id}`;
    const objet = {
      idUser: id,
    };

    const response = await clientFetch.post(path, objet);
    return response;
  };

  const getAplications = async () => {
    const path = `api/AppsThirdParty/${id}`;
    const objet = {
      idUser: id,
    };

    const response = await clientFetch.post(path, objet);
    return response;
  };

  const getServices = async (idUser = "") => {
    const path = "api/services";
    const objet = {
      idUser,
    };
    const response = await clientFetch.post(path, objet);
    return response;
  };

  const getResponse = async () => {
    const path = `api/quicklyAnswer/${id}`;
    const objet = {
      idUser: id,
    };

    const response = await clientFetch.post(path, objet);
    return response;
  };

  const getCallsForWeek = async (startDate, endDate, serviceId) => {
    const path = `api/callsForWeek`;
    const objet = {
      startDate,
      endDate,
      service: serviceId
    };

    const response = await clientFetch.post(path, objet);
    return response.calls;
  };

  const createUser = async (body = {}) => {
    const path = 'api/create-user';

    const response = await clientFetch.post(path, body);
    return response;
  };

  
  const getUpdateAgents = async (body = {}) => {
    const path = `api/updateUser`;
    const response = await clientFetch.post(path, body);
    return response;
  };

  const getUpdateIVR = async (body = {}) => {
    const path = `api/updateIvr`;
    const response = await clientFetch.post(path, body);
    return response;
  };

  const getDeleteAgents = async (body = {}) => {
    const path = `api/deleteUser`;
    const response = await clientFetch.post(path, body);
    return response;
  };

  const getListIVR = async (body = {}) => {
    const path = `api/options-ivr`;
    const response = await clientFetch.post(path, body);
    return response;
  };

  const addNewIVR = async (body = {}) => {
    const path = `api/add-ivr`;
    const response = await clientFetch.post(path, body);
    return response;
  };

  const sendCSVFile = async (idService = '', fileInput, uriFile = '') => {
    try {
      const path = 'api/upload-XLSX';
      let formdata = new FormData();
      formdata.append("idService", idService);
      formdata.append("archivoXLSX", fileInput, uriFile);
      
      const response = await clientFetch.postFormData(path, formdata);
      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  const instancePostResponse = async (baseURL, method) => {
    const request = buildReqestFormData(baseURL, method);
    const response = await fetch(request);
    const data = await response ? response?.json() : {};

    return data;
  }

  const buildReqestFormData = (baseURL, method) => {
    return new Request(`${baseURL}`, {
      method: method,
      redirect: 'follow'
    });
  }

  const getCountries = async () => {
    try {
      const url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/metadata';
      const response = instancePostResponse(url, 'GET');

      return response;

    } catch (err) {
      throw new Error(err);
    }
  };

  return {
    getCountries,
    login,
    createUser,
    getServices,
    getQueues,
    getInfoGeneral,
    getResponse,
    getAplications,
    getCallsForWeek,
    getUpdateAgents,
    getDeleteAgents,
    sendCSVFile,
    getUpdateIVR,
    getListIVR,
    addNewIVR
  };
};

export default useWexClient;
```

## Imports

- Importa HttpFetchClient desde el archivo "../../lib/httpWexClient".
- Importa useParams de "react-router-dom".

## Clase WexApiError

- Define una clase WexApiError que extiende de Error.
- Constructor que acepta parámetros para el mensaje de error, el tipo de error, el código HTTP y contenido adicional.

## Hook Principal (useWexClient)

- Obtiene el parámetro de ruta id usando el hook useParams.
- Define la URL de la API de Wex Services (WEX_API_URL).
- Utiliza el cliente HTTP personalizado (HttpFetchClient) para realizar las solicitudes a la API de Wex Services.

## Método login

- Realiza una solicitud POST a la ruta "login" con las credenciales de usuario y contraseña.
- Retorna la respuesta de la solicitud.

## Métodos para Obtener Información

- getQueues: Obtiene información detallada del servicio con el ID actual.
- getInfoGeneral: Obtiene información general del servicio con el ID actual.
- getAplications: Obtiene información de aplicaciones de terceros para el servicio con el ID actual.
- getServices: Obtiene la lista de servicios.

## Método getResponse

- Obtiene respuestas rápidas para el servicio con el ID actual.

## Método getCallsForWeek

- Obtiene llamadas para una semana específica, con un rango de fechas y un ID de servicio.

## Métodos para Actualización y Eliminación de Agentes

- getUpdateAgents: Actualiza información de un agente.
- getDeleteAgents: Elimina un agente.

## Métodos para Actualización y Obtención de IVR

- getUpdateIVR: Actualiza información de un IVR.
- getListIVR: Obtiene la lista de opciones de IVR.
- addNewIVR: Agrega un nuevo IVR.

## Método sendCSVFile

Envía un archivo CSV al servidor para su procesamiento.

## Métodos Adicionales

- getCountries: Obtiene información sobre países desde una API externa.
- Retorno del Hook (return): Retorna un objeto que contiene los métodos mencionados para interactuar con la API de Wex Services.