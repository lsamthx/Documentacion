---
sidebar_position: 57
---

# auth.js

Este código define las rutas y middlewares asociados a las operaciones relacionadas con la autenticación en una aplicación Express. 

```jsx
// path: /api/login

const { Router } = require("express");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../Controllers/auth");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJST } = require("../middlewares/validar-jwt");

const router = Router();

router.post(
  "/new",
  [
    // middLeWares
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    validarCampos,
  ],
  crearUsuario
);

//login
router.post(
  "/",
  [
    // middlewares
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  loginUsuario
);

// Revalidar token

router.get("/renew", validarJST, revalidarToken);

module.exports = router;
```

## Explicación

### Importación de módulos y funciones

- **const Router = require("express");**: Importa el objeto Router desde el módulo express para definir las rutas.
- **const crearUsuario, loginUsuario, revalidarToken = require("../Controllers/auth");**: Importa las funciones crearUsuario, loginUsuario, y revalidarToken desde el archivo auth.js ubicado en la carpeta Controllers.
- **const check = require("express-validator");**: Importa la función check desde el módulo express-validator para validar campos en las solicitudes.
- **const validarCampos = require("../middlewares/validar-campos");**: Importa la función validarCampos desde el archivo validar-campos.js ubicado en la carpeta middlewares.
- **const validarJST = require("../middlewares/validar-jwt");**: Importa la función validarJST desde el archivo validar-jwt.js ubicado en la carpeta middlewares.

### Creación de un Router

- **const router = Router();**: Crea una instancia de Router para definir las rutas.

### Ruta para la creación de usuarios

- **router.post("/new", crearUsuario);**: Define una ruta POST en el endpoint "/new" que utiliza varios middlewares de validación (check y validarCampos) antes de llamar a la función crearUsuario para crear un nuevo usuario.

### Ruta para el inicio de sesión (login)

- **router.post("/", loginUsuario);**: Define una ruta POST en el endpoint "/" que utiliza varios middlewares de validación (check y validarCampos) antes de llamar a la función loginUsuario para manejar el inicio de sesión.

### Ruta para la revalidación de tokens

- **router.get("/renew", validarJST, revalidarToken);**: Define una ruta GET en el endpoint "/renew" que utiliza el middleware validarJST antes de llamar a la función revalidarToken para renovar un token.
Exportación del Router:

- **module.exports = router;**: Exporta el objeto router para que pueda ser utilizado en otros archivos.

En resumen, este código configura las rutas y los middlewares necesarios para manejar la creación de usuarios, el inicio de sesión y la revalidación de tokens en una aplicación Express. Las rutas están definidas de manera que se apliquen ciertas validaciones antes de ejecutar las funciones asociadas.