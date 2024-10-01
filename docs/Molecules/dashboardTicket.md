---
sidebar_position: 104
---

# DashboardTickets.js (Molecules)

En el archivo **DashboardTickets.js**, se realizan importaciones de diversos módulos y componentes necesarios para la creación de un panel de control de tickets de los servicios.
Este componente se utiliza para crear una interfaz de usuario que muestra información relacionada con tickets y asesores en una aplicación web.

## Imports

Imports de `src/components/molecules/DashboardTickets.js`:

```jsx title="src/components/molecules/DashboardTickets.js"
import React from 'react';
import CardComponent from '../atoms/CardComponent';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
```

Los imports anteriores tienen la siguiente funcionalidad en el archivo js trabajado:
1. Se importa la biblioteca React para crear componentes de React.
2. Se importa el componente CardComponent desde el directorio '../atoms/CardComponent'. Este componente 3. se utiliza para mostrar tarjetas con información en la interfaz de usuario.
4. Se importa el componente Stack de Material-UI, que se utiliza para organizar elementos en una pila o columna.
5. Se importa el componente Typography de Material-UI para mostrar texto con formato y estilo.

## Function DashboardTickets

Se define la función principal DashboardTickets, que es un componente funcional de React. El componente DashboardTickets retorna una estructura JSX que representa la interfaz de usuario del panel de control.

```jsx
function DashboardTickets() {
    return (
    <Stack>
    <Stack direction="row" >
    <Stack style={{
            marginTop: "1rem",
            marginLeft: "3rem",
            width: "30rem"
                }})}>
```

## Cards Components

Se crean dos tarjetas utilizando el componente CardComponent. Cada tarjeta representa información sobre tickets abiertos y tickets vencidos. Cada tarjeta tiene un título, un contenido y un contador asociado.

```jsx
 <CardComponent title="Tickets Abiertos" content="Número de Tickets Abiertos" count="0" />
                </Stack>

                <Stack style={{
                    marginTop: "1rem",
                    marginLeft: "3rem",
                    width: "30rem"
                }}>
                <CardComponent title="Tickets Vencidos" content="Número de tickets vencidos" count="1" />
                </Stack>
                </Stack>
            <Stack direction="row" >
            <Stack style={{
            marginTop: "1rem",
            marginLeft: "3rem",
            width:"70rem"
            }}>
```

De igual forma se crea una tarjeta adicional utilizando el componente CardComponent. Esta tarjeta muestra información sobre Asesores en conversación. El contenido de esta tarjeta incluye columnas de información, como "Servicio", "Folio", "Queue", "Agente", "Estado del folio", "Tiempo de Resolución", "Motivo" y "Fecha estimada de cierre". Cada columna se representa con un componente Typography.
También se aplican estilos personalizados utilizando el objeto sx en los componentes Typography para controlar el color del texto, el margen superior y el margen izquierdo.

```jsx
<CardComponent title="Asesores" content="Asesores en conversación">
        <Stack direction="row">
        <Typography variant="h7"
        sx={{ color: "darkgray", marginTop: "1rem" }}>
        Servicio
        </Typography>
        <Typography variant="h7"
        sx={{
        color: "darkgray", marginTop: "1rem",
        marginLeft: "2rem"
        }}>
        Folio
        </Typography>

        <Typography variant="h7"
        sx={{
        color: "darkgray", marginTop: "1rem",
        marginLeft: "2rem"
        }}>
        Queue
        </Typography>
        <Typography variant="h7"
        sx={{
        color: "darkgray", marginTop: "1rem",
        marginLeft: "2rem"
        }}>
        Agente
        </Typography>
        <Typography variant="h7"
        sx={{
        color: "darkgray", marginTop: "1rem",
        marginLeft: "2rem"
        }}>
        Estado del folio
        </Typography>
        <Typography variant="h7"
        sx={{
        color: "darkgray", marginTop: "1rem",
        marginLeft: "2rem"
        }}>
        Tiempo de Resolución
        </Typography>
        <Typography variant="h7"
        sx={{
        color: "darkgray", marginTop: "1rem",
        marginLeft: "2rem"
        }}>
        Motivo
        </Typography>
        <Typography variant="h7"
        sx={{
        color: "darkgray", marginTop: "1rem",
        marginLeft: "2rem"
        }}>
        Fecha estimada de cierre
        </Typography>
        </Stack>
        </CardComponent>
```

## Exportación

Se exporta el componente DashboardTickets al final del archivo para que pueda ser utilizado en otros archivos de la aplicación.

```jsx
export default DashboardTickets;
```

En resumen, este componente se utiliza para mostrar información sobre tickets y asesores en una interfaz de usuario organizada y estructurada en forma de tarjetas y columnas. Las tarjetas se utilizan para mostrar estadísticas y detalles relacionados con los tickets y los asesores en la aplicación web.