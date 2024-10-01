---
sidebar_position: 181
---

# Reportes.js

Este código importa los componentes Calendario, CardComponent, ReportesLista, ReportesServicio, y finalmente, el componente OpcionReportes.

## Imports

```js title="src/views/Reportes/Reportes.js"
import Calendario from "../../components/atoms/Calendario";
import CardComponent from "../../components/atoms/CardComponent";
import ReportesLista from "../../components/molecules/ReportesLista";
import ReportesServicio from "../../components/molecules/ReportesServicio";
import OpcionReportes from "../../components/organisms/OpcionesReportes";
```


## Function Reportes

El componente Reportes se encarga de renderizar el componente OpcionReportes como parte de tu aplicación.

```js
function Reportes() {
    return(
      <OpcionReportes/>
    );
}
```

## Export

Finalmente, se exporta el componente Reportes como el componente predeterminado del módulo. Esto permite que otros módulos de la aplicación importen y utilicen este componente como sea necesario.

```js
export default Reportes;
```

