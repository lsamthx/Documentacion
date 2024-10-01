---
sidebar_position: 70
---

# loginPages.js

Este código define un componente funcional llamado LoginPages que representa la página de inicio de sesión en una aplicación de chat.

```jsx
import React from "react";
import { Link } from "react-router-dom";

const LoginPages = () => {
  return (
  <form className="login100-form validate-form flex-sb flex-w">
  <span className="login100-form-title mb-3">Chat - Ingreso</span>

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
  <div className="col">
  <input
  className="input-checkbox100"
  id="ckb1"
  type="checkbox"
  name="remember-me"
  />
  <label className="label-checkbox100">Recordarme</label>
  </div>

  <div className="col text-right">
  <Link to={"/auth/register"} className="txt1">
  No tienes cuenta?
  </Link>
  </div>
  </div>

  <div className="container-login100-form-btn m-t-17">
  <button className="login100-form-btn">Ingresar</button>
  </div>
  </form>
  );
};

export default LoginPages;
```

## Explicación

### Definición del componente LoginPages

Define un componente funcional llamado LoginPages. Este componente devuelve un formulario form que representa la página de inicio de sesión en la aplicación de chat. Incluye:

- Un título span con la clase de estilo login100-form-title que dice "Chat - Ingreso".
- Dos campos de entrada input para el correo electrónico y la contraseña.
- Un checkbox input para la opción de "Recordarme".
- Un enlace Link a la página de registro con el texto "No tienes cuenta?".
- Un botón button para enviar el formulario.

### Exportación del componente

- **export default LoginPages;**: Exporta el componente LoginPages para que pueda ser utilizado en otros archivos.

En resumen, el componente LoginPages representa visualmente la página de inicio de sesión en una aplicación de chat. Incluye campos de entrada para el correo electrónico y la contraseña, una opción para "Recordarme", un enlace para registrarse y un botón para enviar el formulario.