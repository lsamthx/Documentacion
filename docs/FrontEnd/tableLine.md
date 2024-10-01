---
sidebar_position: 42
---

# TableLine.js

El componente TableLine renderiza una tabla usando Material UI. Permite mostrar columnas de edición y eliminación opcionales, maneja eventos de clic en estas columnas y traduce los textos usando react-i18next. Los datos de la tabla se pasan como props y se valida que estos sean un array. Si no lo son, se muestra un mensaje de error traducido. La tabla alterna los colores de las filas para mejorar la legibilidad.

```js
import { DeleteOutlineRounded } from "@mui/icons-material";
import React from "react";
import {
  TableCell as MuiTableCell,
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  Button,
} from "@mui/material";
import stylesTable from "../../styles/Molecules/Table/table";
import { useTranslation } from "react-i18next";
import "../../Traduccion_ES_EN/i18nMiCuenta";



function TableLine({
  data,
  columnTitles,
  cellComponent,
  showEditColumn,
  showDeleteColumn,
  showDeleteButton,
  handleEditClick,
  handleDeleteClick,
}) 

{
  //#region Traduccion
  const { t } = useTranslation();


  if (!Array.isArray(data)) {
    return <p>{t("Welcome.text61")}</p>;
    }
    

  return (
    <div>
      {data ? (
        <TableContainer>
          <MuiTable style={stylesTable.table}>
            <TableHead>
              <TableRow>
                {columnTitles.map((title, index) => (
                  <MuiTableCell key={index} style={stylesTable.title}>
                    {title}
                  </MuiTableCell>
                ))}
                {showEditColumn && (
                  <MuiTableCell style={stylesTable.title}>
                    {t("Welcome.text124")}
                  </MuiTableCell>
                )}
                {showDeleteColumn && (
                  <MuiTableCell style={stylesTable.title}>
                    {t("Welcome.text119")}
                  </MuiTableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((tableItem, index) => (
                <TableRow  key={index}
                style={{
                  backgroundColor:
                    index % 2 === 0 ? "#ECECEC" : "white",
                }}>
                  {columnTitles.map((title, columnIndex) => (
                    <MuiTableCell style={stylesTable.column} key={columnIndex}>
                      {cellComponent(tableItem, title)}
                    </MuiTableCell>
                  ))}
                   {showEditColumn && (
                  <MuiTableCell style={{ textAlign: "center" }}>
                    <a
                      style={stylesTable.a}
                      href="#"
                      onClick={(e) => handleEditClick(tableItem, e)}
                    >
                      {t("Welcome.text124")}
                    </a>
                  </MuiTableCell>
                )}
                  {showDeleteColumn && (
                    <MuiTableCell style={{ textAlign: "center" }}>
                       {showDeleteButton ? (
                      <Button
                        style={{
                          borderRadius: "20px",
                          backgroundColor: "red",
                          color: "white",
                          padding: "8px 16px",
                        }}
                        onClick={() => handleDeleteClick(tableItem)}
                      >
                        {t("Welcome.text140")}
                      </Button>
                       ) : (
                        <DeleteOutlineRounded
                          style={stylesTable.icon}
                          onClick={() => handleDeleteClick(tableItem)}
                        />
                      )}
                    </MuiTableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </MuiTable>
        </TableContainer>
      ) : (
        <p>{t("Welcome.text141")}</p>
      )}
    </div>
  );
}

export default TableLine;
```

## Imports

**DeleteOutlineRounded**: Icono de Material UI para el botón de eliminar.
**React**: Librería para crear componentes de interfaz de usuario.
**@mui/material**: Componentes de Material UI para crear la tabla y otros elementos de interfaz.
**stylesTable**: Importación de estilos personalizados para la tabla desde un archivo de estilos.
**useTranslation**: Hook de react-i18next para la internacionalización.
**i18nMiCuenta**: Archivo de configuración para la internacionalización.

## Componente TableLine

El componente TableLine recibe varias props que configuran su comportamiento:

**data**: Datos a mostrar en la tabla.
**columnTitles**: Títulos de las columnas.
**cellComponent**: Componente para renderizar el contenido de las celdas.
**showEditColumn**: Booleano que indica si se debe mostrar la columna de edición.
**showDeleteColumn**: Booleano que indica si se debe mostrar la columna de eliminación.
**showDeleteButton**: Booleano que indica si se debe mostrar un botón de eliminación.
**handleEditClick**: Función para manejar el evento de clic en el botón de edición.
**handleDeleteClick**: Función para manejar el evento de clic en el botón de eliminación.

## Traducción

Se utiliza el hook useTranslation de react-i18next para manejar la internacionalización.

## Validación de los datos

Si data no es un array, se muestra un mensaje de error.

## Renderizado de la tabla

**TableContainer**: Contenedor de la tabla.
**MuiTable**: Componente de tabla de Material UI.
**TableHead**: Cabezera de la tabla, donde se muestran los títulos de las columnas.
**TableRow**: Fila de la tabla.
**MuiTableCell**: Celda de la tabla.
**TableBody**: Cuerpo de la tabla, donde se muestran los datos.
**Condiciones para mostrar las columnas de edición y eliminación**: Se muestran las columnas de edición y eliminación si los props showEditColumn y showDeleteColumn son verdaderos.
**Manejo de eventos de clic**: Se llaman las funciones handleEditClick y handleDeleteClick al hacer clic en los botones de edición y eliminación, respectivamente.
**Estilos**: Se aplican estilos personalizados desde stylesTable.

