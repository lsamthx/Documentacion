---
sidebar_position: 169
---

# Dashboard.js

El componente Dashboard actúa como un punto de entrada o contenedor que muestra el contenido del componente OpcionDashboard

## Imports

```js title="src/views/OptionDashboard/Dashboard.js"
import OpcionDashboard from "../../components/organisms/OpcionDashboard";
```

Se importa el componente OpcionDashboard desde la ubicación "../../components/organisms/OpcionDashboard".

## Function Dashboard

Se define una función llamada Dashboard. Esta función representa un componente funcional de React. También en el cuerpo de la función Dashboard, se retorna el componente OpcionDashboard, esto significa que cuando se renderice el componente Dashboard, mostrará el contenido del componente OpcionDashboard.

```js
function Dashboard() {
    return(
        <OpcionDashboard/>
    );
}
```

## Export

Finalmente, se exporta el componente Dashboard como el componente predeterminado del módulo. Esto permite que otros módulos de la aplicación importen y utilicen este componente como sea necesario.

```js
export default Dashboard;
```

