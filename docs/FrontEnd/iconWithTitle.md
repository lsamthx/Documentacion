---
sidebar_position: 25
---

# IconWithTitle.js

El componente IconWithTitle muestra un icono y un título alineados horizontalmente. Utiliza Stack de Material-UI para la disposición y Typography para el texto del título. El tamaño del icono es configurable a través de la prop iconSize. El componente valida las props usando PropTypes para asegurar que icon sea un elemento de React y title sea una cadena.

```js
import React from "react";
import PropTypes from "prop-types";
import { Typography, Stack } from "@mui/material";

const IconWithTitle = ({ icon, title,iconSize }) => {
  return (
    <Stack sx={{display:"flex"}}>
      <Stack direction="row" sx={{alignItems: "center",}}>
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "center",
          "& .MuiSvgIcon-root": {
            fontSize: iconSize,
          },
        }}
      >
        {icon}
      </Stack>
      <Stack>
        <Typography
        component="div"
        fontWeight="600"
        fontSize="57.6px"
        marginLeft="10px"
        fontFamily="Raleway, sans-serif"
      >
        {title}
      </Typography>
      </Stack>
      </Stack>
     
      
    </Stack>
  );
};

IconWithTitle.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default IconWithTitle;
```

## Imports

**React**: Se importa la biblioteca React para usar la funcionalidad de componentes.
**PropTypes**: Se importa la biblioteca PropTypes para definir tipos de propiedades y validar las props del componente.

### mui/material:

**Typography**: Componente de Material-UI para estilizar texto.
**Stack**: Componente de Material-UI para organizar elementos en una pila (vertical u horizontal).

## Definición del componente IconWithTitle

### Props:

**icon**: Icono a mostrar, se espera que sea un elemento de React (probablemente un icono de Material-UI).
**title**: Título a mostrar junto al icono, se espera que sea una cadena.
****iconSize**: Tamaño del icono, se espera que sea una cadena o un número que Material-UI pueda interpretar.

## Estructura del JSX:

**Stack principal**: Contenedor principal con display: "flex".
**Stack horizontal (row)**: Contenedor para organizar el icono y el título en una fila horizontal, con alignItems: "center" para centrar verticalmente.

### Stack para el icono:

Centra el icono con alignItems: "center" y justifyContent: "center".
Aplica el tamaño especificado al icono con MuiSvgIcon-root:  fontSize: iconSize.
Muestra el icono recibido como prop.

### Stack para el título:

**Typography**: Muestra el título con estilo.
**component="div"**: Renderiza el texto como un div.
**fontWeight="600"**: Aplica un peso de fuente de 600 (negrita).
**fontSize="57.6px"**: Aplica un tamaño de fuente de 57.6px.
**marginLeft="10px"**: Aplica un margen izquierdo de 10px.
fontFamily="Raleway, sans-serif": Usa la fuente "Raleway" con respaldo en "sans-serif".

## PropTypes

**icon**: Debe ser un elemento de React y es requerido.
**title**: Debe ser una cadena y es requerido.