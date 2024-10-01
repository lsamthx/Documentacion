---
sidebar_position: 1
---

# 🚨 AlertComponent

El componente `AlertComponent` utiliza el componente `MuiAlert` de Material-UI para mostrar alertas personalizadas en tu aplicación. Este componente es útil para notificar al usuario sobre el estado de sus acciones.

---

## 📋 Descripción

`AlertComponent` proporciona una forma sencilla de mostrar alertas con un mensaje específico y un tipo de alerta. Puedes personalizar la alerta según tus necesidades.

---

## 🛠️ Implementación

Aquí tienes el código para el componente `AlertComponent`:

```jsx 
import MuiAlert from "@mui/material/Alert";

function AlertComponent (props) {
  const { message, handleClose = () => {}, typeAlert = 'success' } = props;
  
  return (
    <MuiAlert
    onClose={handleClose}
    severity={typeAlert}
    sx={{  }}
    >
    {message}
    </MuiAlert>
  );
}

export default AlertComponent;
```

## ⚙️ Propiedades

| Propiedad    | Tipo     | Descripción                                       | Valor por Defecto |
|--------------|----------|---------------------------------------------------|-------------------|
| `message`    | string   | El mensaje que se mostrará en la alerta.         | -                 |
| `handleClose`| function | Función que se ejecuta al cerrar la alerta.      | `() => {}`        |
| `typeAlert`  | string   | Tipo de alerta (success, error, warning, info).  | `'success'`      |

