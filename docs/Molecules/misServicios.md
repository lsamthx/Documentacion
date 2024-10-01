---
sidebar_position: 116
---

# MisServicios.js

Este componente MisServicios maneja la visualización, creación, modificación y eliminación de servicios, utilizando múltiples hooks, contextos y componentes de interfaz de usuario para proporcionar una experiencia interactiva y dinámica. 

```js
import React, { useEffect } from "react";
import Navbar from "../organisms/Navbar";
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import BoxHeader from "../atoms/BoxHeader";
import stylesDashboard from "../../styles/Organisms/OpcionDashboard/dasboard";
import { useState } from "react";
import { MiscellaneousServices } from "@mui/icons-material";
import IconWithTitle from "../atoms/IconWithTitle";
import useWexClient from "../../hooks/Clients/wexClient,";
import { useContext } from "react";
import { AuthContext } from "../../Auth/Context";
import CardComponent from "../atoms/CardComponent";
import ButtonComponent from "../atoms/ButtonComponent";
import Modal from "../atoms/ModalComponent";
import stylesAgent from "../../styles/Molecules/Agents/styleAgents";
import globalStyle from "../../styles/globalStyle";
import InputLabel from "../atoms/InputLabel";
import useServices from "../../hooks/useServices";
import AlertComponent from "../atoms/Alert";
import { useTranslation } from "react-i18next";
import ButtonTranslation from "../../Traduccion_ES_EN/ButtonTraslation";
import "../../Traduccion_ES_EN/i18nMiCuenta";


function MisServicios({ userId = "" }) {
  const { payload } = useContext(AuthContext);
  const { getServices } = useWexClient();
  const { updateStatus, createNewService } = useServices();
  const [service, setService] = useState([]);
  const [open, setOpen] = useState(false);
  const [companyName, setCompanyName] = React.useState("");
  const [logo, setLogo] = React.useState(null);
  const [image, setImage] = useState(null);
  const [modalVisibleDelete, setModalVisibleDelete] = useState(false);
  const [itemToDelete, setItemToDelete] = useState({});
  const [status, setNewStatus] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("Rellena todos los campos");
  const [typeAlert, setTypeAlert] = useState("success");
  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);

  const { t } = useTranslation();

  const optionsType = [
    { label: "Whatsapp Inbound", value: "_CHAT_WHATSAPP_" },
    { label: "Whatsapp Outbound", value: "WHASTAPP_SOCIALDOTS_OUTBOUND" }
  ];

  const [companyType, setCompanyType] = useState(optionsType[0].value);

  const fetchDataAndUpdateTable = () => {
    getServices(payload._id, "all").then((response) => {
      setService(response);
    });
  };

  const updateService = async () => {
    try {
      const body = {
        idUser: payload._id,
        nameCompany:companyName,
        typeService: companyType,
        image: logo
      };

      const response = await createNewService(body);

      setMessage("El servicio ha sido creado con éxito");
      setTypeAlert('success');
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
        setCompanyName("");
        setCompanyType(optionsType[0].value);
        setLogo(null);
        setImage(null);
        setOpen(false);
        fetchDataAndUpdateTable();
      }, 3000);

    } catch (err) {
      setMessage(err.message);
      setTypeAlert('error');
      setShowAlert(true);
    }
  };


  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;
  }

  useEffect(() => {
    getAllServices();
  }, []);

  const handleClickTrashClose = () => {
    setModalVisibleDelete(false);
  };

  const getAllServices = async () => {
    try {
      const apiData = await getServices(payload._id, "all");
      setService(apiData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setCompanyName("");
    setCompanyType(optionsType[0].value);
    setLogo(null);
    setImage(null);
    setOpen(false);
  };

  const handleSend = () => {
    updateService();
  };

  const handleLogoChange = (event) => {
    setLogo(event.target.files[0]);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setLogo(e.target.files[0]);
      console.log(e.target.files)
    }
  };

  const handleCancel = () => {
    setCompanyName("");
    setCompanyType(optionsType[0].value);
    setLogo(null);
    setImage(null);
    setOpen(false);
  };

  const handleDeleteClick = (item, status) => {
    setModalVisibleDelete(true);
    setNewStatus(status);
    setItemToDelete(item);
  };

  const confirmDelete = async () => {
    const body = {
      status: status,
      idService: itemToDelete._id,
    };

    const response = await updateStatus(body);
    await getAllServices();
    setModalVisibleDelete(false);
  };

  const validateCompanyName = () => {
    return companyName.trim() !== '';
  };

  const validateCompanyType = () => {
    return companyType.trim() !== '';
  };

  const validateImage = () => {
    return image !== null;
  };

  useEffect(() => {
    setIsAllFieldsFilled(validateCompanyName() && validateCompanyType() && validateImage());
  }, [companyName, companyType, image]);

  const Buttons = () => (
    <>
      <div style={stylesAgent.divButton}>
        <ButtonComponent
          label={t("Welcome.text25")}
          onClick={handleCancel}
          backgroundColor="#f0f0f0"
          color="#708198"
        />
      </div>
      <div style={stylesAgent.divButton}>
        <ButtonComponent
          label={t("Welcome.text24")}
          onClick={handleSend}
          backgroundColor="#8088ff"
          disabled={!isAllFieldsFilled}
        />
      </div>
    </>
  );

  const ButtonDelete = ({ handleDeleteClick }) => (
    <>
      <div style={stylesAgent.divButton}>
        <ButtonComponent
          label={t("Welcome.text27")}
          onClick={handleDeleteClick}
          backgroundColor="red"
          color="white"
        />
      </div>
    </>
  );

  return (
    <Stack>
      <Stack sx={{ zIndex: 1 }}>
        <Navbar />
      </Stack>
      {modalVisibleDelete && (
        <Stack sx={{ zIndex: 2}}>
          <Modal
            title={t("Welcome.text39")}
            buttons={<ButtonDelete handleDeleteClick={confirmDelete} />}
            width="30rem"
            visible={modalVisibleDelete}
            onClose={handleClickTrashClose}
          >
            <Typography style={stylesAgent.typography}>
              {t("Welcome.text40")} 
              {itemToDelete.name}"?
            </Typography>
          </Modal>
        </Stack>
      )}

      <Stack>
        <div className="" style={{ ...stylesDashboard.stack, height: "20rem" }}>
          <BoxHeader>
            <Stack sx={{ marginTop: "8rem", marginLeft: "10rem" }}>
              <IconWithTitle
                icon={<MiscellaneousServices fontSize="large" />}
                title={t("Welcome.text33")}
                iconSize="7.5rem"
              />
            </Stack>
          </BoxHeader>
        </div>
      </Stack>

      

      <Stack style={{ alignItems: "center" }}>
        <Stack style={{ width: "70%", height: "100%" }}>
          <Stack>
            <Stack style={{ marginTop: "2rem", alignItems: "end" }}>
              <ButtonComponent
                label={t("Welcome.text34")}
                onClick={handleClickOpen}
                backgroundColor="#19d9b4"
                width="15%"
              />
            </Stack>
            <Stack sx={{ marginTop: "2rem" }}>
              <CardComponent>
                <TableContainer>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">{t("Welcome.text3")}</TableCell>
                        <TableCell align="center">{t("Welcome.text13")}</TableCell>
                        <TableCell align="center">{t("Welcome.text35")}</TableCell>
                        <TableCell align="center">{t("Welcome.text36")}</TableCell>
                        <TableCell align="center">{t("Welcome.text16")}</TableCell>
                        <TableCell align="center"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {service.map((item, index) => (
                        <TableRow
                          key={index}
                          style={{
                            backgroundColor:
                              index % 2 === 0 ? "#ECECEC" : "white",
                          }}
                        >
                          <TableCell align="center">{item.name}</TableCell>
                          <TableCell align="center">
                            {item.serviceType}
                          </TableCell>
                          <TableCell align="center">
                            {formatDate(item.createdAt)}
                          </TableCell>
                          <TableCell align="center">{item.timeZone}</TableCell>
                          <TableCell align="center">
                            <span
                              style={{
                                fontWeight: "bold",
                                color: item.status ? "#16C60C" : "#E81224",
                              }}
                            >
                              {item.status ? t("Welcome.text37") : t("Welcome.text38")}
                            </span>
                          </TableCell>
                          <TableCell align="center">
                            <button
                              onClick={() =>
                                handleDeleteClick(item, !item.status)
                              }
                              style={{
                                ...globalStyle.statusStyle,
                                background: !item.status
                                  ? "#16C60C"
                                  : "#E81224",
                                cursor: "pointer",
                              }}
                            >
                              {item.status ? t("Welcome.text38") : t("Welcome.text37")}
                            </button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardComponent>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {open && (
        <Stack sx={{ zIndex: 2}}>

        <Modal
          title={t("Welcome.text28")}
          buttons={<Buttons />}
          width="30rem"
          visible={open}
          onClose={handleClose}
        >
          {showAlert && <AlertComponent
            message={message}
            handleClose={() => handleClose(!showAlert)}
            typeAlert={typeAlert}
          />}
          <Stack>
            <Stack>
              <Typography style={{ color: "#8088ff" }}>
                {t("Welcome.text29")}
              </Typography>
            </Stack>
            <Stack style={{ marginTop: "1rem" }}>
              <InputLabel
                label={t("Welcome.text30")}
                inputType="text"
                inputwidth="90%"
                setValue={setCompanyName}
                hdlOnChange={(selectedValue) => {
                  setCompanyName(selectedValue);
                }}
                value={companyName}
              />
              <InputLabel
                label={t("Welcome.text31")}
                inputType="select"
                selectwidth="94%"
                options={optionsType}
                hdlOnChange={(selectedValue) => {
                  setCompanyType(selectedValue);
                }}
                value={companyType}
              />
            </Stack>
            <Stack sx={{ width: "93%" }}>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="logo"
                type="file"
                onChange={handleLogoChange}
              />
              <label htmlFor="logo">
                <Stack style={{ marginTop: "1rem", width: "35%" }}>
                  <ButtonComponent
                    label={t("Welcome.text32")}
                    backgroundColor="#19d9b4"
                    onClick={() => {
                      document.getElementById("outlined-basic").click();
                    }}
                  />
                </Stack>
                <Stack>
                  <input
                    type="file"
                    id="outlined-basic"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                  <Stack sx={{ alignItems: "center" }}>
                    {image && (
                      <img
                        src={image}
                        alt="preview"
                        style={{
                          width: "50%",
                          height: "auto",
                          marginTop: "1rem",
                        }}
                      />
                    )}
                  </Stack>

                  <Stack sx={{ alignItems: "center" }}>
                    <Stack
                      sx={{
                        marginTop: "1rem",
                        width: "22%",
                      }}
                    >
                      {image && (
                        <ButtonComponent
                          label={t("Welcome.text119")}
                          backgroundColor="#c20000"
                          onClick={() => {
                            setImage(null);
                          }}
                        />
                      )}
                    </Stack>
                  </Stack>
                </Stack>
              </label>
            </Stack>
          </Stack>
        </Modal>
        </Stack>
      )}
    </Stack>
  );
}

export default MisServicios;
```

