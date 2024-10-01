---
sidebar_position: 112
---

# IVR.js (Molecules)


Este es un componente de React llamado Ivr que parece estar relacionado con la configuración de IVR (Interactive Voice Response) en una aplicación web. 

```jsx
import React, { useState, useEffect } from "react";
import { Alert, Stack, TablePagination, Typography } from "@mui/material";
import CardComponent from "../atoms/CardComponent";
import useWexClient from "../../hooks/Clients/wexClient,";
import stylesAgent from "../../styles/Agents/styleAgents";
import Table from "./Table";
import stylesLoader from "../../styles/Loader/Loader";
import CircularProgressBar from "../atoms/Downloader";
import Modal from "../atoms/ModalComponent";
import InputLabel from "../atoms/InputLabel";
import ButtonComponent from "../atoms/ButtonComponent";
import { Add } from "@material-ui/icons";
import ButtonAgentsHome from "../atoms/ButtonHomeAgents";
import InputComponent from "../atoms/InputComponent";

function Ivr() {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const searchColumns = ["Departamento"]; // Columnas en las que se busca
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { getListIVR, getQueues, addNewIVR } = useWexClient();
  const [data, setData] = useState([]);
  const [dataQueue, setDataQueue] = useState([]);
  const [info, setInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [typeDepartament, setTypeDepartament] = useState("");
  const [typeMessage, setTypeMessage] = useState("");
  const [typeDigit, setTypeDigit] = useState("");
  const [typeDepartamentAdd, setTypeDepartamentAdd] = useState("");
  const [typeMessageAdd, setTypeMessageAdd] = useState("");
  const [typeDigitAdd, setTypeDigitAdd] = useState("");
  const [saveItem, setSaveItem] = useState("");
  const [typeID, setTypeID] = useState("");

  const { getUpdateIVR } = useWexClient();

  const [inputValue, setInputValue] = useState("");
  const [errorText, setErrorText] = useState("");
  const validateInput = (inputValue) => {
    setErrorText(
      inputValue.trim() === ""
        ? "Este campo es obligatorio"
        : inputValue.length > 1
        ? "El máximo de dígitos es 1"
        : !/^\+?\d+$/.test(inputValue)
        ? "Solo se aceptan números del 0 al 9"
        : ""
    );
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    getQueues().then((response) => {
    setDataQueue(response[0]?.tokenSchema[0]?.anchor || null);
    setIsLoading(false);
    });
  }, []);
  {
    console.log(dataQueue);
  }

  useEffect(() => {
    if (dataQueue !== undefined && dataQueue !== null) {
    const body = {
    idCanal: dataQueue,
    };

    console.log("encontro dataqueue");

    getListIVR(body)
      .then((response) => {
      setData(response.data || []);
      setInfo(response);
      setIsLoading(false);
      console.log("Respuesta del servidor:", response);
      })

      .catch((error) => {
      console.log("error", error.message);
      });
    }
  }, [dataQueue]);

  const fetchDataAndUpdateTable = () => {
  ////////////////////
  const body = {
  idCanal: dataQueue,
  };

  getListIVR(body).then((response) => {
  setData(response.data);
  setInfo(response);
  setIsLoading(false);
  });
  };

  if (isLoading) {
  return (
  <div style={{ ...stylesLoader.containerLoader }}>
  <CircularProgressBar />
  </div>
  );
  }

  const handleChangePage = (event, newPage) => {
  setPage(newPage);
  };

  const handleEditClick = (item, event) => {
  event.preventDefault();
  setIsModalVisible(true);
  setTypeDepartament(item.queue_str);
  setTypeID(item._id);
  setTypeMessage(item.mensaje);
  setTypeDigit(item.digito);
  setSaveItem(item);
  };

  const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
  };

  const filteredData = Array.isArray(data)
  ? data.filter((item) => {
  return searchColumns.some((column) => {
  if (column === "Departamento") {
  return item.queue_str
  .toLowerCase()
  .includes(searchTerm.toLowerCase());
  }
  return false;
  });
  })
  : [];

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedData = filteredData.slice(startIndex, endIndex);

  const columnTitles = ["Departamento", "Marcador", "Mensaje"];

  function cellRenderer(ivrItem, title) {
    return (
    <div style={stylesAgent.render}>
    {title === "Departamento"
    ? ivrItem.queue_str
    : title === "Marcador"
    ? ivrItem.digito
    : title === "Mensaje"
    ? ivrItem.mensaje
    : null}
    </div>
    );
  }

  const Buttons = () => (
    <>
    <div style={{ marginRight: "1rem" }}>
    <ButtonComponent
    label="Cancelar"
    backgroundColor="#f0f0f0"
    color="#708198"
    />
    </div>
    <div style={{ marginRight: "1rem" }}>
    <ButtonComponent
    label="Guardar"
    backgroundColor="#9c27be"
    onClick={() => saveIVR()}
    />
    </div>
    </>
  );

  const saveIVR = async () => {
    try {
    const body = {
    idChannel: dataQueue,
    queue_str: typeDepartamentAdd,
    digit: typeDigitAdd,
    message: typeMessageAdd,
    };

    await addIVR(body);

    setAddModalVisible(false);
    await fetchDataAndUpdateTable();
    } catch (error) {
    console.error("Error al agregar IVR:", error.message);
    }
    fetchDataAndUpdateTable();
  };

  const addIVR = (body) => {
    addNewIVR(body)
    .then((item) => {
    console.log(item);
    })
    .catch((error) => {
    console.log("error", error.message);
    });
    fetchDataAndUpdateTable();
  };

  const ButtonsEdit = () => (
  <>
  <div style={{ marginRight: "1rem" }}>
  <ButtonComponent
  label="Cancelar"
  backgroundColor="#f0f0f0"
  color="#708198"
  />

  </div>
  <div style={{ marginRight: "1rem" }}>
  <ButtonComponent
  label="Guardar"
  backgroundColor="#9c27be"
  onClick={() => editIVR()}
  />
  </div>
  </>
  );

  const editIVR = async () => {
  try {
  const body = {
  idIvr: typeID,
  message: typeMessage,
  digit: typeDigit,
  queue_str: typeDepartament,
  };

  await actualizeIVR(body);

  setIsModalVisible(false);
  await fetchDataAndUpdateTable();
  } catch (error) {
  console.error("Error editing IVR:", error.message);
  }
  fetchDataAndUpdateTable();
  };

  const actualizeIVR = (body) => {
  getUpdateIVR(body)
  .then((item) => {
  console.log(item);
  })
  .catch((error) => {
  console.log("error", error.message);
  });
  fetchDataAndUpdateTable();
  };

  return (
    <Stack
    sx={{
    padding: "3rem 1.5rem",
    display: "flex",
    width: "50%",
    flexDirection: "column",
    }}
    >
  <Typography
    variant="h4"
    style={{
    textAlign: "left",
    color: "black",
    fontFamily: "sans-serif",
    marginTop: "1rem",
    marginLeft: "2rem",
    opacity: "0.7",
    fontWeight: "bold",
    }}
    >
    
    IVR
    </Typography>
    <Stack sx={{ display: "flex", marginTop: "1rem", width: "100%" }}>
    <CardComponent title="IVR Activos">
    <div>
    <Stack
    direction="row"
    style={stylesAgent.divS}
    justifyContent="space-between"
    >
     
    <input
    style={stylesAgent.input}
    type="text"
    placeholder="Buscar por departamento"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    />
    
    <Stack>
    <ButtonAgentsHome
    text="Agregar"
    icon={<Add fontSize="medium" />}
    textColor="white"
    backgroundColor="#9c27be"
    style={{ borderRadius: "7px" }}
    onClick={() => {
    setTypeDepartamentAdd("");
    setTypeMessageAdd("");
    setTypeDigitAdd("");

    setAddModalVisible(true);
    }}
    />
    </Stack>
    </Stack>
    {data && (
    <Stack sx={stylesAgent.stackPag}>
    <Table
    data={displayedData}
    columnTitles={columnTitles}
    cellComponent={cellRenderer}
    showEditColumn={true}
    handleEditClick={handleEditClick}
    />

    <TablePagination
    sx={stylesAgent.pagination}
    component="div"
    count={filteredData.length}
    page={page}
    onPageChange={handleChangePage}
    rowsPerPage={rowsPerPage}
    onRowsPerPageChange={handleChangeRowsPerPage}
    labelRowsPerPage="Páginas"
    />
                
    {isModalVisible && (
    <Modal
    title="Editar IVR"
    buttons={<ButtonsEdit />}
    width="25%"
    visible={isModalVisible}
    onClose={handleCloseModal}
    >
     
    <Stack sx={{ margin: "1rem", backgroundColor: "white" }}>
    <Stack sx={{ marginTop: "0.5rem" }}>
    <InputLabel
    label="Departamento"
    inputType="text"
    inputwidth="90%"
    backgroundColor="#EEEEEE"
    setValue={setTypeDepartament}
    hdlOnChange={(selectedValue) => {
    setTypeDepartament(selectedValue);
    }}
    value={typeDepartament}
    />

    </Stack>
    <Stack sx={{ marginTop: "0.5rem" }}>
    <InputLabel
    label="Marcador"
    inputType="text"
    inputwidth="90%"
    backgroundColor="#EEEEEE"
    setValue={setTypeDigit}
    hdlOnChange={(selectedValue) => {
    setTypeDigit(selectedValue);
    validateInput(selectedValue);
    }}
    value={typeDigit}
    validate={validateInput}
    />

    {errorText && (
    <Stack
    sx={{ width: "100%", marginTop: "1rem" }}
    spacing={2}
    >
    <Alert severity="error">{errorText}</Alert>
    </Stack>
    )}
    </Stack>
    <Stack sx={{ marginTop: "0.5rem" }}>
    
    <InputLabel
    label="Perfil"
    inputType="text"
    inputwidth="90%"
    backgroundColor="#EEEEEE"
    setValue={setTypeMessage}
    hdlOnChange={(selectedValue) => {
    setTypeMessage(selectedValue);
    }}
    value={typeMessage}
    />
    </Stack>
    </Stack>
    </Modal>
    )}
    </Stack>
    )}
    </div>
    </CardComponent>
    {isAddModalVisible && (
    <Modal
    title="Agregar Nuevo IVR"
    buttons={<Buttons />}
    width="25%"
    visible={isAddModalVisible}
    onClose={() => setAddModalVisible(false)}
    >

    <Stack sx={{ margin: "1rem", backgroundColor: "white" }}>
    <Stack sx={{ marginTop: "0.5rem" }}>
    <InputLabel
    label="Departamento"
    inputwidth="90%"
    backgroundColor="#EEEEEE"
    setValue={setTypeDepartamentAdd}
    hdlOnChange={(selectedValue) => {
    setTypeDepartamentAdd(selectedValue);
    }}

    value={typeDepartamentAdd}
    />
    </Stack>
    <Stack sx={{ marginTop: "0.5rem" }}>
    <InputLabel
    label="Marcador"
    inputwidth="90%"
    backgroundColor="#EEEEEE"
    setValue={setTypeDigitAdd}
    hdlOnChange={(selectedValue) => {
    setTypeDigitAdd(selectedValue);
    }}
    value={typeDigitAdd}
    />
    </Stack>
    <Stack sx={{ marginTop: "0.5rem" }}>
                
    <InputLabel
    label="Mensaje"
    inputwidth="90%"
    backgroundColor="#EEEEEE"
    setValue={setTypeMessageAdd}
    hdlOnChange={(selectedValue) => {
    setTypeMessageAdd(selectedValue);
    }}

    value={typeMessageAdd}
    />
    </Stack>
    </Stack>
    </Modal>
    )}
    </Stack>
    </Stack>
  );
}

export default Ivr;
```

