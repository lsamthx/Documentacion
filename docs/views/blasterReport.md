---
sidebar_position: 167
---

# BlasterReport.js

Este componente de React, BlasterReport, se utiliza para mostrar un informe detallado de llamadas, incluyendo gráficos y una tabla paginada.

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

function BlasterReport(props) {
  const { t } = useTranslation();
  const { colorHEX } = useUtils();
  const { IDList = "", idService = "" } = props;
  const { getInfoByList } = useWexClient();
  const { getAllCallsByStatus, getAllCallReportList } = useReports();
  const [itemsExcel] = useState([
    "phone",
    "mensaje",
    "nombre",
    "date",
    "status",
  ]);
  const [titlesExcel] = useState([
    ["Telefono", "Mensaje", "Nombre", "Fecha en que se marco", "Estatus"],
  ]);
  const [labelsReport, setLabelsReport] = useState([]);
  const [dataBarChar, setDataBarChar] = useState([]);
  const [dataStatusBarChar, setDataStatusBarChar] = useState();
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(0);
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
      getCallList();
      getDatByStatus();
    }
  }, [dataTable]);

  const getListData = async () => {
    try {
      const response = await getInfoByList({ idXlsx: IDList }, idService);
      setRowsPerPage(10)
      setDataTable(response?.calls || []);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  const getCallList = async () => {
    setLoader(true);
    try {
      const response = await getAllCallReportList({ idXlsx: IDList });
      const { labelsForChar, dateSetForChar, dateSetForTable } =
        await getFormatBar(response);
      setData(dateSetForTable);
      setLabelsReport(labelsForChar);
      setDataBarChar(dateSetForChar);
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(false);
    }
  };

  const clearData = () => {
    setData([]);
    setDataTable([]);
    setPage(0);
    setRowsPerPage(0);
    setDataStatusBarChar(null);
  };

  const getDatByStatus = async () => {
    setLoader(true);
    try {
      const response = await getAllCallsByStatus(IDList);
      getDataForDoghnut(response);
      setLoader(false);
    } catch (err) {
      console.log("err: ", err);
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

    const dateSetForTable = newArray.map((item, index) => ({
      label: item.fecha,
      data: item.count,
      backgroundColor: colorHEX(),
    }));

    return { labelsForChar, dateSetForChar, dateSetForTable };
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

  const getData = (array = [], date = "") => {
    const getNweArray = array.map((item, index) => {
      return item.fecha === date ? item.count : 0;
    });

    return getNweArray;
  };

  const getCorrectStatus = (status = "") => {
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

  return (
    <Stack direction="column" sx={{ margin: "10px auto", width: "70%" }}>
       {loader ? (
          <div style={{ ...stylesLoader.containerLoader }}>
            <CircularProgressBar />
          </div>
           ) : (
            <>
      <Stack direction="row" spacing={2} alignItems="flex-start">
        <Stack sx={{ width: "30%" }}>
        <CardComponent>
          <DoughnutChart
            titleBarChar={
              dataStatusBarChar && dataStatusBarChar?.datasets.length <= 0
                ? t("Welcome.text86")
                : t("Welcome.text87")
            }
            data={dataStatusBarChar}
          />
        </CardComponent>
        </Stack>
        <CardComponent sxCard={{ width: "60%" }}>
          <CharBarComponent
            titleBarChar={
              dataBarchar && dataBarchar.datasets.length <= 0
                ? t("Welcome.text86")
                : t("Welcome.text88")
            }
            dataBarChar={dataBarchar}
          />
        </CardComponent>
      </Stack>

      <Stack sx={{ margin: "10px" }}>
        <CardComponent>
          <DownloadComponent
            data={dataTable}
            itemsExcel={itemsExcel}
            titlesExcel={titlesExcel}
          />
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell align="center">{t("Welcome.text83")}</TableCell>
                <TableCell align="center">{t("Welcome.text58")}</TableCell>
                <TableCell align="center">{t("Welcome.text3")}</TableCell>
                <TableCell align="center">{t("Welcome.text84")}</TableCell>
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
                      backgroundColor: index % 2 === 0 ? "#ECECEC" : "white",
                    }}
                  >
                    <TableCell align="center">{item.phone || "-"}</TableCell>
                    <TableCell align="center">{item.mensaje || "-"}</TableCell>
                    <TableCell align="center">{item.nombre || "-"}</TableCell>
                    <TableCell align="center">{item.date || "-"}</TableCell>
                    <TableCell align="center">{getCorrectStatus(item.status)}</TableCell>
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

export default BlasterReport;
```

## Imports

Se importan varios hooks y componentes de React y Material-UI, así como componentes personalizados y estilos.

**Hooks y estado**: Se utilizan useState y useEffect para manejar el estado y los efectos secundarios.
**Carga de datos**: Se cargan datos al montar el componente o cuando cambia el IDList. Las funciones getListData, getCallList y getDatByStatus son responsables de obtener los datos necesarios.
**Paginación**: Se implementa la paginación para la tabla de datos.
**Gráficos**: Se generan gráficos de barras y de dona utilizando los datos obtenidos.
**Traducción**: Se utiliza el hook useTranslation para manejar traducciones de textos.

