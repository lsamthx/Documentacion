---
sidebar_position: 67
---

# validar-campos.js

Este código define un middleware llamado validarCampos que utiliza la función validationResult de express-validator para verificar si hay errores de validación en los datos de la solicitud. 

```jsx
const { validationResult } = require('express-validator');

const validarCampos = (req, res, next) => {
    
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
    return res.status(400).json({
    ok: false,
    errors: errores.mapped()
    });
    }
    
    next();
    }

module.exports = {
    validarCampos
}
```

## Explicación

### Importación de validationResult

- **const validationResult = require('express-validator');**: Importa la función validationResult de express-validator.

### Definición del middleware validarCampos

- **const validarCampos = (req, res, next)**: Define una función middleware que toma los objetos req, res, y next como parámetros.

### Verificación de errores de validación

- **const errores = validationResult(req);**: Utiliza la función validationResult para obtener un objeto que contiene los errores de validación basados en la solicitud (req).
- **if (!errores.isEmpty())**: Verifica si hay errores. Si existen, devuelve una respuesta JSON con un código de estado 400 y los errores mapeados.

### Respuesta en caso de errores

- **return res.status(400).json( ok: false, errors: errores.mapped());**: Devuelve una respuesta JSON indicando que la solicitud no es válida (ok: false) y proporciona los errores mapeados en un objeto.

### Llamada a next

- **next();**: Si no hay errores de validación, llama a la función next() para pasar el control al siguiente middleware en la cadena.

### Exportación del middleware

- **module.exports = validarCampos;**: Exporta el middleware validarCampos para que pueda ser utilizado en otros archivos.

En resumen, este middleware se utiliza para verificar si hay errores de validación en los datos de la solicitud utilizando express-validator. Si se encuentran errores, responde con un objeto JSON que contiene la información sobre los errores. Si no hay errores, pasa la solicitud al siguiente middleware. Este middleware es útil cuando se aplican reglas de validación a las rutas de la aplicación utilizando las funciones proporcionadas por express-validator.