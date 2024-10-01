---
sidebar_position: 96
---

# httpWexClient.js

 Esta fábrica de clientes proporciona métodos convenientes para realizar solicitudes GET y POST, y maneja la serialización y deserialización de datos en formato JSON. También permite la interceptación de solicitudes y respuestas para personalizar el comportamiento del cliente HTTP en una aplicación.

```jsx 
export const HttpFetchClient = (
  baseURL,
  requestInterceptor = request => request,
  responseInterceptor = response => response.data,
  errorHandler = error => Promise.reject(error),
) => {
  const get = async (path) => {
    const response = await instanceResponse(baseURL, path, 'GET')
    return response;
  }
  const post = async (path, body) => {
    const response = await instanceResponse(baseURL, path, 'POST', body);
    return response;
  }

  const postFormData = async (path, body) => {
    const response = await instancePostResponse(baseURL, path, 'POST', body);
    return response;
  }

  const instanceResponse = async (baseURL, path, method, body) => {
    const request = buildReqest(baseURL, path, method, body);
    const response = await fetch(request);
    const data = await response ? response?.json() : {};

    return data;
  }

  const instancePostResponse = async (baseURL, path, method, body) => {
    const request = buildReqestFormData(baseURL, path, method, body);
    const response = await fetch(request);
    const data = await response ? response?.json() : {};

    return data;
  }

  const buildReqestFormData = (baseURL, uri, method, body) => {
    return new Request(`${baseURL}${uri}`, {
    method: method,
    body: body,
    redirect: 'follow'
    });
  }

  const buildReqest = (baseURL, uri, method, body) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    return new Request(`${baseURL}${uri}`, {
    method: method,
    body: JSON.stringify(body),
    headers: myHeaders,
    redirect: 'follow'
    });
  }

  return {
    get,
    post,
    postFormData
  }
};
```

## Parámetros

- baseURL: La URL base para todas las solicitudes del cliente.
- requestInterceptor: Una función de intercepción de solicitud que puede modificar la solicitud antes de que se envíe.
- responseInterceptor: Una función de intercepción de respuesta que procesa la respuesta antes de que sea consumida por el código cliente.
- errorHandler: Una función que maneja los errores de las solicitudes.

## Métodos del Cliente

- get: Realiza una solicitud GET al servidor con la ruta especificada.
- post: Realiza una solicitud POST al servidor con la ruta y el cuerpo especificados.
- postFormData: Realiza una solicitud POST al servidor con datos de formulario.

## Funciones Internas

- instanceResponse: Función interna que realiza una solicitud y devuelve la respuesta en formato JSON.
- instancePostResponse: Función interna similar a instanceResponse pero específicamente diseñada para solicitudes POST.
- buildReqestFormData: Construye una solicitud para datos de formulario.
- buildReqest: Construye una solicitud con el encabezado "Content-Type" establecido como "application/json".

## Retorno

La función retorna un objeto que contiene los métodos get, post, y postFormData.