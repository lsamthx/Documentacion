---
sidebar_position: 22
---

# GlobalTable.js

 Este componente GlobalTable proporciona una tabla básica con celdas que contienen títulos y texto. Los estilos pueden personalizarse mediante el objeto stylesTable. Asegúrate de proporcionar correctamente la estructura de datos (data) para que la tabla se genere correctamente.

```js
import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import stylesTable from '../../styles/GlobalTable/globalTable';

const GlobalTable = ({ data }) => {
  return (
    <div style={stylesTable.divTable}>
    <TableContainer component={Paper} style={{ border: `1px solid #F2F2F2`, }}>
    <Table>
    <TableBody>
    {data.map((column, columnIndex) => (
    <TableRow key={columnIndex}>
    <TableCell style={{ borderBottom: `1px solid #F2F2F2` }}>
    {column.map((cell, cellIndex) => (
    <div key={cellIndex}>
    <Typography style={stylesTable.cellTitle}>
    {cell.title}
    </Typography>
    <Typography sx={stylesTable.cellText}>{cell.text}</Typography>
    </div>
    ))}
    </TableCell>
    </TableRow>
    ))}
    </TableBody>
    </Table>
    </TableContainer>
    </div>
  );
};

export default GlobalTable;
```