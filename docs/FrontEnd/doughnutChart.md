---
sidebar_position: 18
---

# DoughnutChart.js

El componente DoughnutChart muestra un gráfico de dona utilizando react-chartjs-2 y chart.js. Se adapta automáticamente al redimensionar la ventana actualizando el estado chartKey para forzar un re-render. Las opciones del gráfico y los datos son configurables a través de las props data y titleBarChar.

```js
import { useEffect, useState } from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ data = {}, titleBarChar = "" }) {
  const [chartKey, setChartKey] = useState(0);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: titleBarChar,
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setChartKey(prevKey => prevKey - 1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {data && data.datasets ? (<Doughnut key={chartKey} style={{ width: '100%', height: '190px', margin: 'auto' }} options={options} data={data} />) : (<></>)}
    </>
  );
}

export default DoughnutChart;
```

## Imports

### React Hooks:

**useEffect**: Hook de React que permite realizar efectos secundarios en componentes funcionales.
**useState**: Hook de React que permite manejar el estado en componentes funcionales.

### react-chartjs-2:

**Doughnut**: Componente para renderizar un gráfico de dona (doughnut) usando chart.js.

### chart.js:

**ChartJS**: La clase principal de chart.js.
**ArcElement, Tooltip, Legend**: Elementos de chart.js que se utilizan para gráficos de dona, mostrar tooltips y leyendas respectivamente.
**ChartJS.register(...)**: Registra los elementos necesarios (ArcElement, Tooltip, Legend) con chart.js.

## Definición del componente DoughnutChart

### Props:

**data**: Los datos para el gráfico de dona, con un valor por defecto de un objeto vacío.
**titleBarChar**: El título del gráfico, con un valor por defecto de una cadena vacía.

### Estado (useState):

**chartKey**: Un estado para forzar la re-renderización del gráfico. Inicializado en 0.
**setChartKey**: Función para actualizar chartKey.

### Opciones del gráfico (options):

**responsive**: Hace que el gráfico sea responsivo.
**plugins**: Configura los plugins de chart.js.
**legend**: Posiciona la leyenda en la parte superior.
**title**: Muestra el título del gráfico usando el valor de titleBarChar.

## Efecto para el redimensionamiento de la ventana

**useEffect**: Configura un efecto que se ejecuta al montar el componente y se limpia al desmontar.
**handleResize**: Función que se ejecuta al redimensionar la ventana, actualizando chartKey para forzar un re-render del gráfico.
**window.addEventListener('resize', handleResize)**: Añade un listener para el evento de redimensionamiento de la ventana.
**return () window.removeEventListener('resize', handleResize)**: Limpia el listener de redimensionamiento cuando el componente se desmonta.

## Renderización del componente

### Condición para renderizar el gráfico

Si data tiene datasets (data && data.datasets), renderiza el gráfico de dona (Doughnut).
Si data no tiene datasets, no renderiza nada.

### Doughnut:

**key=chartKey**: Usa chartKey como clave para forzar la re-renderización cuando chartKey cambia.
**style**: Aplica estilos CSS en línea para ajustar el tamaño y el margen del gráfico.
**options**: Pasa las opciones configuradas (options) al gráfico.
**data**: Pasa los datos (data) al gráfico.