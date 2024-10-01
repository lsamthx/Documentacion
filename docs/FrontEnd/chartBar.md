---
sidebar_position: 11
---

# ChartBar.js

Este componente CharBarComponent utiliza react-chartjs-2 para renderizar un gráfico de barras con opciones de configuración. Puedes personalizar las opciones y agregar lógica adicional en el bloque useEffect.

```js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function CharBarComponent(props) {
  const { dataBarChar = {}, titleBarChar = "" } = props;
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

  }, [dataBarChar]);

  return (
  <>
  {dataBarChar.datasets ? (
  <Bar options={options} data={dataBarChar} />
  ) : (
  <></>
  )}
  </>
  );
}

export default CharBarComponent;
```