---
sidebar_position: 10
---

# CardComponent.js

Este componente CardComponent proporciona una tarjeta con un diseño estructurado que incluye un título, contenido, recuento y la capacidad de incluir contenido secundario. Los estilos del componente se gestionan mediante el uso de estilos definidos en stylesCard.

```js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography, Grid } from '@mui/material';
import stylesCard from '../../styles/CardComponent/stylesCard';

function CardComponent({ title, content, count, children }) {
  return (
  <Card sx={stylesCard.card}>
  <CardContent>

  <Typography variant="h5"
  sx={stylesCard.title}>
  {title}
  </Typography>

  <Typography variant="h7"
  sx={stylesCard.subtitle}>
  {content}
  </Typography>

  <Typography variant="h3"
  sx={stylesCard.count}>
  {count}
  </Typography>

  {children}
  </CardContent>
  </Card>

  );
}

export default CardComponent;
```