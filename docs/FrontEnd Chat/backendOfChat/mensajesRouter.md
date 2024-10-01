---
sidebar_position: 62
---

# mensajes.js

Este código define una ruta en Express para obtener un chat entre dos usuarios.

```jsx
/*
    Path: /api/mensajes
*/
const { Router } = require("express");
const { validarJST } = require("../middlewares/validar-jwt");
const { obtenerChat } = require("../Controllers/obtenerChat");

const router = Router();

router.get("/:de", validarJST, obtenerChat);


module.exports = router;
```

# Explicación

## Importación de módulos y funciones

- **const Router = require("express");**: Importa el objeto Router desde el módulo express para definir rutas.
- **const validarJST = require("../middlewares/validar-jwt");**: Importa la función validarJST desde el archivo validar-jwt.js ubicado en la carpeta middlewares.
- **const obtenerChat = require("../Controllers/obtenerChat");**: Importa la función obtenerChat desde el archivo obtenerChat.js ubicado en la carpeta Controllers.

## Creación de un Router

- **const router = Router();**: Crea una instancia de Router para definir la ruta.

## Definición de la ruta para obtener un chat

- **router.get("/:de", validarJST, obtenerChat);**: Define una ruta HTTP GET en el endpoint /:de. El parámetro :de se utiliza para especificar el ID del usuario remitente del chat. Se aplica el middleware validarJST para verificar la validez del token JWT y luego se llama a la función obtenerChat para manejar la solicitud.

## Exportación del Router

- **module.exports = router;**: Exporta el objeto router para que pueda ser utilizado en otros archivos.

En resumen, este código define una única ruta GET que requiere un token JWT válido utilizando el middleware validarJST. La ruta está diseñada para obtener el chat de un usuario especificado por su ID (/:de) y utiliza la función obtenerChat del controlador correspondiente.