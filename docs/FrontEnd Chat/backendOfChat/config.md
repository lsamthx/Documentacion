---
sidebar_position: 58
---

# config.js

Este código define una función para establecer la conexión con una base de datos MongoDB utilizando Mongoose

```jsx
const mongoose = require("mongoose");

const dbConection = async () => {
    try {
    await mongoose.connect(process.env.DB_HOST, {
            
    });

    console.log("DB online");
    } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de iniciar la BD");
    }
};

module.exports = {
    dbConection
};
```

## Explicación

### Importación de Mongoose

- **const mongoose = require("mongoose");**: Importa el módulo Mongoose, que es una biblioteca de modelado de objetos MongoDB para Node.js.

### Definición de la función dbConection

- **const dbConection = async () =>  ... ;**: Declara una función asíncrona llamada dbConection.

## Establecimiento de la conexión a la base de datos

- **await mongoose.connect(process.env.DB_HOST);**: Utiliza la función connect de Mongoose para establecer la conexión con la base de datos. El URI de la base de datos se lee desde la variable de entorno process.env.DB_HOST.

## Manejo de errores

- **try ... catch (error) ...**: Utiliza un bloque try-catch para manejar posibles errores durante la conexión a la base de datos.
- **console.log("DB online");**: Imprime un mensaje en la consola indicando que la base de datos está en línea si la conexión es exitosa.

## Manejo de errores y lanzamiento de excepciones

- **console.log(error);**: En caso de error, imprime el error en la consola.
- **throw new Error("Error a la hora de iniciar la BD");**: Lanza una nueva instancia de la clase Error con un mensaje específico indicando que hubo un error al intentar iniciar la base de datos.

## Exportación de la función

- **module.exports = dbConection;**: Exporta la función dbConection para que pueda ser utilizada en otros archivos.

En resumen, este código proporciona una función llamada dbConection que utiliza Mongoose para conectar la aplicación a una base de datos MongoDB. La función maneja errores y lanza una excepción en caso de que la conexión no sea exitosa. La conexión se realiza utilizando la URI de la base de datos almacenada en la variable de entorno DB_HOST.