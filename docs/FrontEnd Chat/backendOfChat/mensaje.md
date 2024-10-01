---
sidebar_position: 61
---

# mensaje.js

Este código define un esquema de Mongoose para el modelo Mensaje en una base de datos MongoDB.

```jsx
const {Schema, model} = require('mongoose');


const MensajeSchema = Schema({
de: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
    },
para: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
    },
mensaje: {
    type: String, 
    required: true
    }
}, {
    timestamps: true
});

MensajeSchema.method('toJSON', function(){
    const {__v, ...object} = this.toObject();
    return object;
});

module.exports = model('Mensaje', MensajeSchema);
```

## Explicación

### Importación de Mongoose

- **const Schema, model = require('mongoose');**: Importa los objetos Schema y model de Mongoose para definir el esquema y crear el modelo respectivamente.

### Definición del esquema MensajeSchema

- **const MensajeSchema = Schema( ... , timestamps: true);**: Crea un esquema utilizando el objeto Schema de Mongoose. El esquema tiene tres campos: de, para, y mensaje. Además, incluye la opción timestamps: true para que Mongoose agregue automáticamente los campos createdAt y updatedAt a cada documento.

## Campos del esquema MensajeSchema

- **de**: Un campo que almacena el ID del remitente. Se define como un ObjectId y hace referencia al modelo Usuario. Es obligatorio (required: true).
- **para**: Un campo que almacena el ID del destinatario. Se define como un ObjectId y hace referencia al modelo Usuario. Es obligatorio (required: true).
- **mensaje**: Un campo que almacena el contenido del mensaje. Es de tipo String y es obligatorio (required: true).

## Método toJSON del esquema

- **MensajeSchema.method('toJSON', function()  ... );**: Define un método toJSON para el esquema que modifica la representación JSON del documento para excluir el campo __v (versión del documento) al devolverlo.

## Exportación del modelo

- **module.exports = model('Mensaje', MensajeSchema);**: Exporta el modelo Mensaje, creado a partir del esquema MensajeSchema. Este modelo se utilizará para interactuar con la colección de mensajes en la base de datos.