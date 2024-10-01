---
sidebar_position: 136
---

# HomeAgentsCommisions.js

El propósito de HomeAgentsCommisions es renderizar el componente DashboardCommisions. Esto significa que HomeAgentsCommisions actúa como un contenedor o punto de entrada para el componente DashboardCommisions, proporcionando una separación lógica de responsabilidades en la estructura de la aplicación React.

```js 
import DashboardCommisions from "../molecules/DashboardCommisions";

function HomeAgentsCommisions() {
  return (
    <>
      <DashboardCommisions/>
    </>
  );
}

export default HomeAgentsCommisions;
```

## Importaciones

El componente DashboardCommisions se importa desde ../molecules/DashboardCommisions. Esto implica que DashboardCommisions es un componente de nivel inferior que se utiliza en este contexto.

## Función HomeAgentsCommisions

Esta es una función de componente funcional de React (HomeAgentsCommisions).
Retorna un fragmento que contiene el componente DashboardCommisions.

## Exportación

Exporta el componente HomeAgentsCommisions como el componente predeterminado (export default HomeAgentsCommisions;).