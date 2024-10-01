---
sidebar_position: 168
---

# CostReport.js

Este componente proporciona una vista detallada y resumida de los costos de llamadas, permitiendo al usuario ver y descargar los datos fácilmente.

```js
import { useEffect, useState } from "react";
import CircularProgressBar from "../../../components/atoms/Downloader";
import stylesLoader from "./../../../styles/Molecules/Loader/Loader";
import CardComponent from "../../../components/atoms/CardComponent";
import DownloadComponent from "../../../components/molecules/DownloadComponent";
import {
  Stack,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useReports } from "../../../hooks/useReports";

function CostReport(props) {
  const { t } = useTranslation();
  const { reportConsume, costConsumeDetails } = useReports();
  const { startDateProp = "", endDateProp = "", idService = "" } = props;
  const [loader, setLoader] = useState();
  const [totalCost, setTotalCost] = useState({});
  const [dataExcel, setDataExcel] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [labelsReport, setLabelsReport] = useState([]);
  const startSlice = page * rowsPerPage;
  const endSlice = startSlice + rowsPerPage;
  const paginatedData = dataExcel.slice(startSlice, endSlice) || [];
  const startDateFormateada = formatearFecha(startDateProp);
  const endDateFormateada = formatearFecha(endDateProp);

  const [titlesExcel] = useState([
    [
      "Llamada Realizada",
      "Llamada finalizada",
      "Duración en minutos",
      "Costo",
    ],
  ]);

  const [itemsExcel] = useState([
    "createdAt",
    "closeAt",
    "callDurationRoundedInMinutes",
    "cost",
  ]);

  function formatearFecha(fechaObj) {
    if (fechaObj && fechaObj instanceof Date) {
      const year = fechaObj.getFullYear();
      const month = ("0" + (fechaObj.getMonth() + 1)).slice(-2);
      const day = ("0" + fechaObj.getDate()).slice(-2);

      const fechaFormateada = `${year}-${month}-${day}`;

      return fechaFormateada;
    } else {
      return null;
    }
  }

  useEffect(() => {
    if (startDateProp !== "" && endDateProp !== "" && idService !== "") {
      clearData();
      getReportTotalCost();
      getReportDetail();
    }
  }, []);

  useEffect(() => {
    clearData();
    getReportTotalCost();
    getReportDetail();
  }, [startDateProp, endDateProp, idService]);

  const clearData = () => {
    setTotalCost({});
    setDataExcel([]);
  };

  const getReportDetail = async () => {
    try {
      setLoader(true);
      const response = await costConsumeDetails(
        startDateFormateada,
        endDateFormateada,
        idService
      );
      setRowsPerPage(response?.data.length < 10 ? 0 : 10)
      setDataExcel(response?.data || []);
      setLoader(false);
    } catch (err) {
      console.log("error: ", err);
      setLoader(false);
    }
  }

  const getReportTotalCost = async () => {
    try {
      const response = await reportConsume(
        startDateFormateada,
        endDateFormateada,
        idService
      );

      setTotalCost(response || {});
      
    } catch (err) {
      console.log("error: ", err);
      setLoader(false);
    }
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Stack direction="column" sx={{ margin: "auto" }}>
      {loader ? (
        <div style={{ ...stylesLoader.containerLoader }}>
          <CircularProgressBar />
        </div>
      ) : (
        <>
          <Stack sx={{ margin: "10px" }}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{ marginBottom: '10px', justifyContent:"space-between" }}
            >
              <Stack sx={{width:"32%",textAlign:"center"}}>
                <CardComponent fontSize="2rem" fontSizeCount="1.8rem" title="Total llamadas" count={(totalCost?.totalCalls ? totalCost?.totalCalls : 0) || '0'} />
              </Stack>
              <Stack sx={{width:"32%",textAlign:"center"}}>
                 <CardComponent fontSize="2rem" fontSizeCount="1.8rem" title="Total minutos" count={(totalCost?.totalMinutes ? totalCost?.totalMinutes : 0) || '0'} />
              </Stack>
              <Stack sx={{width:"32%",height:"100%",textAlign:"center",fontSize:"10px"}}>
              <CardComponent sxCard={{height:"100%"}} marginTop="1rem" fontSize="2rem" fontSizeCount="1.8rem" title="Costo total" count={(totalCost?.finalCost ? totalCost?.finalCost : 0).toFixed(2) + " USD" || '0'} />
              </Stack>
            </Stack>
            <CardComponent>
              <DownloadComponent
                data={dataExcel}
                itemsExcel={itemsExcel}
                titlesExcel={titlesExcel}
              />

              <TableHead>
                <TableRow>
                  <TableCell align="center">Llamada Realizada</TableCell>
                  <TableCell align="center">Llamada finalizada</TableCell>
                  <TableCell align="center">Duración en segundos</TableCell>
                  <TableCell align="center">Costo</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {!dataExcel ||
                  (dataExcel.length <= 0 && (
                    <TableCell align="center" colSpan={4}>
                      {t("Welcome.text90")}
                    </TableCell>
                  ))}
                  {paginatedData.map((item, index) => {
                    return (
                      <TableRow
                        key={index}
                        style={{
                          backgroundColor: index % 2 === 0 ? "#ECECEC" : "white",
                        }}
                      >
                        <TableCell align="center">{item.createdAt}</TableCell>
                        <TableCell align="center">{item.closeAt}</TableCell>
                        <TableCell align="center">{item.callDurationRoundedInMinutes}</TableCell>
                        <TableCell align="center">{` ${item.cost}`}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>

              <TablePagination
                sx={{ marginTop: "2rem" }}
                component="div"
                count={dataExcel ? dataExcel.length : 0}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage={t("Welcome.text89")}
              />
            </CardComponent>
          </Stack>
        </>
      )}
    </Stack>
  );
}

export default CostReport;
```

