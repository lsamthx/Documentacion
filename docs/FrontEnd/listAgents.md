---
sidebar_position: 31
---

# ListAgents.js

El componente ListAgents muestra una lista de agentes en una tabla. Cada fila de la tabla tiene un botón de encendido/apagado y celdas adicionales generadas por la función cellComponent. Si no hay datos (data es null o vacío), muestra un mensaje de bienvenida traducido. Utiliza Material-UI para la estructura de la tabla y los componentes de interfaz, y react-i18next para la traducción.

```js
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Switch,
  IconButton,
} from "@mui/material";
import { PowerSettingsNew } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import "../../Traduccion_ES_EN/i18nMiCuenta";

function ListAgents({ data, cellComponent,handleClick }) {

  const { t } = useTranslation();

  return (
    <div>
      {data ? (
        <TableContainer>
          <Table>
            <TableBody>
              {data.map((tableItem, index) => (
                <TableRow
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#F5F5F5" : "white",
                    height: "1rem",
                  }}
                >
                  <TableCell>
                    <IconButton
                      sx={{ color: "#4FC3F7" }}
                      onClick={() => handleClick(tableItem)}
                    >
                      <PowerSettingsNew />
                    </IconButton>
                  </TableCell>
                  {cellComponent(tableItem).map((item, idx) => (
                    <TableCell key={idx}>{item}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>{t("Welcome.text141")}</p>
      )}
    </div>
  );
}

export default ListAgents;
```

## Imports

### React: 

Se importa la biblioteca React para usar la funcionalidad de componentes.

### @mui/material:

**Table**: Componente de Material-UI para crear tablas.
**TableBody**: Componente de Material-UI para el cuerpo de la tabla.
**TableCell**: Componente de Material-UI para las celdas de la tabla.
**TableContainer**: Componente de Material-UI para contener la tabla.
**TableRow**: Componente de Material-UI para las filas de la tabla.
**IconButton**: Componente de Material-UI para crear botones con iconos.

### @material-ui/icons:

**PowerSettingsNew**: Icono de Material-UI que representa un botón de encendido/apagado.

### react-i18next:

**useTranslation**: Hook para usar la funcionalidad de traducción.
**../../Traduccion_ES_EN/i18nMiCuenta**: Importa el archivo de configuración de traducción.

## Definición del componente ListAgents

### Props

**data**: Arreglo de objetos que contiene los datos que se mostrarán en la tabla.
**cellComponent**: Función que toma un objeto de datos y devuelve un arreglo de elementos React que se renderizan en las celdas de la tabla.
**handleClick**: Función que se ejecuta cuando se hace clic en el botón de encendido/apagado (IconButton).

## Uso del hook useTranslation

useTranslation es un hook de react-i18next que permite acceder a la función t para traducir textos según el idioma configurado.

## Estructura del JSX

**Condicional data**:
Si data existe y no está vacío
**TableContainer**: Contenedor para la tabla.
**Table**: Componente de tabla.
**TableBody**: Cuerpo de la tabla.
**data.map**: Itera sobre cada elemento en data.
**TableRow**: Fila de la tabla.
**key=index**: Establece una clave única para cada fila usando el índice.
**style**: Aplica estilos en línea, alternando el color de fondo para cada fila (#F5F5F5 para filas pares, white para impares) y estableciendo la altura de la fila.
**TableCell**: Celda de la tabla.
**IconButton**: Botón con el icono de encendido/apagado.
**sx=color: "#4FC3F7"**: Estilo en línea para el color del botón.
onClick={() => handleClick(tableItem)}: Llama a handleClick con el elemento de datos correspondiente cuando se hace clic.
PowerSettingsNew: Icono de encendido/apagado.
cellComponent(tableItem).map((item, idx) => ( ... )): Itera sobre los elementos devueltos por cellComponent y los renderiza en celdas de la tabla.
TableCell: Celdas de la tabla para los datos adicionales.
Si data no existe o está vacío:
p: Párrafo que muestra un mensaje de bienvenida traducido (t("Welcome.text141")).
