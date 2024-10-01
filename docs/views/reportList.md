---
sidebar_position: 182
---

# ReportList.js

El componente ReportList mostrado es responsable de mostrar un listado de datos tabulares, gestionando la paginación y la descarga de datos en formato Excel. 

```js
import { useEffect, useState } from "react";
import stylesLoader from "../../../styles/Molecules/Loader/Loader";
import CircularProgressBar from "../../../components/atoms/Downloader";
import CardComponent from "../../../components/atoms/CardComponent";
import DownloadComponent from "../../../components/molecules/DownloadComponent";
import { useTranslation } from "react-i18next";
import {
  Stack,
  Modal,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
  TablePagination,
} from "@mui/material";
import { useReports } from "../../../hooks/useReports";

function ReportList ({
    IDList = "",
    listTitles = []
}) {
  const { t } = useTranslation();
  const { getListDetail } = useReports();
  const [loader, setLoader] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [columnsTable, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const startSlice = page * rowsPerPage;
  const endSlice = startSlice + rowsPerPage;
  const paginatedData = dataTable.slice(startSlice, endSlice) || [];
  const [dataExcel, setDataExcel] = useState([]);
  const [itemsExcel, setItemsExcel] = useState([]);
  const [titlesExcel, setTitlesExcel] = useState([]);

  useEffect(() => {
    setTitlesExcel([listTitles]);
    setColumns(listTitles || []);
    setItemsExcel(listTitles || []);

    if (listTitles.length > 0)
      getListDetailOutbound();
  }, [IDList]);

  useEffect(() => {
  }, []);



  const getListDetailOutbound = async () => {
    try {
      setLoader(true);
      const response = await getListDetail(IDList);
      setDataTable(response?.data || []);
      createDataForExcel(response?.data);
      setLoader(false);
    } catch (err) {
      setLoader(false);
      console.log('error: ', err);
    }
  };

  const createDataForExcel = (data = []) => {
    const newValues = data.map((item) => {
      return item.data
    });

    const array = newValues.map((item, index) => {
      let newArray = [];
      listTitles.forEach((element, indexEl) => {
        newArray = ({ ...newArray, [element]: item[indexEl]});
      });

      return {...newArray};
    });

    setDataExcel(array);
  };

  return (
    <Stack direction="column" sx={{ margin: "10px 5%" }}>
      {loader ? (
          <div style={{ ...stylesLoader.containerLoader }}>
            <CircularProgressBar />
          </div>
        ) : (
          <Stack sx={{ margin: "10px" }}>
            <CardComponent sx={{
              overflowY: "hidden",
              width: "95%",
              margin: 'auto'
            }}>
              <DownloadComponent
                data={dataExcel}
                itemsExcel={listTitles}
                titlesExcel={[listTitles]}
              />
              <Table aria-label="custom pagination table">
                <TableHead>
                  <TableRow>
                    {columnsTable.map((item, index) => {
                      return <TableCell align="center" key={`row-${index}`}>{item}</TableCell>
                    })}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {paginatedData.length === 0 && (
                    <TableCell sx={{ textAlign: "center" }} colSpan={columnsTable.length < 0 ? 5 : listTitles.length}>
                      {t("Welcome.text90")}
                    </TableCell>
                  )}

                  {paginatedData.map((rowsItem, index) => {
                    return (
                      <TableRow key={`row-${index}`}>
                        {rowsItem.data.map(item => {
                          return (
                            <TableCell key={`column-${index}`} align="center">
                              {item}
                            </TableCell>
                          );
                        })}
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
        )}
    </Stack>
  );
}

export default ReportList;
```

## Estado y efectos

**useState** se utiliza para gestionar el estado local del componente, como loader (para mostrar un indicador de carga), dataTable (para almacenar los datos recuperados), columnsTable (para las columnas de la tabla), y dataExcel (para los datos que se exportarán a Excel).
**useEffect** se emplea para ejecutar efectos secundarios en determinados puntos del ciclo de vida del componente, como la carga inicial y cuando IDList cambia. Esto asegura que los datos se actualicen cuando sea necesario.

## Obtención de datos

**getListDetailOutbound** se utiliza para obtener los detalles de la lista a partir de IDList utilizando la función getListDetail del hook useReports. Cuando se completa la solicitud, actualiza dataTable con los datos obtenidos y genera los datos en formato Excel utilizando createDataForExcel.

## Renderizado condicional

Muestra un indicador de carga (CircularProgressBar) mientras loader es true.
Cuando la carga ha finalizado, muestra la tabla (Table) con los datos paginados (paginatedData).

## Paginación

Utiliza **TablePagination** para permitir al usuario navegar a través de las páginas de datos (dataTable), mostrando un número específico de filas por página (rowsPerPage).