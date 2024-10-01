---
sidebar_position: 20
---

# Downloader.js

Este componente CircularProgressBar muestra un indicador de progreso circular. Puedes ajustar el tamaño cambiando el valor de la propiedad size según tus necesidades. Este componente es útil para indicar visualmente que se está realizando una operación en segundo plano o que se está cargando algún contenido.

```js
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const CircularProgressBar = () => {
  return (
  <div>
  <CircularProgress size={100} />
  </div>
  );
};

export default CircularProgressBar;
```