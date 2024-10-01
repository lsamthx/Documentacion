---
sidebar_position: 171
---

# GraphReport.js

El componente GraphReport parece ser una vista que muestra un informe gráfico embebido en un iframe

```js
import { Stack } from "@mui/material";


function GraphReport () {

  return (
    <Stack
      spacing={{ xs: 2 }}
      direction="row"
      useFlexGap
      flexWrap="wrap"
      sx={{ margin: '10px', justifyContent: 'center' }}
    >
    <iframe
      style={{
      background: '#F1F5F4',
      borderRadius: '10px',
      boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
      width: '100vw',
      height: '70vh',
      border: 'none'
      }}
      src="https://charts.mongodb.com/charts-wex-qxlpl/public/dashboards/65837673-1ec1-4bcf-8473-cc9130b13dcf">
      </iframe>
    </Stack>
  );
}

export default GraphReport;
```