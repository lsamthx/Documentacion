---
sidebar_position: 71
---

# RegisterPages.js

Este código define un componente funcional llamado RegisterPages que representa la página de registro en una aplicación de chat.

```jsx
import React from "react";
import { Link } from "react-router-dom";

const RegisterPages = () => {
  return (
  <form className="login100-form validate-form flex-sb flex-w">
  <span className="login100-form-title mb-3">Chat - Registro</span>

  <div className="wrap-input100 validate-input mb-3">
    <input className="input100" type="text" name="name" placeholder="Nombre" />
    <span className="focus-input100"></span>
    </div>

    <div className="wrap-input100 validate-input mb-3">
    <input className="input100" type="email" name="email" placeholder="Email" />
    <span className="focus-input100"></span>
    </div>

    <div className="wrap-input100 validate-input mb-3">
    <input
    className="input100"
    type="password"
    name="password"
    placeholder="Password"
    />
    <span className="focus-input100"></span>
    </div>

    <div className="row mb-3">
    <div className="col text-right">
    <Link to={"/auth/login"} className="txt1">
    Ya tienes cuenta?
    </Link>
    </div>
    </div>

    <div className="container-login100-form-btn m-t-17">
    <button className="login100-form-btn">Crear cuenta</button>
    </div>
    </form>
  );
};

export default RegisterPages;
```

## Explicación

### Definición del componente RegisterPages

Define un componente funcional llamado RegisterPages. Este componente devuelve un formulario form que representa la página de registro en la aplicación de chat. Incluye:

- Un título span con la clase de estilo login100-form-title que dice "Chat - Registro".
- Tres campos de entrada input para el nombre, el correo electrónico y la contraseña.
- Un enlace Link a la página de inicio de sesión con el texto "Ya tienes cuenta?".
- Un botón button para enviar el formulario.

### Exportación del componente

- **export default RegisterPages;**: Exporta el componente RegisterPages para que pueda ser utilizado en otros archivos.

En resumen, el componente RegisterPages representa visualmente la página de registro en una aplicación de chat. Incluye campos de entrada para el nombre, el correo electrónico y la contraseña, un enlace para iniciar sesión y un botón para enviar el formulario.