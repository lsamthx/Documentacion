---
sidebar_position: 173
---

# IVRReport.js

El componente IVRReport se encarga de mostrar un informe de llamadas IVR, incluyendo un gráfico de barras y una tabla con detalles de las llamadas. 

```js
import { useEffect, useState } from "react";
import {
  Stack,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import CardComponent from "../../../components/atoms/CardComponent";
import CharBarComponent from "../../../components/atoms/ChartBar";
import useUtils from "../../../utils/useUtils";
import { useReports } from "../../../hooks/useReports";
import DownloadComponent from "../../../components/molecules/DownloadComponent";
import { parseISO, format } from "date-fns";
import CircularProgressBar from "../../../components/atoms/Downloader";
import stylesLoader from "../../../styles/Molecules/Loader/Loader";
import { useTranslation } from "react-i18next";
import "../../../Traduccion_ES_EN/i18nMiCuenta";

function IVRReport(props) {
  const { t } = useTranslation();
  const { colorHEX } = useUtils();
  const { startDateProp = "", endDateProp = "" } = props;
  const { countCallsByDate, getIVRDurationByDate, loaderResponse } =
    useReports();
  const [dataBarChar, setDataBarChar] = useState([]);
  const [labelsReport, setLabelsReport] = useState([]);
  const [loader, setLoader] = useState(false);
  const [dataExcel, setDataExcel] = useState([]);
  const [titlesExcel] = useState([
    ["To", "From", t("Welcome.text100"), t("Welcome.text101")],
  ]);
  const [itemsExcel] = useState([
    "To",
    "From",
    "DateOfAssignment",
    "callDuration",
  ]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(30);
  const startSlice = page * rowsPerPage;
  const endSlice = startSlice + rowsPerPage;
  const paginatedData = dataExcel || [].slice(startSlice, endSlice) || [];
  const dataBarchar = {
    labels: labelsReport,
    datasets: dataBarChar,
  };

  const startDateFormateada = formatearFecha(startDateProp);
  const endDateFormateada = formatearFecha(endDateProp);

  useEffect(() => {
    clearData();
    if (startDateProp !== "" && endDateProp !== "") {
      getCallReports();
      getCallDuration();
    }
  }, [startDateProp, endDateProp]);

  const clearData = () => {
    setDataBarChar([]);
    setLabelsReport([]);
    setPage(0);
    setRowsPerPage(30);
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

  const getStatusType = (status = "") => {
    switch (status) {
      case 0:
        return t("Welcome.text74");
      case 1:
        return t("Welcome.text75");
      case 2:
        return t("Welcome.text76");
      case 3:
        return t("Welcome.text77");
      case 4:
        return t("Welcome.text78");
      case 5:
        return t("Welcome.text79");
      case 8:
        return t("Welcome.text80");
      case 9:
        return t("Welcome.text81");
      case 10:
        return t("Welcome.text82");
      default:
        return "-";
    }
  };

  const getCallDuration = async () => {
    try {
      setLoader(true);
      const response = await getIVRDurationByDate(
        startDateFormateada,
        endDateFormateada
      );

      if (response?.message) setDataExcel([]);
      else setDataExcel(response);
    } catch (err) {
      console.log("err: ", err);
      setLoader(false);
    }
  };

  const getCallReports = async () => {
    setLoader(true);
    try {
      const response = await countCallsByDate(
        startDateFormateada,
        endDateFormateada
      );
      const { labelsForChar, dateSetForChar } = await getFormatBar(response);
      setLabelsReport(labelsForChar);
      setDataBarChar(dateSetForChar);
      setLoader(false);
    } catch (err) {
      setLoader(false);
    }
  };

  const getFormatBar = (array = []) => {
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

    return { labelsForChar, dateSetForChar };
  };

  const getData = (array = [], date = "") => {
    const getNweArray = array.map((item, index) => {
      return item.fecha === date ? item.count : 0;
    });

    return getNweArray;
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
            {dataBarchar.datasets && dataBarchar.datasets.length > 0 && (
              <CardComponent>
                <CharBarComponent
                  titleBarChar={
                    dataBarchar.datasets.length <= 0
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
                  <TableCell align="center">To</TableCell>
                  <TableCell align="center">From</TableCell>
                  <TableCell align="center">{t("Welcome.text100")}</TableCell>
                  <TableCell align="center">{t("Welcome.text101")}</TableCell>
                  <TableCell align="center">{t("Welcome.text85")}</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {paginatedData.length <= 0 && (
                  <TableCell align="center" colSpan={4}>
                    {t("Welcome.text90")}
                  </TableCell>
                )}

                {paginatedData.map((item, index) => {
                  return (
                    <TableRow
                      key={index}
                      style={{
                        backgroundColor: index % 2 === 0 ? "#ECECEC" : "white",
                      }}
                    >
                      <TableCell align="center">{item.To || "-"}</TableCell>
                      <TableCell align="center">{item.From || "-"}</TableCell>
                      <TableCell align="center">
                        {item.DateOfAssignment && (
                          <span>
                            {format(
                              parseISO(item.DateOfAssignment),
                              "yyyy-MM-dd'T'HH:mm:ss.SSSX"
                            )}
                          </span>
                        )}
                      </TableCell>
                      <TableCell align="center">
                        {item.callDuration || "-"}
                      </TableCell>
                      <TableCell align="center">
                        {getStatusType(item.status) || "-"}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </CardComponent>
          </Stack>
        </>
      )}
    </Stack>
  );
}

export default IVRReport;
```

## Estado y efectos

Utiliza **useState** para gestionar el estado de varios elementos como dataBarChar, labelsReport, loader, dataExcel, page, rowsPerPage, y paginatedData.
useEffect se usa para manejar la carga inicial y actualizar los datos cuando cambian startDateProp y endDateProp.

## Formato de fecha

Utiliza **date-fns** para formatear las fechas startDateProp y endDateProp en formato "yyyy-MM-dd".

## Funciones de llamada (getIVRDurationByDate, countCallsByDate)

Se utilizan para obtener datos de duración de llamadas IVR y contar llamadas por fecha.

## Manejo de datos del gráfico de barras

**getFormatBar** formatea los datos para el gráfico de barras, mientras que getData obtiene los datos específicos para una fecha dada.

## Traducción de estados 

Utiliza una función para traducir los diferentes estados de llamadas IVR a través del objeto statusMap.

## Interfaz de usuario 

Estructuras de contenedores (**Stack**) para organizar los componentes.
**CardComponent** y **CharBarComponent** para mostrar el gráfico de barras y los detalles de llamadas respectivamente.
**DownloadComponent** para permitir la descarga de datos en formato Excel.
**Table** para mostrar detalles tabulares de las llamadas IVR.