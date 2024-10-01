---
sidebar_position: 6
---

# 🎨 ButtonComponent.js

Este componente `ButtonComponent` proporciona un botón con estilos personalizables y opciones como:

- 🎨 **Color de fondo**
- ✍️ **Color del texto**
- 🖱️ **Capacidad de hacer clic**
- 🚫 **Posibilidad de deshabilitar el botón**

Los estilos se pueden personalizar a través del objeto `buttonStyles`.

### 🛠️ Implementación del componente

```jsx
import React from "react";
import Button from "@mui/material/Button";
import buttonStyles from "./../../styles/Button/ButtonComponent";

function ButtonComponent({
  label,
  onClick,
  backgroundColor,
  color,
  disabled
}) {
  return (
    <Button
    sx={{
    ...buttonStyles.buttonStyle,
    backgroundColor: backgroundColor,
    color: color,
    "&:hover": {
     backgroundColor: backgroundColor,
     }
    }}
    variant="contained"
    onClick={onClick}
    disabled={disabled}
    >
    {label}
    </Button>
  );
}

export default ButtonComponent;
```

:::info 💡 Este componente es completamente personalizable. Puedes modificar el color de fondo y el color del texto a tu gusto, además de poder deshabilitar el botón si es necesario. 

### 📋 Ejemplo de uso

```jsx
<ButtonComponent
  label="Click Me"
  backgroundColor="#3498db"
  color="#fff"
  onClick={handleClick}
  disabled={false}
/>
```

### ⚙️ Propiedades del componente


| Propiedad        | Tipo       | Descripción                                                |
| ---------------- | ---------- | ---------------------------------------------------------- |
| `label`          | `string`   | 📛 Texto que se mostrará dentro del botón                   |
| `onClick`        | `function` | 🖱️ Función que se ejecutará cuando el botón sea clicado      |
| `backgroundColor`| `string`   | 🎨 Color de fondo del botón                                 |
| `color`          | `string`   | ✍️ Color del texto del botón                                |
| `disabled`       | `boolean`  | 🚫 Indica si el botón está deshabilitado                    |
