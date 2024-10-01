---
sidebar_position: 63
---

# obtenerChat.js

Este código define un controlador (obtenerChat) para manejar la solicitud de obtener mensajes de chat entre dos usuarios

```jsx
const Mensaje = require("../Models/mensaje");

const obtenerChat = async (req, res) => {
  const miId = req.uid;
  const mensajesDe = req.params.de;

  const last30 = await Mensaje.find({
    $or: [
    {
    de: miId,
    para: mensajesDe,
    },
    { de: mensajesDe, para: miId },
    ],
  })

.sort({ createdAt: "desc" })
.limit(30);

  res.json({
    ok: true,
    mensajes: last30,
  });
};

module.exports = {
  obtenerChat,
};
```

## Explicación

### Importación del modelo

- **const Mensaje = require("../Models/mensaje");**: Importa el modelo Mensaje desde el archivo mensaje.js ubicado en la carpeta Models.

## Definición de la función obtenerChat

- **const obtenerChat = async (req, res) =>  ... ;**: Declara una función asíncrona llamada obtenerChat que toma los objetos req y res de Express como parámetros.
Extracción de datos del request:

- **const miId = req.uid;**: Extrae el ID del usuario que realiza la solicitud desde el objeto req (request).
- **const mensajesDe = req.params.de;**: Extrae el ID del usuario remitente del chat desde los parámetros de la URL (/:de).

### Consulta a la base de datos

- **const last30 = await Mensaje.find( ... )...;**: Utiliza el modelo Mensaje para realizar una consulta a la base de datos MongoDB. La consulta busca los últimos 30 mensajes entre el usuario actual (miId) y el usuario remitente (mensajesDe). La condición $or busca mensajes donde el remitente sea el usuario actual y el destinatario sea el usuario remitente, o viceversa.

### Ordenamiento y límite de mensajes

- **.sort( createdAt: "desc" )**: Ordena los resultados por la fecha de creación en orden descendente (los más recientes primero).
- **.limit(30)**: Limita los resultados a los últimos 30 mensajes.

### Respuesta HTTP

- **res.json( ok: true, mensajes: last30 );**: Envía una respuesta JSON al cliente con un objeto que contiene la propiedad ok establecida en true y los últimos 30 mensajes obtenidos.

### Exportación del controlador

- **module.exports =  obtenerChat;**: Exporta el objeto que contiene la función obtenerChat para que pueda ser utilizado en otros archivos.

En resumen, este controlador se encarga de obtener los últimos 30 mensajes de chat entre dos usuarios específicos. Realiza una consulta a la base de datos utilizando el modelo Mensaje, ordena los resultados por fecha de creación y los limita a 30 mensajes. La respuesta incluye estos mensajes en formato JSON.