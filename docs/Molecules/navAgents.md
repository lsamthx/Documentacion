---
sidebar_position: 117
---

# NavAgents.js (Molecules)

Este componente proporciona una barra de navegación con varias funcionalidades, incluida la capacidad de realizar llamadas y gestionar el estado del agente. También incorpora un diseño responsivo y utiliza varios componentes y estilos de Material-UI para una apariencia moderna y atractiva.

```js
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Token,
  NotificationsRounded,
  Call,
  ShoppingCartRounded,
  AccessTimeRounded,
  EmailRounded,
  TimelineRounded,
  PersonRounded,
} from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import Counter from "../atoms/Counter";
import stylesButton from "../../styles/Button/button";
import CustomButton from "../atoms/ButtonAgents";
import { useContext } from "react";
import { AuthContext } from "../../Auth/Context";
import { useNavigate } from "react-router-dom";
import Modal from "../atoms/ModalComponent";
import ButtonComponent from "../atoms/ButtonComponent";
import { Alert } from "@mui/material";
import PhoneInput from "react-phone-input-international";
import "react-phone-input-international/lib/style.css";
import stylesNav from "../../styles/NavAgents/navAgents";

function NavAgents() {
  const handleClick = () => {
  if (validationError) {
  alert("Aun hay errores en el input");
  } else {
  alert("Funciona tu llamada");
  }
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const [validationError, setValidationError] = useState("");
  const [phones, setPhones] = useState("");

  useEffect(() => {
  const initialError = validatePhoneNumber(phoneNumber);
  setValidationError(initialError);
  }, [phones]);

  const validatePhoneNumber = (value) => {
  if (value.trim() === "") {
  return "Este campo es obligatorio";
  } else if (!/^\d+$/.test(value)) {
  return "Solo se aceptan números.";
  } else if (value.length !== 12) {
  return "Se necesitan 10 caracteres.";
  }
  return "";
  };
  
  const handleInputChange = (value) => {
  const error = validatePhoneNumber(value);
  setValidationError(error);
  setPhoneNumber(value);
  };

  const handlePhoneInputChange = (phone) => {
  const error = validatePhoneNumber(phone);
  setValidationError(error);
  setPhones(phone);
  handleInputChange(phone);
  };

  const options = ["Conectado", "BackOffice", "Comida", "Baño", "Salir"];
  const { payload, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState(null);

  const loggoutSession = () => {
  logout();
  navigate("/", {
  replace: false,
  });
  };

  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
  if (selectedOption === "BackOffice") {
  setModalVisible(true);
  }
  };

  const handleCloseModal = () => {
  setModalVisible(false);
  };

  const handleSubMenuSelect = (option) => {
  console.log("Opción seleccionada:", option);
  setSelectedOption(option);
  };

  return (
  <div>
  <AppBar
  style={{
  backgroundColor: "white",
  display: "",
  overflow: "hidden",
  transition: "0.4s",
  position: "fixed",
  boxShadow:"none",
  width: "100%",
  }}

  position="fixed"
  >
  <Toolbar>
  <Stack direction="row" sx={{ marginLeft: "auto" }}>
  <Stack
  sx={
  selectedOption === "BackOffice"
  ? { backgroundColor: "#72cb10", ...stylesButton.backOffice }
  : stylesButton.call
  }
  >

  <CustomButton
  icon={
  <Call
  fontSize="small"
  sx={stylesButton.callIcon}
  onClick={handleButtonClick}
  />
  }
  />
  </Stack>

  <Stack sx={stylesButton.online}>
  <CustomButton
  icon={
  <ShoppingCartRounded
  fontSize="small"
  sx={{ color: "#72cb10" }}
  />
  }
                
  text="Tomar Folio"
  textColor="#72cb10"
  />
  </Stack>

  <Stack sx={stylesButton.timer}>
  <CustomButton
  icon={
  <AccessTimeRounded
  fontSize="small"
  sx={{ color: "#FB8C00" }}
  />
  }
  text={<Counter color="#FB8C00" />}
  />
  </Stack>

  <Stack sx={stylesButton.email}>
  <CustomButton
  icon={
  <EmailRounded fontSize="small" sx={{ color: "#29B6F6" }} />
  }
  />
  </Stack>

  <Stack sx={stylesButton.notification}>
  <CustomButton
  icon={
  <NotificationsRounded
  fontSize="small"
  sx={{ color: "#FB8C00" }}
  />
  }
  />
  </Stack>

  <Stack sx={stylesButton.timeline}>
  <CustomButton
  icon={
  <TimelineRounded fontSize="small" sx={{ color: "#29B6F6" }} />
  }
  text="VentasOut"
  textColor="#29B6F6"
  />
  </Stack>

  <Stack sx={stylesButton.online}>
  <CustomButton
  icon={
  <PersonRounded fontSize="small" sx={{ color: "#72cb10" }} />
  }
  text="Conectado"
  textColor="#72cb10"
  />
  </Stack>

  <Stack sx={stylesButton.agent}>
  <CustomButton
  submenuTitle="ACTIVIDADES"
  submenuIcon={<Token fontSize="small" />}
  text="Agente"
  textColor="#CE93D8"
  submenuOptions={options}
  onLogout={loggoutSession}
  onSelect={handleSubMenuSelect}
  />
  </Stack>
  </Stack>
  {modalVisible && (
  
  <Modal
  title="Realizar Llamada"
  visible={modalVisible}
  onClose={handleCloseModal}
  width="34rem"
  >
  <Stack sx={{ alignItems: "center" }}>
  <Stack sx={{}}>
  <PhoneInput
  country={"mx"}
  value={phones}
  onChange={(phone) => handlePhoneInputChange(phone)}
  inputStyle={{
  borderColor:validationError ? "red" : "#A5A5A5", 
  width:"30rem",
  height:"3rem"
  }}
  dropdownStyle={stylesNav.dropdown}
  />
  </Stack>
  
  {validationError && (
  <Stack sx={{ width: "90%", marginTop: "1rem" }} spacing={2}>
  <Alert severity="error">{validationError}</Alert>
  </Stack>
  )}
  </Stack>
  <Stack direction="row" sx={{ marginTop: "1rem" }}>
  <Stack sx={{ marginLeft: "auto", width: "7rem" }}>
  <ButtonComponent
  label="Cancelar"
  color="gray"
  backgroundColor="#F4F5F8"
  />
  </Stack>
    
  <Stack sx={{ marginLeft: "1rem", width: "7rem" }}>
  <ButtonComponent
  label="Llamar"
  color={validationError ? "gray" : "white"}
  backgroundColor={validationError ? "#F4F5F8" : "blue"}
  onClick={handleClick}
  />
  </Stack>
  </Stack>
  </Modal>
  )}
  </Toolbar>
  </AppBar>
  </div>
  );
}

export default NavAgents;
```

