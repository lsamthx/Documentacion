---
sidebar_position: 97
---

# Agentes.md (Molecules)


## Imports

Imports de `src/components/molecules/Agentes.js`:

```jsx
import React, { useState, useEffect } from "react";
import { Typography, Stack, Alert } from "@mui/material";
import useWexClient from "../../hooks/Clients/wexClient,";
import Table from "./Table";
import ButtonComponent from "../atoms/ButtonComponent";
import CircularProgressBar from "../atoms/Downloader";
import { TablePagination } from "@mui/material";
import stylesLoader from "./../../styles/Loader/Loader";
import stylesAgent from "../../styles/Agents/styleAgents";
import CardComponent from "../atoms/CardComponent";
import InputLabel from "../atoms/InputLabel";
import Modal from "../atoms/ModalComponent";
import BoxHeader from "../atoms/BoxHeader";
import TooltipPassword from "../organisms/TooltipPassword";
import useUser from "../../hooks/useUser";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Auth/Context";
import { useContext } from "react";
import AlertComponent from "../atoms/Alert";
```

En esta sección, se están importando diversas bibliotecas y componentes de React, así como algunos hooks personalizados (useWexClient y useUser). Además, se declaran múltiples estados que serán utilizados a lo largo del componente.

## Consts

Inicializamos funciones y estados necesarios para el componente.

```jsx
function Agentes() {
  const { id } = useParams();
  const { payload } = useContext(AuthContext);
  const { getQueues, getInfoGeneral } = useWexClient();
  const { loader, createNewUser } = useUser();
  const [queues, setQueues] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [queue, setQueue] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("_AGENT_");
  const [showAlert, setShowAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [modalVisibleAdd, setModalVisibleAdd] = useState(false);
  const [typeAlert, setTypeAlert] = useState("success");
  ```

## Functions

En esta sección, se definen diversas funciones y eventos del componente, como manejo de modales, acciones de usuario, y el uso de efectos (useEffect) para realizar operaciones asíncronas cuando el componente se monta o se actualiza.

