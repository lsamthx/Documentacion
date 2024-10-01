---
sidebar_position: 60
---

# jwt.js

Este código define una función llamada generarJWT que utiliza la biblioteca jsonwebtoken para crear un token JWT (JSON Web Token). 

```jsx
const jwt = require('jsonwebtoken');


const generarJWT = (uid) => {
    return new Promise((resolve, reject) => {
    const payload = {uid};

    jwt.sign(payload, process.env.JWT_KEY, {
    expiresIn: '24h'
    }, (err, token) => {
    if(err){
    console.log(err);
    reject('No se pudo generar el JWT');
    }else{
    resolve(token);
    }
    });
    });
}

module.exports = {
    generarJWT
}
```

# Explicación

## Importación del módulo JWT

- **const jwt = require('jsonwebtoken');**: Importa el módulo jsonwebtoken, que se utiliza para generar y verificar tokens JWT.

## Definición de la función generarJWT

- **const generarJWT = (uid) =>  ...** : Declara una función llamada generarJWT que toma el uid (ID de usuario) como parámetro.

## Uso de una Promise para manejar la asincronía

- **return new Promise((resolve, reject) =>  ... );**: Utiliza una Promise para manejar la asincronía en la generación del token.

## Creación del payload y firma del token

- **const payload = uid;**: Crea un objeto payload que contiene el uid como propiedad.
- **jwt.sign(payload, process.env.JWT_KEY, expiresIn: '24h', (err, token) => ...);**: Utiliza la función sign de jsonwebtoken para firmar el token. Se especifica el payload, la clave secreta almacenada en la variable de entorno JWT_KEY, y la configuración de expiración del token a 24 horas. Se proporciona un callback que maneja el resultado de la firma.

## Manejo de errores y resolución de la Promise

- **if (err) console.log(err); reject('No se pudo generar el JWT'); else resolve(token);**: Si hay un error al firmar el token, se imprime en la consola y se rechaza la Promise con un mensaje de error. Si no hay errores, se resuelve la Promise con el token generado.

## Exportación de la función

- **module.exports = generarJWT;**: Exporta la función generarJWT para que pueda ser utilizada en otros archivos.

En resumen, este código proporciona una función que genera un token JWT utilizando el ID de usuario como parte del payload y una clave secreta almacenada en una variable de entorno. La función devuelve una Promise para manejar la asincronía y proporciona el token resultante o un mensaje de error en caso de fallo.