# Imports

Se importan los componentes y estilos necesarios de la biblioteca Material-UI.
Además, se importan algunos iconos y otros componentes locales como Counter, CustomButton, Modal, ButtonComponent, Alert, y PhoneInput.

# Estado y Efectos

- Se utilizan estados (useState) para manejar el número de teléfono, los errores de validación y otras opciones de la barra de navegación.
- Se utiliza el efecto (useEffect) para validar el número de teléfono al cambiar el estado phones.

# Funciones de Validación

Se implementa la función validatePhoneNumber para validar el número de teléfono. Esta función verifica si el número es obligatorio, contiene solo dígitos y tiene una longitud específica.

# Manejo de Eventos de Entrada

Se utiliza la función handleInputChange para manejar cambios en la entrada del número de teléfono.
La función handlePhoneInputChange maneja cambios en el componente PhoneInput.

# Función de Llamada y Logout

- La función handleClick muestra una alerta si hay errores de validación; de lo contrario, muestra otra alerta indicando que la llamada funciona.
- La función loggoutSession maneja el cierre de sesión.

# Funciones de Modal

handleButtonClick se llama al hacer clic en el botón de llamada (Call). Muestra un modal si la opción seleccionada es "BackOffice".
handleCloseModal cierra el modal.

# Función de Submenú

handleSubMenuSelect maneja la selección de opciones del submenú.

# Interfaz de Usuario (UI)

- Se utiliza AppBar y Toolbar de Material-UI para la estructura de la barra de navegación.
- Se colocan varios botones con iconos en la barra de herramientas, cada uno representando una funcionalidad específica (llamada, tomar folio, temporizador, correo, notificaciones, ventas, estado en línea y actividades de agente).
- El botón de actividades de agente muestra un submenú con opciones como "Conectado", "BackOffice", "Comida", "Baño" y "Salir".
- Si se selecciona "BackOffice", se muestra un modal para realizar una llamada, que incluye un campo de entrada de número de teléfono y botones de cancelar y llamar.

# Estilos

- Se utilizan estilos de Material-UI y estilos locales (stylesButton, stylesNav) para personalizar la apariencia de los componentes.

# Responsive Design

El diseño utiliza un enfoque responsivo, como se indica en la propiedad width: "100%" de AppBar y position: "fixed".