```jsx
  const handleClickCancel = () => {
    setModalVisibleAdd(false);
  };

  const handleModalAdd = async () => {
    try {
      const object = {
        email: email,
        password: password,
        name: name,
        user: email,
        class: userType,
        service: id,
        capacity: capacity,
        queue: [queue],
        associative: payload?._id || "",
      };

      const response = await createNewUser(object);
      setMessageAlert(response?.message || "");
      setShowAlert(!showAlert);

      setTimeout(() => {
        handleCloseModalAdd();
      }, 4000);
    } catch (err) {
      console.log(err);
      setShowAlert(!showAlert);
      setMessageAlert("Error");
    }
  };

  const handleCloseModalAdd = () => {
    setUserType("_AGENT_");
    setPassword("");
    setQueue("");
    setCapacity("");
    setName("");
    setEmail("");
    setModalVisibleAdd(false);
  };

  const optionsProfile = [
    { label: "Agente", value: "_AGENT_" },
    { label: "Administrador", value: "_ADMIN_" },
    { label: "Supervisor", value: "_SUPERVISOR_" },
    { label: "Calidad", value: "_QUALITY_" },
    { label: "Co-Administrador", value: "_COADMIN_" },
  ];

  const optionsService = [
    { label: "Opción 1", value: "opcion1" },
    { label: "Opción 2", value: "opcion2" },
    { label: "Opción 3", value: "opcion3" },
  ];

  const optionsAtentions = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
  ];

  const optionsStatus = [
    { label: "Activo", value: "1" },
    { label: "Suspendido", value: "0" },
    { label: "Baja", value: "10" },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClickAdd = () => {
    setModalVisibleAdd(true);
  };

  const { getUpdateAgents, getServices, getDeleteAgents } = useWexClient();
  const [dataAgents, setDataAgents] = useState(null);
  const [infoAgents, setInfoAgents] = useState(null);
  const [deleteAgents, setDeleteAgents] = useState(null);
  const [infoDeleteAgents, setInfoDeleteAgents] = useState(null);
  const [data, setData] = useState(null);
  const [info, setInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const searchColumns = ["Usuario", "Nombre"]; // Columnas en las que se busca
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [typePassword, setTypePassword] = useState("");
  const [typeName, setTypeName] = useState("");
  const [typeUser, setTypeUser] = useState("");
  const [typeProfile, setTypeProfile] = useState("");
  const [typeService, setTypeService] = useState([]);
  const [service, setService] = useState("");
  const [typeAttention, setTypeAttention] = useState("");
  const [typeQueue, setTypeQueue] = useState("");
  const [typeStatus, setTypeStatus] = useState("");
  const [saveItem, setSaveItem] = useState();
  const [defaultServiceName, setDefaultServiceName] = useState("");
  const [selectedItemService, setSelectedItemService] = useState(null);
  const [saveName, setSaveName] = useState();
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setTypeName("");
    setTypePassword("");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const fetchDataAndUpdateTable = () => {
    getInfoGeneral().then((response) => {
      setData(response.agents);
      setInfo(response.generalInformation[0]);
      setIsLoading(false);
    });
  };

  const handleEditClick = (item, event) => {
    event.preventDefault();
    setIsModalVisible(true);
    console.log("Editar", item);
    setSaveItem(item);
    setTypeUser(item._id);
    setTypeProfile(item.profile.class);
    setTypeName(item.profile.name)
    setTypeAttention(item.capacity);
    setSelectedItemService(item.service);
    setTypeStatus(item.status);

    if (item.service) {
      setService(item.service);
      setDefaultServiceName(getServiceNameById(item.service));
    }

    fetchDataAndUpdateTable();
  };




  const getServiceNameById = (serviceId) => {
    const selectedService = typeService.find(
      (service) => service.value === serviceId
    );
    return selectedService ? selectedService.label : "";
  };
  const [modalVisibleDelete, setModalVisibleDelete] = useState(false);

  const handleDeleteClick = (item, event) => {
    setModalVisibleDelete(true);
    setSaveName(item.profile.name);
    setItemToDelete(item);

    fetchDataAndUpdateTable();
  };

  

  const handleClickTrashClose = () => {
    setModalVisibleDelete(false);
  };

  const deleteUser = (body) => {
    getDeleteAgents(body)
      .then((item) => {
        console.log(item);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const confirmDelete = () => {
    const body = {
      idUser: itemToDelete._id,
      status: "10",
    };
    deleteUser(body);
    console.log("Eliminar", itemToDelete);
    setModalVisibleDelete(false);

    fetchDataAndUpdateTable();
  };




  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getQueuesList = async () => {
    getQueues().then((response) => {
      const listQueue = response[0].queue.map((item) => {
        return {
          label: item.name,
          value: item.queue_str,
        };
      });
      setQueues(listQueue);
    });
  };

  const getServicesList = async () => {
    try {
      const apiData = await getServices(payload._id);

      const serviceData = apiData.map((item) => ({
        label: item.name,
        value: item._id,
      }));


      setTypeService(serviceData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getServicesList();

    if (selectedItemService) {
      setDefaultServiceName(getServiceNameById(selectedItemService));
      setService(selectedItemService);
    }
  }, [selectedItemService]);

  useEffect(() => {
    getInfoGeneral().then((response) => {
      setData(response.agents);
      setInfo(response.generalInformation[0]);
      setIsLoading(false);
    });
    getQueuesList();
    getServicesList();
  }, []);

  useEffect(() => {
    getUpdateAgents().then((response) => {
      setDataAgents(response);
      setInfoAgents(response);
    });
  }, []);

  useEffect(() => {
    getDeleteAgents().then((response) => {
      setDeleteAgents(response);
      setInfoDeleteAgents(response);
    });
  }, []);

  const Buttons = () => (
    <>
      <div style={{ marginRight: "1rem" }}>
        <ButtonComponent
          label="Cancelar"
          onClick={handleClickCancel}
          backgroundColor="#f0f0f0"
          color="#708198"
        />
      </div>
      <div style={{ marginRight: "1rem" }}>
        <ButtonComponent
          label="Guardar"
          onClick={handleModalAdd}
          backgroundColor="#8088ff"
        />
      </div>
    </>
  );

  const ButtonDelete = ({ handleDeleteClick }) => (
    <>
      <div style={{ marginRight: "1rem" }}>
        <ButtonComponent
          label="Eliminar"
          onClick={handleDeleteClick}
          backgroundColor="red"
          color="white"
        />
      </div>
    </>
  );

  if (isLoading) {
    return (
      <div style={{ ...stylesLoader.containerLoader }}>
        <CircularProgressBar />
      </div>
    );
  }

  const filteredData = data
    ? data.filter((item) => {
        return searchColumns.some((column) => {
          if (column === "Usuario") {
            return item.user.toLowerCase().includes(searchTerm.toLowerCase());
          } else if (column === "Nombre") {
            const fullName = item.profile.name;
            return fullName.toLowerCase().includes(searchTerm.toLowerCase());
          }
          return false;
        });
      })
    : [];

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedData = filteredData.slice(startIndex, endIndex);

  const columnTitles = ["Usuario", "Nombre", "Perfil", "Queue", "Estado"];

  function cellRenderer(agentItem, title) {
    return (
      <div style={stylesAgent.render}>
        {title === "Usuario"
          ? agentItem.user
          : title === "Nombre"
          ? agentItem.profile.name
          : title === "Perfil"
          ? agentItem.profile.class
          : title === "Queue"
          ? agentItem.queue
          : title === "Estado"
          ? agentItem.status === 1
            ? "Activo"
            : agentItem.status === 0
            ? "Suspendido"
            : agentItem.status === 10
            ? "Baja"
            : null
          : null}
      </div>
    );
  }

  const ButtonsEdit = () => (
    <>
      <div style={{ marginRight: "1rem" }}>
        <ButtonComponent
          label="Cancelar"
          onClick={handleCloseModal}
          backgroundColor="#f0f0f0"
          color="#708198"
        />
      </div>
      <div style={{ marginRight: "1rem" }}>
        <ButtonComponent
          label="Guardar"
          onClick={() => registerUser()}
          backgroundColor="#8088ff"
        />
      </div>
    </>
  );

  const registerUser = () => {
    

    const body = {
      idUser: typeUser,
      newPassword: typePassword,
      newName: typeName,
      profileClass: typeProfile,
      service: [service],
      simultaneousAttention: typeAttention,
      queue: "VentasOut",
      status: typeStatus,
    };
    registerNewUser(body);

    setIsModalVisible(false);
    setTypeName("");
    setTypePassword("");

    fetchDataAndUpdateTable();
  };

  const registerNewUser = (body) => {
    getUpdateAgents(body)
      .then((item) => {
        console.log(item);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
      fetchDataAndUpdateTable();
  };

  return (
    <Stack style={stylesAgent.divP}>
      <CardComponent>
        <Typography variant="h5" style={stylesAgent.title}>
          Agentes Registrados
        </Typography>
        <div>
          <div style={stylesAgent.divS}>
            <input
              style={stylesAgent.input}
              type="text"
              autoComplete="off"
              placeholder="Buscar por usuario o nombre"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {data && (
            <Stack sx={stylesAgent.stackPag}>
              <Table
                data={displayedData}
                columnTitles={columnTitles}
                cellComponent={cellRenderer}
                showEditColumn={true}
                showDeleteColumn={true}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
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
              <div style={stylesAgent.divT}>
                <ButtonComponent
                  label="Agregar Usuario"
                  onClick={handleClickAdd}
                  backgroundColor="#19d9b4"
                />

                {modalVisibleAdd && (
                  <Modal
                    title="Agregar Usuario"
                    buttons={<Buttons />}
                    width="700px"
                    visible={modalVisibleAdd}
                    onClose={handleCloseModalAdd}
                  >
                    {showAlert && (
                      <AlertComponent
                        message={messageAlert}
                        handleClose={() => setShowAlert(!showAlert)}
                        typeAlert={typeAlert}
                      />
                    )}
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="flex-start"
                      sx={{ textAlign: "left" }}
                    >
                      <Stack sx={{ width: "50%", marginLeft: "1rem" }}>
                        <InputLabel
                          label="Nombre"
                          inputType="text"
                          inputwidth="90%"
                          setValue={setName}
                          value={name}
                        />
                        <InputLabel
                          label="Usuario"
                          inputType="text"
                          inputwidth="90%"
                          setValue={setEmail}
                          value={email}
                        />
                        <InputLabel
                          label="Perfil"
                          inputType="select"
                          selectwidth="95%"
                          options={optionsProfile}
                          hdlOnChange={setUserType}
                        />
                      </Stack>
                      <Stack sx={{ width: "50%", marginLeft: "1rem" }}>
                        {userType === "_AGENT_" && (
                          <>
                            <InputLabel
                              label="Número de atenciones simultaneas"
                              inputType="select"
                              selectwidth="90%"
                              options={optionsAtentions}
                              hdlOnChange={setCapacity}
                            />
                            <InputLabel
                              label="Queue"
                              inputType="select"
                              selectwidth="90%"
                              options={queues}
                              hdlOnChange={setQueue}
                            />
                          </>
                        )}
                        <InputLabel
                          label="Estatus"
                          inputType="select"
                          selectwidth="90%"
                          options={optionsStatus}
                        />

                        <Stack>
                          <InputLabel
                            label="Contraseña"
                            inputType="password"
                            inputwidth="85%"
                            setValue={setPassword}
                            value={password}
                          />

                          <TooltipPassword />
                        </Stack>
                      </Stack>
                    </Stack>
                  </Modal>
                )}
              </div>
              {isModalVisible && (
                <Modal
                  title="Editar Usuario"
                  buttons={<ButtonsEdit />}
                  width="700px"
                  visible={isModalVisible}
                  onClose={handleCloseModal}
                >
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Stack sx={{ width: "50%", marginLeft: "1rem" }}>
                      <InputLabel
                        label="Nombre"
                        inputType="text"
                        inputwidth="90%"
                        setValue={setTypeName}
                        hdlOnChange={(selectedValue) => {
                          setTypeName(selectedValue);
                        }}
                        value={typeName}
                      />
                      <InputLabel
                        label={saveItem ? "Usuario" : ""}
                        value={saveItem ? saveItem.user : ""}
                        inputType="text"
                        inputwidth="90%"
                      />
                      <InputLabel
                        label="Perfil"
                        inputType="select"
                        selectwidth="95%"
                        options={optionsProfile}
                        hdlOnChange={(selectedValue) => {
                          setTypeProfile(selectedValue);
                        }}
                        value={typeProfile}
                      />
                      <InputLabel
                        label="Servicio"
                        inputType="select"
                        selectwidth="95%"
                        options={typeService}
                        hdlOnChange={setService}
                        value={defaultServiceName}
                      />
                    </Stack>
                    <Stack sx={{ width: "50%", marginLeft: "1rem" }}>
                      {userType === "_AGENT_" && (
                        <>
                          <InputLabel
                            label="Número de atenciones simultaneas"
                            inputType="select"
                            selectwidth="90%"
                            options={optionsAtentions}
                            hdlOnChange={(selectedValue) => {
                              setTypeAttention(selectedValue);
                            }}
                            value={typeAttention}
                          />
                          <InputLabel
                            label="Queue"
                            inputType="select"
                            selectwidth="90%"
                            options={queues}
                            hdlOnChange={setTypeQueue}
                          />
                        </>
                      )}
                      <InputLabel
                        label={saveItem ? "Status" : ""}
                        inputType="select"
                        selectwidth="90%"
                        options={optionsStatus}
                        hdlOnChange={(selectedValue) => {
                          setTypeStatus(selectedValue);
                        }}
                        value={typeStatus}
                      />
                      <InputLabel
                        label="Cambiar contraseña"
                        inputType="password"
                        inputwidth="85%"
                        value={typePassword}
                        setValue={setTypePassword}
                      />

                      <TooltipPassword />
                    </Stack>
                  </Stack>
                </Modal>
              )}
            </Stack>
          )}
        </div>
        {modalVisibleDelete && (
          <Modal
            title="Eliminar Agente"
            buttons={<ButtonDelete handleDeleteClick={confirmDelete} />}
            width="30rem"
            visible={modalVisibleDelete}
            onClose={handleClickTrashClose}
          >
            <Typography
              style={{
                fontSize: "1.2rem",
                color: "#4C4C4C",
                marginTop: "1rem",
                opacity: "0.7",
              }}
            >
              ¿Estás seguro de que deseas eliminar a {saveName}?
            </Typography>
          </Modal>
        )}
      </CardComponent>
    </Stack>
  );
}

export default Agentes;
```

Esta sección representa el cuerpo principal del componente, donde se encuentran los elementos JSX que serán renderizados. Incluye la estructura del componente, la lógica condicional para mostrar o no ciertos elementos, y la integración de otros componentes personalizados.