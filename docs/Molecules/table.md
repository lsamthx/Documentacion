---
sidebar_position: 128
---

# Table.js (Molecules)

Este componente de tabla es flexible y se puede personalizar fácilmente para mostrar datos tabulares con opciones para editar y eliminar filas. Puede utilizarse en diversos contextos donde sea necesario visualizar y manipular datos en forma de tabla.

```js
import { DeleteOutlineRounded } from "@mui/icons-material";
import React from "react";

function Table({
  data,
  columnTitles,
  cellComponent,
  showEditColumn,
  showDeleteColumn,
  handleEditClick,
  handleDeleteClick,
  tableItem,
}) {
  return (
    <div>
    {data ? (
    <table style={{ borderSpacing: "15px", width: "100%" }}>
    <thead>
    <tr>
    {columnTitles.map((title, index) => (
    <th
    key={index}
    style={{
    fontSize: "1.5rem",
    color: "#4C4C4C",
    marginTop: "1rem",
    opacity: "0.7",
    }}
    >

    {title}
    </th>
    ))}
    {showEditColumn && (
    <th
    style={{
    fontSize: "1.5rem",
    color: "#4C4C4C",
    marginTop: "1rem",
    opacity: "0.7",
    }}

    >Editar</th>
    )}
    {showDeleteColumn && ( 
    <th
    style={{
    fontSize: "1.5rem",
    color: "#4C4C4C",
    marginTop: "1rem",
    opacity: "0.7",
    }}
    >Eliminar</th>
    )}
    </tr>
    </thead>
    
    <tbody>
    {data.map((tableItem, index) => (
    <tr key={index}>
    {columnTitles.map((title, columnIndex) => (
    <td
    style={{
    fontSize: "1rem",
    color: "darkgray",
    textAlign: "center",
    marginTop: "1.5rem",
    }}
    key={columnIndex}
    >
    {cellComponent(tableItem, title)}
    </td>
    ))}

    {showEditColumn && (
    <td>
    <a
    style={{
    color: "#9C27B0",
    fontSize: "1rem",
    marginTop: "20px",
    marginLeft: "1.5rem",
    opacity: "0.7",
    textDecoration: "none",
    display: "inline-block",
    }}
      
    href="#"
    onClick={(e) => handleEditClick(tableItem, e)}
    >
    Editar
    </a>
    </td>
    )}
    {showDeleteColumn && (
    <td>
    <DeleteOutlineRounded
    style={{
    color: "#E91E63",
    fontSize: "1.5rem",
    cursor: "pointer",
    marginTop: "20px",
    marginLeft: "1.5rem",
    opacity: "0.7",
    }}
     
    onClick={() => handleDeleteClick(tableItem)}
    />
    </td>
    )}
    </tr>
    ))}
    </tbody>
    </table>
    ) : (
    <p>Cargando datos...</p>
    )}
    </div>
  );
}

export default Table;
```

## Propiedades

- data: Un array de objetos que contiene los datos a mostrar en la tabla.
- columnTitles: Un array de strings que representa los títulos de las columnas de la tabla.
- cellComponent: Una función que se ejecuta para cada celda de la tabla. Recibe el objeto de datos y el título de la columna como argumentos y devuelve el contenido de la celda.
- showEditColumn: Un booleano que determina si se debe mostrar la columna de "Editar".
- showDeleteColumn: Un booleano que determina si se debe mostrar la columna de "Eliminar".
- handleEditClick: Una función que se ejecuta al hacer clic en el enlace de "Editar". Recibe el objeto de datos como argumento.
- handleDeleteClick: Una función que se ejecuta al hacer clic en el icono de "Eliminar". Recibe el objeto de datos como argumento.
- tableItem: Un objeto que se utiliza para definir el contenido de las celdas de la fila actual.

## Estructura del Componente

- Se utiliza un elemento table con un estilo para establecer el espaciado entre las celdas y el ancho del 100%.
- El encabezado de la tabla (thead) contiene una fila (tr) con los títulos de las columnas.
- El cuerpo de la tabla (tbody) contiene una fila para cada objeto en data.

## Renderización del Encabezado

- Se mapean los títulos de las columnas en la fila del encabezado.
- Si showEditColumn es true, se agrega una columna adicional para "Editar".
- Si showDeleteColumn es true, se agrega una columna adicional para "Eliminar".

## Renderización de Filas

- Se mapea cada objeto en data en una fila de la tabla.
- Para cada fila, se mapean los valores de las celdas utilizando la función cellComponent y se colocan en las celdas correspondientes.
- Si showEditColumn es true, se agrega una celda con un enlace para "Editar".
- Si showDeleteColumn es true, se agrega una celda con un ícono de "Eliminar" representado por DeleteOutlineRounded.

## Estilos

- Se aplican estilos en línea para ajustar el tamaño del texto, el color y la apariencia de las celdas y los elementos de "Editar" y "Eliminar".
- Los estilos utilizan propiedades como fontSize, color, marginTop, marginLeft, opacity, textDecoration, y cursor.

## Manejo de Eventos

- La función handleEditClick se ejecuta al hacer clic en el enlace de "Editar".
- La función handleDeleteClick se ejecuta al hacer clic en el ícono de "Eliminar".

## Carga de Datos

Si no hay datos (data es null o undefined), se muestra un mensaje indicando "Cargando datos...".