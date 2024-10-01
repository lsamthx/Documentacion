---
sidebar_position: 137
---

# LeftBar.js

El componente LeftBar es una barra lateral que contiene varias opciones y funcionalidades relacionadas con la gestión de tickets o folios.

```js 
import React, { useState } from "react";
import { Stack, Drawer, Typography, IconButton } from "@mui/material";
import CustomButton from "../atoms/ButtonAgents";
import Tooltip from "@mui/material/Tooltip";
import {
  Restore,
  TimelineRounded,
  TextsmsTwoTone,
  LogoutTwoTone,
  BookmarkBorderTwoTone,
  FormatListBulletedTwoTone,
  LocalOfferOutlined,
  ArrowBackIos,
  PersonOutlineOutlined,
  SmsOutlined,
} from "@mui/icons-material";
import stylesIconNav from "../../styles/Icons/iconsNav";
import DrawerWithTooltip from "../atoms/Drawer";
import InputComponent from "../atoms/InputComponent";
import ButtonComponent from "../atoms/ButtonComponent";
import ListRows from "../atoms/AlternRows";
import Modal from "../atoms/ModalComponent";
import SelectComponent from "../atoms/Select";
import CommentBox from "../atoms/ComentBox";
import TextInput from "../atoms/ComentBox";
import GlobalTable from "../atoms/GlobalTable";

const LeftBar = () => {
  const handleClickCancel = () => {
    alert("Funciona el evento a");
  };

  const optionsid = [
    { _id: "1", name: "General" },
    { _id: "2", name: "Ventas Out" },
    { _id: "3", name: "Ventas In" },
    { _id: "4", name: "Cuentas por cobrar" },
  ];

  const options = [
    "Hola!, ¿Cómo podemos ayudarte el día de hoy?",
    "Promocion activa",
    "Test",
    "Promo walkie talkie",
    "Promoción a ofertar",
  ];

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const [modalVisibleComent, setModalVisibleComent] = useState(false);

  const handleButtonClickComent = () => {
    setModalVisibleComent(true);
  };

  const handleCloseModalComent = () => {
    setModalVisibleComent(false);
  };

  const [modalVisibleHistory, setModalVisibleHistory] = useState(false);

  const handleButtonClickHistory = () => {
    setModalVisibleHistory(true);
  };

  const handleCloseModalHistory = () => {
    setModalVisibleHistory(false);
  };

  const data = [
    [{ title: "TELEFONO", text: "523336624819" }],
    [{ title: "QUEUE", text: "15446" }],
    [{ title: "NOMBRE", text: "Jose Angel" }],
    [{ title: "EDAD", text: "70" }],
    [{ title: "GENERO", text: "M" }],
    [{ title: "CP", text: " 45027" }],
    [{ title: "EMAIL", text: "gopa1@att.net.mx" }],
    [{ title: "AUTO", text: "VOLVO, XC60, 2020" }],
    [{ title: "PRECIO", text: "34824.07" }],
    [{ title: "DATOS", text: "006Dn00000CpR96IAF" }],
  ];

  return (
    <Stack
      sx={{
        backgroundColor: "#2d3539",
        width: "64px",
        position: "fixed",
        top: "109px",
        left: 0,
        bottom: 0,
        display: "flex",
      }}
    >
      <DrawerWithTooltip
        title="Historial de Folio"
        icon={<Restore fontSize="small" sx={{ color: "#8c8c8c" }} />}
        iconTitle={
        <Restore
        fontSize="large"
        sx={{ color: "#8c8c8c", marginBottom: "15px" }}
        />
        }
        top="109px"
        left="4rem"
        nameTip="Historial de Mensajes"
      >
        <Typography sx={{ marginLeft: "30px", fontWeight: "normal" }}>
        Folio:2023655002327
        </Typography>
        <Typography
        sx={{ marginLeft: "30px", fontWeight: "normal", color: "#999999" }}
        >
        16/10/2023 15:19
        </Typography>

        <Typography
        sx={{ marginLeft: "30px", fontWeight: "normal", color: "#999999" }}
        >
        _CALL_
        </Typography>
      </DrawerWithTooltip>

      <DrawerWithTooltip
        title="CRM"
        icon={<TimelineRounded fontSize="small" sx={{ color: "#8c8c8c" }} />}
        iconTitle={
        <PersonOutlineOutlined
        fontSize="large"
        sx={{ color: "#8c8c8c", marginBottom: "15px" }}
        />
        }
        top="109px"
        left="4rem"
        nameTip="CRM"
      >
        <Stack sx={{ marginLeft: "30px", width: "100%" }}>
        <InputComponent
        label="Identificador"
        value="+525573890875"
        variant="outlined"
        />
        </Stack>
        <Stack sx={{ marginLeft: "30px", marginTop: "1rem", width: "100%" }}>
        <InputComponent label="Nombre" value=" Nombre" variant="outlined" />
        </Stack>

        <Stack sx={{ marginLeft: "30px", marginTop: "1rem", width: "7rem" }}>
        <ButtonComponent
        label="Actualizar"
        onClick={handleClickCancel}
        color="white"
        />
        </Stack>
      </DrawerWithTooltip>

      <DrawerWithTooltip
        title="Respuestas Rápidas"
        icon={<SmsOutlined fontSize="small" sx={{ color: "#8c8c8c" }} />}
        iconTitle={
        <SmsOutlined
        fontSize="large"
        sx={{ color: "#8c8c8c", marginBottom: "15px" }}
        />
        }
        top="109px"
        left="4rem"
        nameTip="Respuestas Rápidas"
      >
        <ListRows listaDeItems={options} />
      </DrawerWithTooltip>

      <Stack>
      <Tooltip title="Transferir Folio" arrow placement="right">
      <IconButton
      onClick={handleButtonClick}
      style={stylesIconNav.IconGlobal}
      >
      <LogoutTwoTone fontSize="small" sx={{ color: "#8c8c8c" }} />
      </IconButton>
      </Tooltip>

      {modalVisible && (
      <Modal
      title="Transferir Folio"
      visible={modalVisible}
      onClose={handleCloseModal}
      width="32rem"
      >
      <Typography
      sx={{
      marginLeft: "10px",
      fontWeight: "normal",
      color: "#999999",
      fontSize: "15px",
      }}
      >
      Selecciona un queue a donde será transferido el Folio{" "}
      <span style={{ color: "#2196F3", fontSize: "15px" }}>
      2023655002327
      </span>
      </Typography>

      <Stack
      sx={{
      width: "30rem",
      marginLeft: "10px",
      marginTop: "1rem",
      }}
      >
      <SelectComponent
      options={optionsid}
      label="Queue"
      textColor="#999999"
      colorLabel="#999999"
      backgroundColor="#f4f5f8"
      value={selectedOption}
      onChange={handleChange}
      />
      <Stack direction="row" sx={{ marginTop: "1rem" }}>
      <Stack sx={{ marginLeft: "auto" }}>
      <ButtonComponent
      label="Cancelar"
      color="gray"
      backgroundColor="#F4F5F8"
      />
      </Stack>
      <Stack sx={{ marginLeft: "10px" }}>
      <ButtonComponent label="Transferir Folio" color="white" />
      </Stack>
      </Stack>
      </Stack>
      </Modal>
      )}
      </Stack>

      <Stack>
      <Tooltip title="Agregar Comentarios Ticket" arrow placement="right">
      <button
      onClick={handleButtonClickComent}
      style={stylesIconNav.IconGlobal}
      >
      <BookmarkBorderTwoTone fontSize="small" sx={{ color: "#8c8c8c" }} />
      </button>
      </Tooltip>

      {modalVisibleComent && (
      <Modal
      title="Agregar un nuevo Comentario"
      visible={modalVisibleComent}
      onClose={handleCloseModalComent}
      width="50rem"
      >
      <Stack direction="row" spacing={2} sx={{ marginLeft: "10px" }}>
      <Stack
      sx={{
      width: "25rem",
      marginLeft: "10px",
      marginTop: "1rem",
      }}
      >
      <SelectComponent
      options={optionsid}
      label="Departamento"
      textColor="#999999"
      colorLabel="#999999"
      backgroundColor="#f4f5f8"
      value={selectedOption}
      onChange={handleChange}
      />
      <Stack sx={{ marginTop: "1rem" }}>
      <SelectComponent
      options={optionsid}
      label="Tipo"
      textColor="#999999"
      colorLabel="#999999"
      backgroundColor="#f4f5f8"
      value={selectedOption}
      onChange={handleChange}
      />
      </Stack>

      <Stack sx={{ marginTop: "1rem" }}>
      <SelectComponent
      options={optionsid}
      label="Motivo"
      textColor="#999999"
      colorLabel="#999999"
      backgroundColor="#f4f5f8"
      value={selectedOption}
      onChange={handleChange}
      />
      </Stack>
      </Stack>
      <Stack>
      <Stack sx={{ marginLeft: "20px", width: "25rem" }}>
      <SelectComponent
      options={optionsid}
      label="Cuenta de Cliente"
      textColor="#999999"
      colorLabel="#999999"
      backgroundColor="#f4f5f8"
      value={selectedOption}
      onChange={handleChange}
      />
      </Stack>
      <Stack sx={{ marginTop: "1rem" }}>
      <TextInput
      title="Comentario"
      backgroundColor="#f4f5f8"
      textColor="red"
      width="25rem"
      />
      </Stack>
      </Stack>
      </Stack>
      <Stack
      sx={{ marginLeft: "auto", width: "15rem", marginRight: "2rem" }}
      >
      <ButtonComponent
      label="Guardar Comentario"
      color="white"
      width="2px"
      />
      </Stack>
      </Modal>
      )}
      </Stack>

      <Stack>
      <Tooltip title="Ver Comentarios Ticket" arrow placement="right">
      <button
      onClick={handleButtonClickHistory}
      style={stylesIconNav.IconGlobal}
      >
      <FormatListBulletedTwoTone
      fontSize="small"
      sx={{ color: "#8c8c8c" }}
      />
      </button>
      </Tooltip>{" "}
      {modalVisibleHistory && (
      <Modal
      title="Historial de Comentarios"
      visible={modalVisibleHistory}
      onClose={handleCloseModalHistory}
      width="34rem"
      ></Modal>
      )}
      </Stack>

      <Stack>
      <DrawerWithTooltip
      title="Información"
      icon={
      <LocalOfferOutlined fontSize="small" sx={{ color: "#8c8c8c" }} />
      }
      iconTitle={
      <LocalOfferOutlined
      fontSize="large"
      sx={{ color: "#8c8c8c", marginBottom: "15px" }}
      />
      }
      top="109px"
      left="4rem"
      nameTip="Información de Folio"
      >
      <GlobalTable data={data} />
      </DrawerWithTooltip>
      </Stack>
    </Stack>
  );
};

export default LeftBar;
```