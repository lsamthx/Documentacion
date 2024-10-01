---
sidebar_position: 124
---

# Search.js (Molecules)

Este componente SearchBar es un componente funcional de React que utiliza Material-UI (@mui/material) para crear una barra de búsqueda.

```js
import React from "react";
import { TextField, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <div style={{
      textAlign: 'end',
      marginRight: '1rem',
      marginTop: '1rem',
      marginBottom: '1rem',

    }}>
      <TextField
        label="Buscar"
        variant="outlined"
        color="primary"
        size="fontLarge"
        InputProps={{
        endAdornment: (
        <IconButton position="end">
        <Search />
        </IconButton>
        ),
        }}
      />
    </div>
  );
};

export default SearchBar;
```

## Renderización

Renderiza un componente TextField de Material-UI con las siguientes propiedades:

- label: Etiqueta que se muestra en la barra de búsqueda.
- variant: Utiliza la variante "outlined" para una apariencia de borde.
- color: Color del tema primario.
- size: Tamaño de fuente grande (fontLarge).
- InputProps: Propiedades del componente de entrada.
- endAdornment: Adorno que se coloca al final del campo de entrada.
- Utiliza un componente IconButton de Material-UI.
- Contiene un icono de búsqueda (Search) del paquete @mui/icons-material.

## Estilos

- Se aplican estilos en línea para ajustar la posición y el espaciado de la barra de búsqueda.
- textAlign 'end': Alinea el contenido a la derecha.
- marginRight '1rem': Márgenes a la derecha de 1 rem.
- marginTop '1rem': Márgenes en la parte superior de 1 rem.
- marginBottom '1rem': Márgenes en la parte inferior de 1 rem.

## Componente Exportado

Exporta el componente SearchBar al final del archivo para que pueda ser utilizado en otros archivos.
Este componente proporciona una barra de búsqueda con un campo de entrada y un ícono de búsqueda al final.