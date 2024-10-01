---
sidebar_position: 187
---

# ServiceReports.js

El componente ServiceReports es una vista que muestra un informe de llamadas con un gráfico de barras y una tabla de datos.

```js
import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import CharBarComponent from "../../../components/atoms/ChartBar";
import Table from "../../../components/molecules/Table";
import { useReports } from "../../../hooks/useReports";
import { TablePagination } from "@mui/material";
import useUtils from "../../../utils/useUtils";
import CardComponent from "../../../components/atoms/CardComponent";

function ServiceReports(props) {
  const { colorHEX } = useUtils();
  const { startDateProp = "2020-11-12", endDateProp = "2021-11-18", serviceIdProp = "5f89bd0fbd9ba0a61227e32a" } = props;
  const { getAllCallReport, loaderResponse } = useReports();
  const [loader, setLoader] = useState();
  const [startDate, setStartDate] = useState(startDateProp);
  const [endDate, setEndtDate] = useState(endDateProp);
  const [serviceId, setServiceId] = useState(serviceIdProp);
  const columnTitles = ['Fecha', 'Cantidad de llamadas'];
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [labelsReport, setLabelsReport] = useState([]);
  const [dataBarChar, setDataBarChar] = useState([]);
  const startSlice = page * rowsPerPage;
  const endSlice = startSlice + rowsPerPage;
  const paginatedData = data.slice(startSlice, endSlice) || [];
  const paginatedDataBarChar = dataBarChar.slice(startSlice, endSlice) || [];
  const dataBarchar = {
    labels: labelsReport.slice(startSlice, endSlice),
    datasets: paginatedDataBarChar
  };
  
  useEffect(() => {
    getCallReports();
  }, []);

  useEffect(() => {
    getCallReports();
  }, [startDateProp, endDateProp, serviceIdProp]);

  const getCallReports = async () => {
    setLoader(true);
    try {
      const response = await getAllCallReport(startDate, endDate, serviceId);
      const { labelsForChar, dateSetForChar, dateSetForTable } = await getFormatBar(response);
      setData(dateSetForTable);
      setLabelsReport(labelsForChar);
      setDataBarChar(dateSetForChar);
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(false);
    }
  };

  const getFormatBar = (array = []) => {
    const labelsForChar = array.map(item => item._id.fecha);

    const dateSetForChar = array.map((item, index) => ({
      label: item._id.fecha,
      data: getData(array, labelsForChar[index]),
      backgroundColor: colorHEX(),
    }));

    const dateSetForTable = array.map((item, index) => ({
      label: item._id.fecha,
      data: item.count,
      backgroundColor: colorHEX(),
    }));

    return { labelsForChar, dateSetForChar, dateSetForTable };
  };

  const getData = (array = [], date = '') => {
    const getNweArray = array.map((item, index) => {
      return item._id.fecha === date ? item.count : 0
    });
    
    return getNweArray;
  };

  function cellRenderer(dataItem, title) {
    return (
    <div
    style={{
    fontSize: "1rem",
    color: "darkgray",
    textAlign: "center",
    marginTop: "1.5rem",
    }}
    >
    {title === "Fecha"
    ? dataItem.label
    : title === "Cantidad de llamadas"
    ? dataItem.data
    : null}
    </div>
    );
  }

  return (
    <Stack direction='row'>
    <Stack sx={{ width: '50%', margin: '10px' }}>
    <CardComponent>
    <CharBarComponent
    titleBarChar={'Reporte de llamadas'}
    dataBarChar={dataBarchar}
    />
    </CardComponent>
    </Stack>

    <Stack sx={{ width: '50%', margin: '10px' }}>
    <CardComponent>
    <Table
      columnTitles={columnTitles}
      cellComponent={cellRenderer}
      data={paginatedData}
    />
    <TablePagination
      sx={{ marginTop: "2rem", marginRight:"10rem" }}
      component="div"
      count={data.length}
      page={page}
      onPageChange={(event, newPage) => setPage(newPage)}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={(event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
      }}
      labelRowsPerPage="Páginas"
      />
      </CardComponent>
      </Stack>
    </Stack>
  );
}

export default ServiceReports;
```