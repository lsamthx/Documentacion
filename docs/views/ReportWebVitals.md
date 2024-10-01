---
sidebar_position: 183
---

# ReportWebVitals.js

Este código importa dinámicamente las funciones de web-vitals (una biblioteca que proporciona herramientas para medir métricas de rendimiento web importantes) y luego las ejecuta con la función onPerfEntry que se pasa como argumento a reportWebVitals. Cada una de estas funciones (getCLS, getFID, getFCP, getLCP, getTTFB) registra sus métricas respectivas cuando se produce un evento de rendimiento.

```js
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
```