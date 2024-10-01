---
sidebar_position: 143
---

# TooltipPassword.js

Este código define un componente de React llamado TooltipPassword

El componente importa dos componentes adicionales: BoxHeader y Tooltip.

El componente TooltipPassword es una composición de dos componentes: Tooltip y BoxHeader. En este caso, se utiliza un Tooltip para envolver el BoxHeader. El BoxHeader contiene información sobre las características que debe tener una contraseña, y tiene estilos personalizados definidos a través del objeto sx en la propiedad sx.

```js 
import BoxHeader from "../atoms/BoxHeader";
import Tooltip from "../atoms/Tooltip";

function TooltipPassword() {
  return (
    <Tooltip>
    <BoxHeader
    sx={{
    color: "#000000",
    padding: "6px 16px",
    borderRadius: "10px",
    backgroundColor: "rgb(255, 244, 229)",
    margin: "1rem 0",
    fontSize: "0.9rem",
    minHeight: 200,
    textAlign: "left",
        }}
      >
    <p>
    <strong>
    La contraseña debe tener las siguientes características:
    </strong>
    </p>

    <ul>
    <li>Mínimo 8 caracteres.</li>
    <li>Máximo 15 caracteres.</li>
    <li>Al menos una letra mayúscula.</li>
    <li>Al menos una letra minúscula.</li>
    <li>Al menos un dígito.</li>
    <li>No espacios en blanco.</li>
    <li>Al menos un carácter especial ej. $@$!%*?&</li>
    </ul>
    </BoxHeader>
    </Tooltip>
  );
}

export default TooltipPassword;
```