## Imports

El código comienza importando varios componentes de React, componentes de Material-UI (@mui/material) y otros componentes personalizados y hooks definidos en el proyecto.

## Función MisServicios

### State Hooks y Variables de Estado

Utiliza **useState** para gestionar múltiples estados locales, como service, open, companyName, logo, image, modalVisibleDelete, itemToDelete, status, showAlert, message, typeAlert, y isAllFieldsFilled.
**useContext** se usa para acceder al contexto de autenticación (AuthContext), obteniendo datos como payload.

### useTranslation

Utiliza **useTranslation** de react-i18next para habilitar la internacionalización de textos (t).

### Funciones de Gestión de Eventos y Lógica de Negocio

fetchDataAndUpdateTable y getAllServices realizan llamadas a la API para obtener datos de servicios.
updateService y confirmDelete gestionan la creación y actualización de servicios respectivamente, manejando los estados del modal y mostrando alertas según el resultado de la operación.

### Hooks Personalizados y Componentes

useWexClient, useServices, y otros hooks personalizados proporcionan lógica específica para obtener servicios y actualizar estados.

### Renderizado

Renderiza un Navbar (Navbar) y un modal (Modal) condicionalmente.
Presenta una tabla (Table) que muestra servicios existentes con opciones para editar, eliminar y cambiar el estado.
Usa componentes como CardComponent, ButtonComponent, InputLabel, AlertComponent, y otros para estructurar la interfaz de usuario.
