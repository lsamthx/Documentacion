---
sidebar_position: 107
---

# DownloadComponent.js

El componente DownloadComponent permite descargar datos en formato Excel. Procesa los datos recibidos a través de props, los convierte en un formato adecuado para Excel, y proporciona una interfaz de usuario para descargar el archivo. Utiliza varias librerías para manejar la creación y descarga del archivo Excel.

```js
import { IconButton, Stack, Tooltip } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { useEffect, useState } from "react";

function DownloadComponent ({
  data,
  itemsExcel = [],
  titlesExcel = [],
  messageDefault = 'Las fechas seleccionadas no tienen información.'
}) {
  const wb = XLSX.utils.book_new();
  const [dataExcel, setDataExcel] = useState([]);
  let titleExcel = [
    
  ]
  wb.Props = {
    Title: "SheetJS Wex",
    Subject: "Reporte",
    Author: "Wex",
    CreatedDate: new Date(2017,12,19)
  };

  useEffect(() => {
    getDataForDownload(data);
  }, [data]);

  const downloadExcel = () => {
    if (dataExcel.length > 0) {
      wb.SheetNames.push("Wex Sheet");
      const data = [ ...titlesExcel, ...dataExcel ]
      const ws = XLSX.utils.aoa_to_sheet(data);
      wb.Sheets["Wex Sheet"] = ws;
      const wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
      saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'Reporte.xlsx');
    }
    else {
      alert(messageDefault)
    }
  };

  const s2ab = (s) => {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  };

  const getDataForDownload = (array = []) => {
    const response = array.map((item, index) => {
      const itemResponse = itemsExcel.map(itemE => {
        return item[itemE]
      });
      return itemResponse;
    })

    setDataExcel(response);
  };

  const getStatusType = (status = '') => {
    switch (status) {
      case 0:
        return 'No Atendido';
      case 1:
        return 'El cliente colgo';
      case 4:
        return 'Finalizada';
      default:
        return 'Pila de espera';
    }
  };

  return (
    <Stack
      sx={{
        margin: '0 20px',
        float: 'inline-end',
        cursor: 'pointer'
      }}>
        <Tooltip title="Descargar Excel.">
          <IconButton
            onClick={() => downloadExcel()}
          >
            <DownloadIcon />
          </IconButton>
        </Tooltip>
    </Stack>
  );
}

export default DownloadComponent;
```

## Imports

**IconButton, Stack, y Tooltip** son componentes de Material-UI para la interfaz de usuario.
**DownloadIcon** es un icono de Material-UI.
**XLSX** es una librería para crear y manipular archivos Excel.
**saveAs** es una función de file-saver para guardar archivos en el cliente.
**useEffect** y **useState** son hooks de React para manejar efectos secundarios y estado.

## Declaración del Componente

**DownloadComponent** es una función que recibe data, itemsExcel, titlesExcel, y messageDefault como props.
**wb** es un nuevo libro de trabajo de Excel.
**dataExcel** es el estado que almacena los datos procesados para el Excel.
**wb.Props** define propiedades del libro de Excel.

### useEffect para Procesar Datos

Este useEffect se ejecuta cuando el componente se monta o cuando data cambia.
Llama a getDataForDownload para procesar los datos.

### Función para Descargar Excel

downloadExcel crea una hoja de Excel y la descarga si dataExcel tiene datos.
Si no hay datos, muestra un mensaje de alerta.

### Función para Convertir a ArrayBuffer

s2ab convierte una cadena en un ArrayBuffer necesario para guardar el archivo Excel.

### Función para Procesar Datos

**getDataForDownload** procesa el array de datos para extraer solo las propiedades necesarias según itemsExcel.
Actualiza el estado dataExcel con los datos procesados

### Función para Obtener el Estado de un Tipo

**getStatusType** convierte un código de estado en una cadena descriptiva.

### Renderización del Componente

El componente renderiza un Stack con un Tooltip y un IconButton.
Al hacer clic en el botón, se llama a downloadExcel para descargar el archivo Excel.