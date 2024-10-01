---
sidebar_position: 3
---

# 🗂️ BoxHeader.js

Este código es un componente de React que utiliza la biblioteca `@mui/material` para crear un componente de caja (**Box**) con estilos específicos para un encabezado.

### 🛠️ Implementación del componente

```jsx
import { Box } from "@mui/material";
import stylesHeader from "./../../styles/Header/Header";

function BoxHeader(props) {
  const { color, children, sx } = props;

  return (
  <Box
  sx={{
    ...stylesHeader.contentHeader(color), // 🎨 Estilo dinámico basado en el color
    ...sx                                 // ✨ Estilos adicionales personalizados
  }}
  >
  {children} // 👶 Mostrar el contenido dentro del Box
  </Box>
  );
}

export default BoxHeader;
```

:::info 💡 Este componente acepta estilos adicionales y un color personalizado para el encabezado.

### 📋 Ejemplo de uso

```js
<BoxHeader color="primary" sx={{ marginBottom: "16px" }}>
  <h1>Encabezado</h1>
</BoxHeader>
```

### ⚙️ Propiedades del componente

| Propiedad  | Tipo       | Descripción                                                                |
| ---------- | ---------- | -------------------------------------------------------------------------- |
| `color`    | `string`   | 🎨 El color del encabezado, que puede ser un valor de Material UI como `primary` o `secondary` |
| `children` | `node`     | 👶 El contenido que se mostrará dentro del componente `BoxHeader`           |
| `sx`       | `object`   | ✨ Estilos adicionales que se aplicarán al componente Box                  |