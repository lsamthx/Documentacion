---
sidebar_position: 19
---

---
sidebar_position: 39
---

# DoughnutExample.js

El componente DoughnutExample muestra un gráfico de dona utilizando react-chartjs-2 y chart.js. El gráfico es responsivo y tiene una leyenda en la parte superior, así como un título "Canales". Los datos del gráfico representan votos para diferentes canales (Web, Email, ChatBot, Call - Center) con colores específicos para cada porción.

```js
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
  responsive: true,
  plugins: {
      legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Canales",
    },
  },
};
export const data = {
  labels: ['Web', 'Email', 'ChatBot', 'Call - Center'],
  
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function DoughnutExample() {
  return <Doughnut style={{ width: '100%', margin: 'auto' }} options={options} data={data} />;
}
```

## Imports

**React**: Se importa la biblioteca React para usar la funcionalidad de componentes.

### chart.js:

**ChartJS**: La clase principal de chart.js.
**ArcElement, Tooltip, Legend**: Elementos de chart.js que se utilizan para gráficos de dona, mostrar tooltips y leyendas respectivamente.

### react-chartjs-2:

**Doughnut**: Componente para renderizar un gráfico de dona usando chart.js.

## Registro de elementos en chart.js

Esto registra los elementos necesarios (ArcElement, Tooltip, Legend) con chart.js.

## Configuración de opciones del gráfico

**responsive**: Hace que el gráfico sea responsivo.
**plugins**: Configura los plugins de chart.js.
**legend**: Posiciona la leyenda en la parte superior.
**title**: Muestra el título del gráfico con el texto "Canales"

## Configuración de los datos del gráfico

**labels**: Etiquetas para cada porción del gráfico de dona.
['Web', 'Email', 'ChatBot', 'Call - Center']
**datasets**: Conjunto de datos para el gráfico.
**label**: Etiqueta para el conjunto de datos (# of Votes).
**data**: Datos para cada etiqueta ([12, 19, 3, 5, 2]).
**backgroundColor**: Colores de fondo para cada porción del gráfico, con opacidad de 0.2.
**borderColor**: Colores de borde para cada porción del gráfico, con opacidad de 1.
**borderWidth**: Ancho del borde de cada porción (1).

## Definición del componente DoughnutExample

### Doughnut:

**style=width: '100%', margin: 'auto'**: Aplica estilos CSS en línea para ajustar el ancho al 100% y centrar el gráfico horizontalmente.
**options=options**: Pasa las opciones configuradas (options) al gráfico.
**data=data**: Pasa los datos configurados (data) al gráfico.

### Exportación del componente

Esto exporta el componente DoughnutExample para que pueda ser importado y utilizado en otros archivos.
