---
sidebar_position: 123
---

# RespuestasRapidas.js (Molecules)

Este componente muestra información relacionada con respuestas rápidas, incluyendo el contenido de las respuestas y botones para agregar respuestas o imágenes. Las respuestas y eventos están basados en los datos obtenidos mediante la solicitud de datos usando useEffect.

## Imports

Imports de `src/components/molecules/RespuestasRapidas.js`:

```jsx title="src/components/molecules/RespuestasRapidas.js"
import React, { useState, useEffect } from 'react';
import { Typography } from "@mui/material";
import CardComponent from '../atoms/CardComponent';
import Stack from '@mui/material/Stack';
import ButtonComponent from '../atoms/ButtonComponent';
import useWexClient from '../../hooks/Clients/wexClient,';
```

Se importan las dependencias necesarias, incluyendo React, componentes de Material-UI como Typography, CardComponent, Stack, ButtonComponent, y el gancho personalizado useWexClient para realizar solicitudes relacionadas con respuestas.

## function & consts

Se definen dos funciones handleClick y handleClickImage que muestran alertas cuando se hacen clic en los botones correspondientes. Estas funciones se utilizan para manejar eventos en el componente.

```jsx
function Respuestas() {
    const handleClick = () => {
    alert('Funciona el evento 1');
    };
    const handleClickImage = () => {
    alert('Funciona el evento 2');
    }; ...}
```

Se utiliza el gancho useEffect para realizar una solicitud de datos utilizando la función getResponse de useWexClient. Los datos de respuesta se almacenan en el estado local data utilizando setData.

```jsx
const { getResponse } = useWexClient();
const [data, setData] = useState(null);

    useEffect(() => {
        getResponse().then((response) => {
        setData(response);
        console.log("Respuestas Rapidas", response)
        });
    }, []);
```

## CardComponent

El componente renderiza información relacionada con respuestas rápidas. Esto incluye el uso del componente CardComponent para mostrar el título "Respuestas Rápidas" y el contenido. El contenido se obtiene de la variable data.
Se crea un enlace (hipervínculo) que dice "ELIMINAR". El color del enlace es azul y, cuando se hace clic en él, no se realiza ninguna acción específica. El enlace tiene un margen izquierdo (marginLeft) para darle espacio.

```jsx
<CardComponent title="Respuestas Rápidas">
            <Stack>
                 <div style={{ display: 'flex', alignItems: "center" }}>
                 <Typography variant="h6"
                 sx={{
                 color: "darkgray",
                textAlign: "center",
                marginTop: "1.5rem",
                marginLeft: "10rem"
                 }}>
                {data ? data.answers : " "}
                </Typography>
                <a href='#' style={{
                color: "blue",
                marginLeft: "30rem",
                marginTop: "1rem",
                textDecoration:"none"
                }}>ELIMINAR</a>
                </div>
            </Stack>
</CardComponent>
```

## ButtonComponents

Se renderizan dos botones "Agregar" y "Agregar Imagen" en línea, utilizando el componente ButtonComponent. Estos botones también están diseñados para manejar eventos cuando se hace clic en ellos. El botón "Agregar" se alinea a la derecha y se coloca más a la izquierda, mientras que el botón "Agregar Imagen" se coloca más a la derecha.

```jsx
<ButtonComponent label="Agregar" onClick={handleClick} />
             </Stack>
             <Stack sx={{
                marginTop: "2rem",
                marginLeft:"2rem",
                width: "10rem",
                textAlign: "right"
                }}>
            <ButtonComponent label="Agregar Imagen" onClick={handleClickImage} />
            </Stack>
            </Stack>
```