# Estado del Componente

- searchTerm: Almacena el término de búsqueda para filtrar la lista de IVRs.
- page y rowsPerPage: Almacenan el estado de paginación.
- data y dataQueue: Almacenan los datos recuperados del servidor, especialmente la lista de IVRs y la información de las colas.
- info: Almacena información adicional.
- isLoading: Indica si los datos están siendo cargados.
- isModalVisible y isAddModalVisible: Controlan la visibilidad de los modales de edición y agregación de IVR.
- Estados relacionados con la edición de IVR: typeDepartament, typeMessage, typeDigit, typeDepartamentAdd, typeMessageAdd, typeDigitAdd, saveItem, typeID.
- inputValue y errorText: Almacenan el valor del campo de entrada y los mensajes de error durante la validación.

# Efectos Secundarios

Se utiliza el hook useEffect para cargar las colas al montar el componente y actualizar la lista de IVRs cuando las colas cambian.

- fetchDataAndUpdateTable: Función para actualizar la tabla con los datos más recientes.

# Renderizado del Componente

- Se utiliza el componente Stack de Material-UI para organizar visualmente los elementos.
- Se muestra un título (Typography) con el texto "IVR".
- Se muestra un CardComponent que contiene una barra de búsqueda, una tabla de IVRs y paginación.
- Se utiliza un componente de tabla (Table) para visualizar los IVRs.
- Botones "Agregar" y "Editar" que abren los respectivos modales.
- Modal de edición (Modal) para modificar un IVR existente.
- Modal de agregación (Modal) para agregar un nuevo IVR.

# Funciones Manejadoras de Eventos

- handleChangePage, handleChangeRowsPerPage: Manejan eventos de paginación.
- handleEditClick: Abre el modal de edición y establece los valores iniciales.
- handleCloseModal: Cierra el modal de edición.

# Validación de Entrada

- validateInput: Función que valida el campo de entrada y establece mensajes de error en errorText.

# Funciones para Operaciones CRUD

- saveIVR: Guarda un nuevo IVR.
- addIVR: Realiza la llamada al servidor para agregar un nuevo IVR.
- editIVR: Edita un IVR existente.
- actualizeIVR: Realiza la llamada al servidor para actualizar un IVR existente.
# Componentes Utilizados

CardComponent, ButtonComponent, ButtonAgentsHome, InputComponent, InputLabel, Table, TablePagination, Modal, CircularProgressBar.

# Estilos

Se utilizan estilos de Material-UI y estilos definidos en archivos de estilos externos (stylesAgent, stylesLoader).