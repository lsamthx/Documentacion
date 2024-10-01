---
sidebar_position: 103
---

# DashboardGeneral.js (Molecules)

En el archivo **DashboardGeneral.js**, se realizan importaciones de diversos módulos y componentes necesarios para la creación de un panel de control general.

## Imports

Imports de `src/components/molecules/DashboardGeneral.js`:

```jsx title="src/components/molecules/DashboardGeneral.js"
import React from 'react';
import CardComponent from '../atoms/CardComponent';
import Stack from '@mui/material/Stack';
import IconText from '../atoms/IconText';
import { Typography } from '@mui/material';
import PushPin from '@mui/icons-material/PushPin';
import ArticleIcon from '@mui/icons-material/Article';
```

Los imports anteriores tienen las siguientes funcionalidades en el siguiente orden:
1. Importa la biblioteca React, que se utiliza para crear componentes de interfaz de usuario en aplicaciones web de React.
2. Representa una tarjeta con título, contenido y contador.
3. Componente de Material-UI para organizar elementos en una pila o columna.
4. Componente que combina un icono con texto.
5. Componente para mostrar texto con formato.
6. Iconos utilizados en las tarjetas.

## Function DashboardGeneral

Función principal de `src/components/molecules/DashboardGeneral.js`:

Esto define una función llamada DashboardGeneral, que es un componente funcional de React. Este componente se utiliza para representar la interfaz de usuario de un panel de control en una aplicación web. La función DashboardGeneral retornará una estructura JSX, que define cómo se verá el componente en la interfaz de usuario.
```jsx title="src/components/molecules/DashboardGeneral.js"
function DashboardGeneral() {
    return (
    <Stack>
    <Stack direction="row" >
    <Stack style={{
    marginTop: "1rem",
    marginLeft: "3rem",
    width: "30rem"
    }}>
...)}
```


En React, el componente Stack se usa para organizar y agrupar otros elementos dentro de una pila o columna. En este caso, Stack se utiliza como el contenedor principal para la estructura del panel de control.
```jsx
<Stack> ... </Stack>
```
Se crea otro componente Stack con la propiedad direction establecida en "row" (fila). Esto indica que los elementos dentro de este Stack se organizarán en una fila horizontal, uno al lado del otro.
```jsx
<Stack direction="row" >
```
Se crea un nuevo Stack, que será uno de los elementos en la fila horizontal. Este Stack tiene un estilo personalizado definido en línea utilizando el objeto de estilo de JavaScript. Los estilos incluyen un margen superior (marginTop), un margen izquierdo (marginLeft), y un ancho fijo (width).
```jsx
<Stack style={{
        marginTop: "1rem",
        marginLeft: "3rem",
        width: "30rem"
        }}>
```

## Cards-Components

Esto crea una instancia del componente CardComponent. Se establece una propiedad llamada title en el componente CardComponent y se le asigna el valor "Usuarios En Espera".

```jsx 
<CardComponent title="Usuarios En Espera" content="Usuarios en espera de conversación" count="1" />
```

Similar a la propiedad title, esta línea establece una propiedad llamada content en el componente CardComponent con el valor "Usuarios en espera de conversación". Esta propiedad se utilizará para mostrar el contenido de la tarjeta.
```jsx
content="Usuarios en espera de conversación"
```
Aqui se representa la inclusión de un componente CardComponent que tiene contenido adicional anidado. 
En otras palabras, muestra una tarjeta CardComponent con un título, un contenido y contenido adicional anidado. El contenido adicional incluye un icono (PushPin) y un texto ("General") en una fila horizontal, junto con un número "1" en un formato específico. Esto se utiliza para mostrar información relacionada con la concurrencia de colas en espera en la interfaz de usuario del panel de control.

```jsx
<CardComponent title="Queues en Espera" content="Concurrencia de queues">
        <Stack direction="row">
        <IconText iconName={<PushPin/>} text="General" />
        <Typography variant="h7"
        style={{
        color: "red",
        marginLeft: "15rem", marginTop: "0.5rem", fontSize: "1rem"

        }}>
        1
        </Typography>
        </Stack>
```

#### NOTA: 

Esto crea una instancia del componente IconText, que combina un icono (en este caso, **PushPin**) y un texto (**"General"**). Este componente se utiliza para mostrar un ícono junto a un texto.
```jsx
<IconText iconName={<PushPin/>} text="General" />: 
```

Muestra un CardComponent adicional en el panel de control que muestra información relacionada con "Ventas". La tarjeta incluye un ícono de artículo, el texto "Ventas" y un número "0". El número representa una cantidad o contador asociado a las ventas y se muestra en la interfaz de usuario.
```jsx
<Stack direction="row">
    <IconText iconName={<ArticleIcon/>} text="Ventas" />
    <Typography variant="h7"
    style={{
    color: "darkgray",
    marginLeft: "15.5rem", marginTop: "0.5rem", fontSize: "1rem"
    }}>
    0
    </Typography>
</Stack>
```

Se crea una tarjeta CardComponent que se utiliza en el panel de control para mostrar información sobre asesores en conversación. La tarjeta incluye columnas de información con encabezados de columna, y el texto se muestra en gris oscuro. Esta estructura se utiliza para presentar de manera organizada los datos relacionados con los asesores y su estado de conversación en la interfaz de usuario.

```jsx
<CardComponent title="Asesores" content="Asesores en conversación">
    <Stack direction="row" spacing="2rem">
    <Typography variant="h7"
    sx={{ color: "darkgray" }}>
    Agente
    </Typography>
    <Typography variant="h7"
    sx={{ color: "darkgray" }}>
    Tiempo de asignacion
    </Typography>
    <Typography variant="h7"
    sx={{ color: "darkgray" }}>
    Folio
    </Typography>
    <Typography variant="h7"
    sx={{ color: "darkgray" }}>
    Identificador
    </Typography>
    </Stack>
    </CardComponent>
```

La línea export default DashboardGeneral; se utiliza al final del código del componente DashboardGeneral y tiene el propósito de exportar este componente para que pueda ser utilizado en otros archivos de JavaScript o componentes.

```jsx
export default DashboardGeneral;
```