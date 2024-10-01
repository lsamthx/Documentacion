---
sidebar_position: 56
---

# Auth.js

Este código es un conjunto de funciones para manejar la creación de usuarios, el inicio de sesión y la revalidación de tokens en una aplicación que utiliza Express y MongoDB. 

```jsx
const { response } = require("express");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const Usuario = require("../models/usuario");
const { generarJWT } = require("../helpers/jwt");

const crearUsuario = async (req, res = response) => {
  try {
  const { email, password } = req.body;
  const existeEmail = await Usuario.findOne({ email });
  console.log(existeEmail);
  if (existeEmail) {
  return res.status(400).json({
  ok: false,
  msg: "El usuario ya existe",
  });
    }

const usuario = new Usuario(req.body);

// Encriptar contraseña
const salt = bcrypt.genSaltSync(); // el salt es un valor aleatorio que se le agrega a la contraseña para que sea mas dificil de descifrar
usuario.password = bcrypt.hashSync(password, salt);

// Guardar usuario

await usuario.save();
// Generar el JWT
const token = await generarJWT(usuario.id);

res.json({
usuario,
token,
});
} catch (error) {
console.log(error);
res.status(500).json({
ok: false,
msg: "Por favor hable con el administrador",
});
}
};

const loginUsuario = async (req, res = response) => {
const { email, password } = req.body;

try {
// Verificar si el email existe
const usuariDB = await Usuario.findOne({ email });
if (!usuariDB) {
return res.status(404).json({
    ok: false,
    msg: "Email no encontrado",
    });
    }
// Verificar si el password es correcto
const validPassword = bcrypt.compareSync(password, usuariDB.password);
if (!validPassword) {
return res.status(400).json({
ok: false,
msg: "La contraseña no es valida",
});
}

// Generar el JWT
const token = await generarJWT(usuariDB.id);

res.json({
ok: true,
usuario: usuariDB,
token,
});
} catch (error) {
console.log(error);
res.status(500).json({
ok: false,
msg: "Por favor hable con el administrador",
});
}
};

const revalidarToken = async (req, res = response) => {
const uid = req.uid;

//Gerar un JWT
const token = await generarJWT(uid);

// Obtener el usuario por el UID
const usuario = await Usuario.findById(uid);

res.json({
ok: true,
token,
usuario,
});
};

module.exports = {
crearUsuario,
loginUsuario,
revalidarToken,
};
```

## Explicación

### Importación de módulos y modelos

- **const response  = require("express");**: Importa el objeto response desde el módulo express. Este objeto se utiliza para enviar respuestas HTTP.
- **const bcrypt = require("bcryptjs");**: Importa el módulo bcryptjs, que se utiliza para el hashing y comparación segura de contraseñas.
- **const validationResult = require("express-validator");**: Importa la función validationResult desde el módulo express-validator. Esta función se usa para manejar los resultados de la validación de las solicitudes HTTP.
- **const Usuario = require("../models/usuario");**: Importa el modelo Usuario desde el archivo de modelo correspondiente.
- **const generarJWT = require("../helpers/jwt");**: Importa la función generarJWT desde el archivo de ayuda jwt.

### Función crearUsuario

- Esta función maneja la creación de nuevos usuarios.
- Extrae el email y la password del cuerpo de la solicitud (req.body).
- Verifica si ya existe un usuario con el mismo email en la base de datos. Si existe, devuelve un mensaje de error.
- Crea una instancia del modelo Usuario con los datos de la solicitud (req.body).
- Genera un "salt" aleatorio usando bcrypt.genSaltSync() y luego utiliza este salt para hashear la contraseña del usuario con bcrypt.hashSync(password, salt).
- Guarda el usuario en la base de datos.
- Genera un token JWT utilizando la función generarJWT y lo devuelve junto con la información del usuario en la respuesta.

### Función loginUsuario

- Maneja el inicio de sesión de los usuarios.
- Extrae el email y la password del cuerpo de la solicitud (req.body).
- Busca en la base de datos un usuario con el mismo email. Si no lo encuentra, devuelve un mensaje de error.
- Compara la contraseña proporcionada con la contraseña almacenada en la base de datos usando bcrypt.compareSync.
- Si las contraseñas no coinciden, devuelve un mensaje de error.
- Si las contraseñas coinciden, genera un token JWT utilizando la función generarJWT y lo devuelve junto con la información del usuario en la respuesta.

### Función revalidarToken

- Maneja la revalidación de tokens.
- Extrae el uid (ID de usuario) del objeto req.
- Genera un nuevo token JWT utilizando la función generarJWT.
- Busca en la base de datos el usuario correspondiente al uid.
- Devuelve el nuevo token JWT junto con la información del usuario en la respuesta.

### Exportación de funciones

- Exporta las funciones crearUsuario, loginUsuario y revalidarToken para que puedan ser utilizadas en otros archivos.

En resumen, estas funciones son parte de un sistema de autenticación de usuarios utilizando tokens JWT, encriptación de contraseñas mediante bcrypt, y validación de solicitudes con express-validator.
