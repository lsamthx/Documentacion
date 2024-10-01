---
sidebar_position: 177
---

# ModalCampaigns.js

El componente ModalCampaigns es un componente modal que muestra una tabla con los datos recibidos (rowsTable) y las columnas (columnsTable). También proporciona la funcionalidad para enviar un archivo CSV (file) asociado a la campaña.

```js
import { useEffect, useState } from "react";
import { Stack, Modal, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, CircularProgress } from "@mui/material";
import ButtonComponent from "../../../components/atoms/ButtonComponent";
import { UseFile } from "../../../hooks/UseFiles";
import { useParams } from "react-router-dom";
import AlertComponent from "../../../components/atoms/Alert";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: "8px",
    p: 4,
    width: '50%'
  };

function ModalCampaigns ({
  open = false,
  handleClose = () => {},
  fileName = '',
  rowsTable = [],
  columnsTable = [],
  file = null
}) {
  const { id } = useParams();
  const { sendNewCSVFile, loaderResponse } = UseFile();
  const [tableData, setTableData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [typeAlert, setTypeAlert] = useState("success");

  useEffect(() => {
    createColumsForTable();
  }, [columnsTable]);

  const sendFile = async () => {
    try {
      const response = await sendNewCSVFile(id, file, fileName);
      setMessageAlert('Archivo enviado con éxito.');
      setTypeAlert('success');
      setShowAlert(!showAlert);

      setTimeout(() => {
        setShowAlert(false);
        handleClose();
      }, 4000);
    } catch(err) {
    setMessageAlert('err.message');
    setTypeAlert('error');
    setShowAlert(!showAlert);
    console.log(err);
    }
  };

  const createColumsForTable = () => {
    let newArray = [];
    const limit = rowsTable.length > 10 ? 10 : rowsTable.length;

    for (let rows = 0; rows < limit; rows ++) {
    const a = rowsTable.map(item => {
    return { item }
    });
    newArray.push(a);
    }
    setTableData(newArray);
  };

  return (
  <>
   <Modal
   open={open}
   onClose={handleClose}

  >
  <Stack sx={{...style, height: '500px', maxHeight: '500px'}}>
  {loaderResponse && <CircularProgress />}
  {showAlert && (
  <AlertComponent
  message={messageAlert}
  handleClose={() => setShowAlert(!showAlert)}
  typeAlert={typeAlert}
  />
  )}
          
  <TableContainer>
  <Table sx={{ width: '100%' }} aria-label="simple table">
  <TableHead>
  <TableRow>
  {columnsTable.map((item, index) => {
  return (
  <TableCell key={index}>
  {item}
  </TableCell>
  );
  })}
  </TableRow>
  </TableHead>

  <TableBody>
  {tableData.map((rowsItem, index) => {
  return (
  <TableRow key={`row-${index}`}>
  {rowsItem.map(itemColumn => {
  return (
  <TableCell key={`column-${index}`} align="center">{itemColumn.item}</TableCell>
  );
  })}
  </TableRow>
  );
  })}
  </TableBody>
  </Table>
  </TableContainer>
            
  <Stack
  sx={{
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  marginTop: '30px'
  }}
  >
  <Stack>
  <ButtonComponent
  label="Cancelar"
  onClick={handleClose}
  backgroundColor="#f0f0f0"
  color="#708198"
  />
  </Stack>
  <Stack>
  <ButtonComponent
  label="Lanzar"
  backgroundColor="#8088ff"
  onClick={sendFile}
  />
  </Stack>
  </Stack>  
  </Stack>
  </Modal>
  </>
  );
}

export default ModalCampaigns;
```