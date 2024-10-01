---
sidebar_position: 127
---

# Servicios.js (Molecules)

 Este componente muestra información relacionada con servicios, incluyendo clasificaciones y colas. Los datos se obtienen mediante la solicitud de datos utilizando useEffect, y los eventos de los botones se manejan utilizando las funciones handleClick y handleClickAdd. La tabla de colas se personaliza utilizando la función cellRenderer.

## Imports

Imports de `src/components/molecules/Servicios.js`:

```jsx title="src/components/molecules/Servicios.js"
import React, { useState, useEffect } from 'react';
import { Typography } from "@mui/material";
import CardComponent from '../atoms/CardComponent';
import Stack from '@mui/material/Stack';
import ButtonComponent from '../atoms/ButtonComponent';
import useWexClient from '../../hooks/Clients/wexClient,';
import Table from './Table';
```

En los imports anteriores se importan varios componentes y ganchos de bibliotecas como Material-UI y otros módulos personalizados. Algunos de los componentes importados incluyen Typography, CardComponent, Stack, ButtonComponent, Table, y el gancho personalizado useWexClient.

## Function Servicios

Establecemos la estructura inicial del componente Servicios y poder definir las funciones y estados necesarios.

```jsx
function Servicios() { ... }
```

## Consts

Inicializamos funciones y estados necesarios para el componente.
handleClick es una función que se ejecutará cuando se haga clic en un elemento que esté asociado a ella. En este caso, mostrará una alerta con el mensaje "Funciona el evento a".

```jsx
const handleClick = () => {
        alert('Funciona el evento a');
    };
```

handleClickAdd es otra función que se ejecutará cuando se haga clic en un elemento asociado a ella. En este caso, mostrará una alerta con el mensaje "Funciona el evento b".

```jsx
const handleClickAdd = () => {
        alert('Funciona el evento b');
    };
```

Aquí, se utiliza el gancho personalizado useWexClient para obtener acceso a una función llamada getQueues, que probablemente está diseñada para realizar una solicitud de datos relacionados con colas de servicios. Se declara un estado local llamado data y se utiliza useState para inicializarlo con un valor inicial de null.
setData es una función que se utilizará para actualizar el estado data con nuevos datos. Este estado probablemente se usará para almacenar los datos recuperados a través de la función getQueues.

```jsx
const { getQueues } = useWexClient();
const [data, setData] = useState(null);
```

Este fragmento de código se encarga de cargar los datos de las colas de servicios una vez que el componente se monta por primera vez. Los datos recuperados se almacenan en el estado data y, posteriormente, podrán ser utilizados para mostrar información en el componente.
Este bloque de código se ejecuta cuando el componente se monta por primera vez debido al segundo argumento [] en useEffect, lo que significa que se ejecuta solo una vez después del montaje inicial del componente.
La función getQueues se obtiene del gancho useWexClient, para recuperar datos relacionados con colas de servicios.
Una vez que la promesa de getQueues se resuelve, se actualiza el estado local data utilizando la función setData. Los datos recuperados de la respuesta de la solicitud se asignan a data.

```jsx
useEffect(() => {
        getQueues().then((response) => {
            setData(response[0].queue);
        });
    }, []);
```

La variable columnTitles es un array que contiene tres cadenas de texto. Cada cadena representa un título que se utilizará en alguna parte del componente Servicios.

- 'Queue' se utiliza para describir la columna que contiene información sobre las colas de servicios.
- 'String' se usa para describir la columna que contiene cadenas de texto relacionadas con las colas de servicios.
- 'Palabra Clave'se utiliza para describir la columna que contiene palabras clave relacionadas con las colas de servicios.

```jsx
const columnTitles = ['Queue', 'String', 'Palabra Clave'];
```

## Function cellRenderer

Esta función se encarga de renderizar el contenido de las celdas de una tabla en función del título proporcionado, mostrando la información correspondiente de queueItem. Esto permite mostrar datos de diferentes propiedades del objeto en diferentes columnas de la tabla.
La función cellRenderer toma dos parámetros: queueItem y title. Su función es renderizar el contenido de una celda en una tabla o componente similar dentro del componente Servicios
Recibe un objeto queueItem, que contiene información sobre una cola de servicio. El objeto tiene propiedades como name, queue_str y keyword.
Recibe una cadena de texto title, que se utiliza para determinar qué propiedad del objeto queueItem se debe mostrar en la celda.
Además, utiliza una serie de declaraciones condicionales para determinar qué propiedad del objeto queueItem se debe mostrar en la celda. Dependiendo del valor de title, se elige una propiedad diferente del objeto.

```jsx
function cellRenderer(queueItem, title) {
        return (
          <div style={{
            fontSize: '1rem',
            color: 'darkgray',
            textAlign: 'center',
            marginTop: '1.5rem'
          }}>
            {title === 'Queue'
            ? queueItem.name
            : title === 'String'
            ? queueItem.queue_str
            : title === 'Palabra Clave'
            ? queueItem.keyword
            : null
            }
          </div>
        );
      }
```

## CardComponent

