---
sidebar_position: 170
---

# FolioReport.js


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
import CharBarComponent from "../../../components/atoms/ChartBar";
import { useReports } from "../../../hooks/useReports";
import useUtils from "../../../utils/useUtils";
import CardComponent from "../../../components/atoms/CardComponent";
import DownloadComponent from "../../../components/molecules/DownloadComponent";
import ModalReport from "../../OptionDashboard/ServiceReports/components/ModalReport";
import { parseISO, format } from "date-fns";
import CircularProgressBar from "../../../components/atoms/Downloader";
import stylesLoader from "../../../styles/Molecules/Loader/Loader";
import { useTranslation } from "react-i18next";
import "../../../Traduccion_ES_EN/i18nMiCuenta";

function FolioReport(props) {
  const { t } = useTranslation();
  const { colorHEX } = useUtils();
  const { startDateProp = "", endDateProp = "", serviceIdProp = "" } = props;
  const { getCallsReportDate, getAllCallsForDate, loaderResponse } =
    useReports();
  const [titlesExcel] = useState([
    [
      "Queue",
      "Estatus",
      "Duración de llamada",
      "ID Agente",
      "From Number",
      "To Number",
      "Tipo de llamada",
      "Fecha Inicio",
      "Fecha Final",
    ],
  ]);
  const [itemsExcel] = useState([
    "queue",
    "status",
    "callDuration",
    "idAgent",
    "fromNumber",
    "toNumber",
    "typeCall",
    "date",
    "dateEnd",
  ]);
  const [showModal, setShowModal] = useState(false);
  const [dataExcel, setDataExcel] = useState([]);
  const [loader, setLoader] = useState();
  const columnTitles = ["Fecha", "Cantidad de llamadas"];
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [labelsReport, setLabelsReport] = useState([]);
  const [dataBarChar, setDataBarChar] = useState([]);
  const [audio, setAudio] = useState([]);
  const startSlice = page * rowsPerPage;
  const endSlice = startSlice + rowsPerPage;
  const paginatedData = dataExcel || [].slice(startSlice, endSlice) || [];
  const dataBarchar = {
    labels: labelsReport,
    datasets: dataBarChar,
  };

  useEffect(() => {
    clearData();
    setDataExcel([]);
    if (startDateProp !== "" && endDateProp !== "" && serviceIdProp !== "") {
      getCallReports();
      getCalls();
    }
  }, []);

  useEffect(() => {
    clearData();
    if (startDateProp !== "" && endDateProp !== "" && serviceIdProp !== "") {
      getCallReports();
      getCalls();
    }
  }, [startDateProp, endDateProp, serviceIdProp]);

  const clearData = () => {
    setData([]);
    setLabelsReport([]);
    setDataBarChar([]);
    setAudio([]);
    setPage(0);
    setRowsPerPage(10);
  };

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

  const startDateFormateada = formatearFecha(startDateProp);
  const endDateFormateada = formatearFecha(endDateProp);

  const getStatusType = (status = "") => {
    switch (status) {
      case 0:
        return t("Welcome.text41");
      case 1:
        return t("Welcome.text42");
      case 4:
        return t("Welcome.text43");
      default:
        return t("Welcome.text44");
    }
  };

  const getCalls = async () => {
    setLoader(true);
    try {
      const response = await getAllCallsForDate(
        startDateFormateada,
        endDateFormateada,
        serviceIdProp
      );
      if (response?.message) setDataExcel([]);
      else setDataExcel(response);
      setLoader(false);
    } catch (err) {
      console.log("error: ", err);
      setLoader(false);
    }
  };

  const getCallReports = async () => {
    setLoader(true);

    if (!startDateFormateada || !endDateFormateada || !serviceIdProp) {
      console.error("Alguno de los parámetros está ausente o es inválido.");
      setLoader(false);
      return;
    }

    try {
      const response = await getCallsReportDate(
        startDateFormateada,
        endDateFormateada,
        serviceIdProp
      );

      const formattedData = await getFormatBar(response);

      const { labelsForChar, dateSetForChar, dateSetForTable } = formattedData;
      setData(dateSetForTable);
      setLabelsReport(labelsForChar);
      setDataBarChar(dateSetForChar);
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(false);
    }
  };

  const openModalForAudio = (value = "") => {
    setAudio(value);
    setShowModal(true);
  };

  const getFormatBar = (array) => {
    if (!Array.isArray(array)) {
      return null;
    }

    const newArray = array.map((item) => {
      return {
        count: item.count,
        fecha: `${item._id.year}-${item._id.month}-${item._id.day}`,
      };
    });
    const labelsForChar = newArray.map((item) => item.fecha);

    const dateSetForChar = newArray.map((item, index) => ({
      label: item.fecha,
      data: getData(newArray, labelsForChar[index]),
      backgroundColor: colorHEX(),
    }));

    const dateSetForTable = newArray.map((item, index) => ({
      label: item.fecha,
      data: item.count,
      backgroundColor: colorHEX(),
    }));

    return { labelsForChar, dateSetForChar, dateSetForTable };
  };

  const getData = (array = [], date = "") => {
    const getNweArray = array.map((item, index) => {
      return item.fecha === date ? item.count : 0;
    });

    return getNweArray;
  };

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
          <ModalReport
            open={showModal}
            uriAudio={audio}
            handleClose={() => setShowModal(!showModal)}
          />
          <Stack sx={{ margin: "10px" }}>
          {dataBarchar.datasets && dataBarchar.datasets.length > 0 && (
            <CardComponent>
              <CharBarComponent
                titleBarChar={
                  !dataBarchar.datasets || dataBarchar.datasets.length <= 0
                    ? t("Welcome.text86")
                    : t("Welcome.text88")
                }
                dataBarChar={dataBarchar}
              />
            </CardComponent>
            )}
          </Stack>

          <Stack sx={{ margin: "10px" }}>
            <CardComponent>
              <DownloadComponent
                data={dataExcel}
                itemsExcel={itemsExcel}
                titlesExcel={titlesExcel}
              />
              <TableHead>
                <TableRow>
                  <TableCell align="center">Queue</TableCell>
                  <TableCell align="center">Audio</TableCell>
                  <TableCell align="center">{t("Welcome.text92")}</TableCell>
                  <TableCell align="center">{t("Welcome.text93")}</TableCell>
                  <TableCell align="center">{t("Welcome.text94")}</TableCell>
                  <TableCell align="center">{t("Welcome.text95")}</TableCell>
                  <TableCell align="center">{t("Welcome.text96")}</TableCell>
                  <TableCell align="center">{t("Welcome.text97")}</TableCell>
                  <TableCell align="center">{t("Welcome.text98")}</TableCell>
                  <TableCell align="center">{t("Welcome.text99")}</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {!dataExcel ||
                  (dataExcel.length <= 0 && (
                    <TableCell align="center" colSpan={10}>
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
                      <TableCell align="center">{item.queue}</TableCell>
                      <TableCell align="center">
                        {item.recordCall ? (
                          <a
                            onClick={() => {
                              openModalForAudio(item.recordCall);
                            }}
                            style={{
                              textDecoration: "underline",
                              color: "#8E91FB",
                              fontWeight: "bold",
                              cursor: "pointer",
                            }}
                          >
                            Abrir
                          </a>
                        ) : (
                          "-"
                        )}
                      </TableCell>
                      <TableCell align="center">
                        {getStatusType(item.status)}
                      </TableCell>
                      <TableCell align="center">
                        {item.idAgent ? item.idAgent : "-"}
                      </TableCell>
                      <TableCell align="center">
                        {item.idCaso ? item.idCaso : "-"}
                      </TableCell>
                      <TableCell align="center">{item.fromNumber}</TableCell>
                      <TableCell align="center">{item.typeCall}</TableCell>
                      <TableCell align="center">
                        {item.date && (
                          <span>
                            {format(
                              parseISO(item.date),
                              "yyyy-MM-dd'T'HH:mm:ss.SSSX"
                            )}
                          </span>
                        )}
                      </TableCell>
                      <TableCell align="center">
                        {item.date && (
                          <span>
                            {format(
                              parseISO(item.dateEnd),
                              "yyyy-MM-dd'T'HH:mm:ss.SSSX"
                            )}
                          </span>
                        )}
                      </TableCell>
                      <TableCell align="center">{item.callDuration}</TableCell>
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

export default FolioReport;
```

## Imports

**React Hooks**: useEffect y useState son hooks de React para manejar efectos secundarios y el estado del componente.
**Material-UI**: Se importan componentes de Material-UI para la estructura y el diseño del componente.
**Componentes personalizados**: CharBarComponent, CardComponent, DownloadComponent, ModalReport, y CircularProgressBar son componentes personalizados importados desde diferentes rutas.
**Hooks personalizados**: useReports es un hook personalizado para manejar la lógica de obtención de datos.
**Utilidades**: useUtils proporciona utilidades adicionales.
**date-fns**: parseISO y format se utilizan para manejar y formatear fechas.
**i18next**: useTranslation es un hook para la traducción de textos.

## Definición del componente FolioReport

### Estado local y variables

**titlesExcel** y **itemsExcel** definen las columnas del archivo Excel.
**showModal** controla la visibilidad del modal.
**dataExcel** almacena los datos para la tabla y el archivo Excel.
**loader** indica si se están cargando datos.
**data, labelsReport, dataBarChar** manejan los datos y etiquetas para el gráfico de barras.
**audio** almacena la URL del audio para el modal.
**page** y **rowsPerPage** manejan la paginación de la tabla.

## Hooks useEffect

El primer useEffect se ejecuta cuando el componente se monta.
El segundo useEffect se ejecuta cuando cambian startDateProp, endDateProp o serviceIdProp.

## Funciones auxiliares

**clearData** resetea los datos y el estado de la paginación.
**formatearFecha** convierte un objeto Date en una cadena con el formato YYYY-MM-DD.

## Obtención de datos

### Formateo de datos

**getStatusType** traduce el estado de la llamada a un texto legible.
**getCalls** obtiene todas las llamadas para un rango de fechas y actualiza el estado con los datos obtenidos.
**getCallReports** obtiene los informes de llamadas y formatea los datos para el gráfico de barras.
**getFormatBar** formatea los datos recibidos en un formato adecuado para el gráfico de barras.
**getData** obtiene el número de llamadas para una fecha específica.
**handleChangePage** y **handleChangeRowsPerPage** manejan la paginación de la tabla.

## Renderizado

**Condicional**: Si loader es verdadero, se muestra una barra de progreso. Si es falso, se muestra el contenido principal.
**Modal**: ModalReport muestra un modal con el audio seleccionado.
**Gráfico de Barras**: Si dataBarchar.datasets tiene datos, se muestra el componente CharBarComponent.
**TableHead** define los encabezados de la tabla.
**TableBody** muestra los datos paginados de dataExcel.
**TablePagination** maneja la paginación de la tabla.
**Descarga**: DownloadComponent permite descargar los datos de la tabla en un archivo Excel.