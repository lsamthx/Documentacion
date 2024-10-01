---
sidebar_position: 188
---

# SMSReport.js

El componente SMSReport desarrollado maneja un informe de SMS con funcionalidades para visualizar y descargar datos, así como para mostrar estadísticas en forma de gráfico de rosquilla y tabla paginada.

```js
import { useEffect, useState } from "react";
import {
  Stack,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import CardComponent from "../../../components/atoms/CardComponent";
import CharBarComponent from "../../../components/atoms/ChartBar";
import DownloadComponent from "../../../components/molecules/DownloadComponent";
import useWexClient from "../../../hooks/Clients/wexClient,";
import { useReports } from "../../../hooks/useReports";
import useUtils from "../../../utils/useUtils";
import Table from "@mui/material/Table";
import DoughnutChart from "../../../components/atoms/DoughnutChart";
import CircularProgressBar from "../../../components/atoms/Downloader";
import stylesLoader from "../../../styles/Molecules/Loader/Loader";
import { useTranslation } from "react-i18next";
import "../../../Traduccion_ES_EN/i18nMiCuenta";

function SMSReport(props) {
  const { t } = useTranslation();
  const { colorHEX } = useUtils();
  const { IDList = "", idService = "" } = props;
  const { getInfoByListSMS } = useWexClient();
  const { getAllSMSByStatus } = useReports();
  const [itemsExcel] = useState(["phone", "mensaje", "date", "status"]);
  const [titlesExcel] = useState([
    ["Telefono", "Mensaje", "Fecha en que se marco", "Estatus"],
  ]);
  const [labelsReport, setLabelsReport] = useState([]);
  const [dataBarChar, setDataBarChar] = useState([]);
  const [dataStatusBarChar, setDataStatusBarChar] = useState();
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const startSlice = page * rowsPerPage;
  const endSlice = startSlice + rowsPerPage;
  const paginatedData = dataTable.slice(startSlice, endSlice) || [];
  const dataBarchar = {
    labels: labelsReport,
    datasets: dataBarChar,
  };

  useEffect(() => {
    clearData();

    if (IDList !== "") {
      getListData();
      getDatByStatus();
    }
  }, [IDList]);

  useEffect(() => {
    if (dataTable.length <= 0) {
      getDatByStatus();
    }
  }, [dataTable]);

  const getListData = async () => {
    try {
      const response = await getInfoByListSMS({ idXlsx: IDList }, idService);
      setDataTable(response?.sms || []);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  const clearData = () => {
    setDataTable([]);
    setPage(0);
    setRowsPerPage(10);
    setDataStatusBarChar(null);
  };

  const getDatByStatus = async () => {
    setLoader(true);
    try {
      const response = await getAllSMSByStatus(IDList);
      getDataForDoghnut(response);
      setLoader(false);
    } catch (err) {
      console.log("err: ", err);
      setLoader(false);
    }
  };

  const getCorrectStatus = (status = "") => {
    switch (status) {
      case 4:
        return "Entregado"
      case 0:
        return "No Entregado"
      default:
        return "-";
    }
  };

  const getDataForDoghnut = (array = []) => {
    const data = array.map((item) => item.totalCalls);
    const labels = array.map((item) => getCorrectStatus(item._id));
    const colors = array.map((e) => colorHEX());

    const dataChar = {
      label: labels,
      data: data,
      borderColor: colors,
      backgroundColor: colors,
    };

    setDataStatusBarChar({
      labels: labels,
      datasets: [dataChar],
      borderWidth: 1,
    });
  };

  return (
    <Stack direction="row" sx={{ margin: "10px 5%" }}>
      {loader ? (
        <div style={{ ...stylesLoader.containerLoader }}>
          <CircularProgressBar />
        </div>
      ) : (
        <>
          <Stack sx={{ width: '30%' }}>
            <CardComponent>
              <DoughnutChart
                titleBarChar={
                  dataStatusBarChar && dataStatusBarChar?.datasets.length <= 0
                    ? t("Welcome.text86")
                    : t("Reporte de SMS por Estatus.")
                }
                data={dataStatusBarChar}
              />
            </CardComponent>
          </Stack>

          <Stack sx={{ width: '70%', margin: "10px" }}>
            <CardComponent>
              <DownloadComponent
                data={dataTable}
                itemsExcel={itemsExcel}
                titlesExcel={titlesExcel}
              />
              <Table
                sx={{ minWidth: 500 }}
                aria-label="custom pagination table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="center">{t("Welcome.text83")}</TableCell>
                    <TableCell align="center">{t("Welcome.text58")}</TableCell>
                    <TableCell align="center">{t("Welcome.text85")}</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {paginatedData.length <= 0 && (
                    <TableCell sx={{ textAlign: "center" }} colSpan={6}>
                      {t("Welcome.text90")}
                    </TableCell>
                  )}

                  {paginatedData.map((item, index) => {
                    return (
                      <TableRow
                        key={index}
                        style={{
                          backgroundColor:
                            index % 2 === 0 ? "#ECECEC" : "white",
                        }}
                      >
                        <TableCell align="center">
                          {item.phone || "-"}
                        </TableCell>
                        <TableCell align="center">
                          {item.mensaje || "-"}
                        </TableCell>
                        <TableCell align="center">
                          {getCorrectStatus(item.status)}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
              <TablePagination
                sx={{ marginTop: "2rem", marginRight: "10rem" }}
                component="div"
                count={dataTable.length}
                page={page}
                onPageChange={(event, newPage) => setPage(newPage)}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={(event) => {
                  setRowsPerPage(parseInt(event.target.value, 10));
                  setPage(0);
                }}
                labelRowsPerPage={t("Welcome.text89")}
              />
            </CardComponent>
          </Stack>
        </>
      )}
    </Stack>
  );
}

export default SMSReport;
```

## Hooks y Estado

Utiliza **useState** para gestionar varios estados como dataTable, loader, dataStatusBarChar, page, y rowsPerPage para manejar la paginación y los datos recibidos.

## Efectos Secundarios

**useEffect** se utiliza para cargar datos cuando IDList cambia, así como para obtener datos adicionales cuando dataTable está vacío.

## Funciones Auxiliares

**getCorrectStatus**: Convierte códigos numéricos de estado en etiquetas legibles, como "Entregado" o "No Entregado".
**getDataForDoghnut**: Procesa los datos recibidos para el gráfico de rosquilla (DoughnutChart), convirtiendo datos y etiquetas en el formato necesario para mostrar el estado de entrega de SMS.

## Interfaz de Usuario

Muestra un indicador de carga (CircularProgressBar) cuando loader es verdadero.
Divide la interfaz en dos secciones utilizando Stack de MUI, una para el gráfico de rosquilla y otra para la tabla paginada de datos.
**DoughnutChart**: Representa visualmente el estado de entrega de los SMS mediante un gráfico circular.
**DownloadComponent**: Permite al usuario descargar los datos mostrados en formato de tabla.
**Table**: Muestra los datos de los SMS en una tabla paginada con columnas para teléfono, mensaje y estado.

## Internacionalización

Utiliza el hook useTranslation para traducir etiquetas y textos según el idioma seleccionado.