## Imports

**React Hooks**: useEffect y useState son hooks de React para manejar efectos secundarios y el estado del componente.
**Componentes personalizados**: CircularProgressBar, CardComponent, y DownloadComponent son componentes personalizados importados desde diferentes rutas.
**Material-UI**: Se importan componentes de Material-UI como Stack, TableBody, TableCell, TableHead, TablePagination, y TableRow para la estructura y el diseño del componente.
**i18next**: useTranslation es un hook para la traducción de textos.
**Hooks personalizados**: useReports es un hook personalizado para manejar la lógica de obtención de datos.

## Definición del componente CostReport

### Hooks y Estado

**useTranslation** se utiliza para las traducciones.
**useReports** es un hook personalizado que proporciona las funciones reportConsume y costConsumeDetails.
**useState** se utiliza para manejar el estado local:
**loader** para mostrar una barra de progreso mientras se cargan los datos.
**totalCost** para almacenar el costo total.
**dataExcel** para almacenar los datos a mostrar en la tabla y descargar en Excel.
**page** y **rowsPerPage** para la paginación.
**labelsReport** parece no estar siendo utilizado en este fragmento de código.

### Paginación

**startSlice** y **endSlice** calculan los índices para la paginación.
**paginatedData** contiene los datos que se mostrarán en la página actual.

### Formateo de Fechas

**formatearFecha** convierte un objeto Date en una cadena con el formato YYYY-MM-DD.

**useEffect**: El primer useEffect se ejecuta cuando el componente se monta y carga los datos iniciales.
El segundo useEffect se ejecuta cuando cambian startDateProp, endDateProp o idService y recarga los datos.

### Funciones de obtención de datos

**clearData** limpia los datos actuales.
**getReportDetail** obtiene los detalles del informe de costos y actualiza el estado.
**getReportTotalCost** obtiene el costo total del informe y actualiza el estado.

### Manejadores de Paginación

**handleChangePage** actualiza la página actual.
**handleChangeRowsPerPage** actualiza el número de filas por página y reinicia la página a 0.

## Renderizado

Si loader es true, se muestra una barra de progreso.
De lo contrario, se muestran las tarjetas con el resumen de costos y la tabla de detalles.
**DownloadComponent** permite descargar los datos en Excel.
La tabla muestra los datos paginados con encabezados y filas.
**TablePagination** maneja la paginación de la tabla.