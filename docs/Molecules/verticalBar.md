---
sidebar_position: 130
---

# VerticalBar.js

El componente VerticalBar es un componente React reutilizable que muestra un gráfico de barras vertical utilizando react-chartjs-2. Está configurado con opciones para la respuesta, la posición de la leyenda y el título, mientras que los datos para el gráfico se generan dinámicamente usando faker.

```js
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Percepción emocional',
    },
  },
};

const labels = ['Muy satisfecho', 'Satisfecho', 'Normal', 'No satisfecho', 'Nada satisfecho'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Muy satisfecho',
      data: labels.map(() => faker.datatype.number({ min: 10, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Satisfecho',
      data: labels.map(() => faker.datatype.number({ min: 10, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Normal',
      data: labels.map(() => faker.datatype.number({ min: 10, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'No satisfecho',
      data: labels.map(() => faker.datatype.number({ min: 10, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },

    {
      label: 'Nada satisfecho',
      data: labels.map(() => faker.datatype.number({ min: 10, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function VerticalBar() {
  return <Bar style={{ width: '100%', margin: 'auto' }} options={options} data={data} />;
}
```

## Imports

Importa los componentes necesarios de Chart.js (ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend) y react-chartjs-2.
Importa faker para generar datos aleatorios.

## Registro de Chart.js

Registra los componentes necesarios de Chart.js para usar en la configuración del gráfico.

## Opciones del gráfico (options)

Configura las opciones del gráfico, incluyendo la capacidad de respuesta (responsive), la posición de la leyenda (top) y el título.

## Configuración de los datos (data)

Define las labels para las categorías del eje x.

Establece el objeto data con labels y datasets: Cada conjunto de datos representa una percepción emocional diferente (Muy satisfecho, Satisfecho, etc.).
Utiliza faker para generar puntos de datos aleatorios dentro de rangos especificados.
Especifica los colores de fondo para cada conjunto de datos.

## Componente React (VerticalBar)

Define un componente funcional React llamado VerticalBar.
Utiliza el componente Bar de react-chartjs-2 para renderizar el gráfico de barras.
Aplica las props options y data para configurar el gráfico.