Se crea un componente llamado CardComponent con el título "Clasificaciones" y una lista de elementos de clasificación con la opción de eliminar. 

- Se utiliza el componente CardComponent con el título "Clasificaciones". Este componente es una tarjeta o panel que contiene elementos relacionados con las clasificaciones.

- Se utilizan componentes de Typography para mostrar el texto "Clasificación" en la parte superior de la tarjeta. El texto tiene un estilo específico con color, margen izquierdo y margen superior.

- Se utiliza un componente Stack con dirección "column" para organizar los elementos de clasificación en una columna vertical. Dentro de este Stack, se definen varios elementos de clasificación.

- Cada elemento de clasificación se crea dentro de un (div) que contiene un Typography para mostrar el nombre de la clasificación y un enlace ("ELIMINAR") que se parece a un botón de eliminación. Cada elemento de clasificación se muestra centrado y se utiliza el estilo para ajustar su apariencia.

```jsx
<CardComponent title="Clasificaciones">
            <Typography variant="h6"
            sx={{
            color: "black",
            marginLeft: "10rem",
            marginTop: "1rem",
            opacity: "0.7"
            }}>
            Clasificación
            </Typography>
            <Stack direction="column" >
            <div style={{ display: 'flex', alignItems: "center" }}>
            <Typography variant="h6"
            sx={{
            color: "darkgray",
            textAlign: "center",
            marginLeft: "11rem",
            marginTop: "1.5rem"
            }}>
            General
            </Typography>
            <a href='#' style={{
            color: "blue",
            marginLeft: "15rem",
            marginTop: "1rem",
            textDecoration: "none"
            }}>ELIMINAR</a>
            </div>
            <div style={{ display: 'flex', alignItems: "center" }}>
            <Typography variant="h6"
            sx={{
            color: "darkgray",
            textAlign: "center",
            marginLeft: "7rem",
            marginTop: "1.5rem"
            }}>
            Compra durante el chat
            </Typography>
            <a href='#' style={{
            color: "blue",
            marginLeft: "10rem",
            marginTop: "1rem",
            textDecoration: "none"
            }}>ELIMINAR</a>
            </div>
            <div style={{ display: 'flex', alignItems: "center" }}>
            <Typography variant="h6"
            sx={{
            color: "darkgray",
            textAlign: "center",
            marginLeft: "5rem",
            marginTop: "1.5rem"
            }}>
            Se compromete a realizar compra
            </Typography>
            <a href='#' style={{
            color: "blue",
            marginLeft: "6rem",
            marginTop: "1rem",
            textDecoration: "none"
            }}>ELIMINAR</a>
            </div>
            <div style={{ display: 'flex', alignItems: "center" }}>
            <Typography variant="h6"
            sx={{
            color: "darkgray",
            textAlign: "center",
            marginLeft: "5rem",
            marginTop: "1.5rem"
            }}>
            Recibe la información/Sin compra
            </Typography>
            <a href='#' style={{
            color: "blue",
            marginLeft: "6rem",
            marginTop: "1rem",
            textDecoration: "none"
            }}>ELIMINAR</a>
            </div>
            <div style={{ display: 'flex', alignItems: "center" }}>
            <Typography variant="h6"
            sx={{
            color: "darkgray",
            textAlign: "center",
            marginLeft: "5rem",
            marginTop: "1.5rem"
            }}>
            Mandar What´s más tarde/Agenda
            </Typography>
            <a href='#' style={{
            color: "blue",
            marginLeft: "6rem",
            marginTop: "1rem",
            textDecoration: "none"
            }}>ELIMINAR</a>
            </div>

            </Stack>
</CardComponent>
```

Este fragmento de código crea una sección de la interfaz de usuario que muestra información sobre las colas, utilizando el componente CardComponent para organizar y presentar los datos de manera estructurada en forma de una tabla.

- Se utiliza el componente CardComponent con el título "Queues".

- Dentro del CardComponent, se utiliza un Stack con dirección "row" y un espaciado horizontal de 5 rem (unidades relativas de longitud). Esto hace que los elementos dentro del Stack se alinearán horizontalmente con un espacio entre ellos de 5 rem.

- Se crea un (div) dentro del Stack, y dentro de ese (div), se coloca un componente Table con algunos atributos. La tabla (Table) se carga con datos (data), títulos de columna (columnTitles) y un componente de celda personalizado (cellComponent).

- La tabla utiliza los datos data, los títulos de columna columnTitles y el componente cellRenderer personalizado para renderizar el contenido de la tabla. La función cellRenderer se utiliza para definir cómo se representarán los datos en cada celda de la tabla.

```jsx
<CardComponent title="Queues">
        <Stack direction="row" spacing="5rem">
        <div>
        <Table data={data} columnTitles={columnTitles} cellComponent={cellRenderer} />
        </div>
        </Stack>


</CardComponent>
```

## ButtonComponents

Este botón "Agregar" al dar clic en él, activará la función handleClick, que desencadenará una alerta en la interfaz de usuario.

```jsx
<ButtonComponent label="Agregar" onClick={handleClick} />
```

## Export

Permite exportar el componente para ser utilizado en otros.

```jsx
export default Servicios;
```