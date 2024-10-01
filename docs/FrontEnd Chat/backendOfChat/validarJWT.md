---
sidebar_position: 68
---

# validar-jwt.js

Este código define un middleware llamado validarJST que verifica la presencia y validez de un token JWT en las solicitudes.

```jsx
const jwt = require("jsonwebtoken");

const validarJST = (req, res, next) => {
  try {
  const token = req.header("x-token");
  if (!token) {
  return res.status(401).json({
  ok: false,
  msg: "No hay token en la petición",
  });
  }

const payload = jwt.verify(token, process.env.JWT_KEY);
  req.uid = payload.uid;

  next();
  } catch (error) {
  return res.status(401).json({
  ok: false,
  msg: "Token no válido",
  });
  }
};

module.exports = {
  validarJST,
};
```

## Explicación

### Importación del módulo JWT

- **const jwt = require("jsonwebtoken");**: Importa el módulo jsonwebtoken para trabajar con tokens JWT.

### Definición del middleware validarJST

- **const validarJST = (req, res, next)**: Define una función middleware que toma los objetos req, res, y next como parámetros.

### Extracción y verificación del token

- **const token = req.header("x-token");**: Extrae el token del encabezado HTTP utilizando la clave "x-token".
- **if (!token)**: Verifica si el token está presente en la solicitud. Si no está presente, responde con un código de estado 401 y un mensaje indicando que no hay token en la petición.

### Verificación del token mediante jwt.verify

- **const payload = jwt.verify(token, process.env.JWT_KEY);**: Utiliza la función verify de jsonwebtoken para verificar la validez del token utilizando la clave secreta almacenada en la variable de entorno JWT_KEY. Si la verificación es exitosa, el resultado se almacena en la variable payload.

### Almacenamiento del UID en req

- **req.uid = payload.uid;**: Si el token es válido, el ID del usuario (uid) se almacena en la propiedad uid del objeto req para que pueda ser utilizado en las siguientes capas de la aplicación.

### Llamada a next

- **next();**: Si todo es válido, se llama a la función next() para pasar el control al siguiente middleware en la cadena.

### Manejo de errores

- **catch (error)**: Captura cualquier error que ocurra durante la verificación del token (por ejemplo, un token inválido) y responde con un código de estado 401 y un mensaje indicando que el token no es válido.

### Exportación del middleware

- ****module.exports = validarJST;**: Exporta el middleware validarJST para que pueda ser utilizado en otros archivos.

En resumen, este middleware se utiliza para validar la presencia y la autenticidad de un token JWT en las solicitudes. Si el token está ausente o es inválido, responde con un código de estado 401; de lo contrario, pasa la solicitud al siguiente middleware. Este middleware es útil para proteger rutas y asegurar que solo los usuarios autenticados puedan acceder a ciertos recursos.