---
sidebar_position: 66
---

# Usuario.js

Este código define un esquema de Mongoose para el modelo Usuario en una base de datos MongoDB. 

```jsx
const {Schema, model} = require('mongoose');


const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    online: {
        type: Boolean,
        default: false
    }
});

UsuarioSchema.method('toJSON', function(){
    const {__v, _id, password, ...object} = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('Usuario', UsuarioSchema);
```

## Explicación

### Importación de Mongoose

- **const Schema, model = require('mongoose');**: Importa los objetos Schema y model de Mongoose para definir el esquema y crear el modelo respectivamente.

### Definición del esquema UsuarioSchema

- **const UsuarioSchema = Schema();**: Crea un esquema utilizando el objeto Schema de Mongoose. El esquema tiene varios campos como nombre, apellido, email, password, y online.

### Campos del esquema UsuarioSchema

- **nombre, apellido, email, password**: Campos que almacenan la información del usuario, como nombre, apellido, correo electrónico y contraseña.
- **online**: Campo booleano que indica si el usuario está en línea. Se establece por defecto en false.

### Método toJSON del esquema

- **UsuarioSchema.method('toJSON', function());**: Define un método toJSON para el esquema que modifica la representación JSON del documento para excluir ciertos campos y agregar el campo uid con el valor del _id.

### Exportación del modelo

- **module.exports = model('Usuario', UsuarioSchema);**: Exporta el modelo Usuario, creado a partir del esquema UsuarioSchema. Este modelo se utilizará para interactuar con la colección de usuarios en la base de datos.

En resumen, este código define un esquema de Mongoose para el modelo Usuario. Los usuarios tendrán campos como nombre, apellido, correo electrónico, contraseña y un indicador de si están en línea. El método toJSON se utiliza para modificar la representación JSON del documento al excluir ciertos campos y agregar el campo uid. Este último es simplemente una renombramiento del campo _id. El modelo Usuario se exporta para ser utilizado en otros archivos de la aplicación.
