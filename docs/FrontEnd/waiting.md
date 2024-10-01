---
sidebar_position: 48
---

# Waiting.js

El componente Waiting muestra una imagen y opcionalmente un texto centrado. Utiliza styled-components para estilizar la imagen y Material UI para la disposición y el texto. La imagen se ajusta automáticamente al tamaño del contenedor, y el texto se estiliza de manera responsiva.

```js
import React from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import wex_png_wait from "../../assets/wex_png_wait.png";
import Typography from "@mui/material/Typography";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Waiting = ({ textColor, text }) => {
  return (
    <Stack
      sx={{
        height: "90vh",
        width: "99.5vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          height: "40vh",
          width: "15vw",
          textAlign:"center"
        }}
      >
        <Image src={wex_png_wait} alt="Logo" />
        {text && ( 
          <Typography style={{ color: textColor, fontSize: "calc(0.61vw + 1px)", whiteSpace: "nowrap", 
          width: "100%", }}>
            {text}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};

export default Waiting;
```

## Imports

**React**: Biblioteca principal de React.
**styled-components**: Biblioteca para estilización en componentes de React.
**Stack**: Componente de Material UI para disposición de elementos en una pila.
**wex_png_wait**: Imagen importada desde la carpeta assets.
**Typography**: Componente de Material UI para estilizar texto.

## Styled Components

**styled.img**: Un componente estilizado para la imagen con max-width y max-height establecidos a 100%, asegurando que la imagen se ajuste al tamaño del contenedor.

## Componente Waiting

### Desglose del Componente:

#### Contenedor Principal (Stack):

**sx Prop**: Utiliza la prop sx de MUI para aplicar estilos.

#### Estilos:

**height: 90vh**: Altura del contenedor al 90% de la altura de la vista.
**width: 99.5vw**: Ancho del contenedor al 99.5% del ancho de la vista.
**display: flex**: Utiliza Flexbox para centrar elementos.
**justifyContent**: "center": Centra horizontalmente.
**alignItems: center**: Centra verticalmente.

#### Contenedor Secundario (Stack):

**sx Prop**: Estiliza el contenedor secundario.

#### Estilos:

**height: 40vh**: Altura del contenedor al 40% de la altura de la vista.
**width: 15vw**: Ancho del contenedor al 15% del ancho de la vista.
**textAlign: center**: Centra el texto horizontalmente.

##### Imagen:

**Image**: Componente estilizado que muestra la imagen wex_png_wait con alt="Logo".

#### Texto Condicional:

**Condición text && ( ... )**: Renderiza el texto solo si text existe.
**Typography**: Estiliza el texto con:

- **color: textColor**: Aplica el color pasado por prop.
- **fontSize: "calc(0.61vw + 1px)"**: Tamaño de fuente responsivo.
- **whiteSpace: "nowrap"**: Previene el salto de línea.
- **width: "100%"**: Ajusta el ancho al 100% del contenedor.