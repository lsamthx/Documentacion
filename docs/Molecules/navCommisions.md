---
sidebar_position: 118
---

# NavComissions.js

Este componente NavComissions maneja la barra de navegación de un agente, permitiendo al agente solicitar una llamada, actualizar su estado, y cerrar sesión. Utiliza múltiples hooks, contextos y componentes de interfaz de usuario para proporcionar una experiencia interactiva y dinámica.

```js
import { useState, useEffect, useRef } from "react";
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
  ContactPhoneRounded
} from "@mui/icons-material";
import { Button, Grid, Snackbar, Stack } from "@mui/material";
import Counter from "../atoms/Counter";
import stylesButton from "../../styles/Atoms/Button/button";
import CustomButton from "../atoms/ButtonAgents";
import { useContext } from "react";
import { AuthContext } from "../../Auth/Context";
import { useNavigate } from "react-router-dom";
import Modal from "../atoms/ModalComponent";
import ButtonComponent from "../atoms/ButtonComponent";
import { Alert } from "@mui/material";
import PhoneInput from "react-phone-input-international";
import "react-phone-input-international/lib/style.css";
import stylesNav from "../../styles/Molecules/NavAgents/navAgents";
import useWexClient from "../../hooks/Clients/wexClient,";
import MuiAlert from "@mui/material/Alert";
import socket from "../../utils/Socket";
import wait from "../../assets/wait.mp3";

function NavComissions(props) {
  const audioRef = useRef(new Audio(wait));
  const { getStatusAgent, getCommisionist} = useWexClient();
  const {
    idAgent = "",
    queueName = "",
    setStatusAgent = () => {},
    open = false,
    setOpen= false,
    callSuccess = false,
    setCallSuccess = () => {},
    callSid = "",
    setCallSid = "",
    setEndedCall = false,
    endedCall = false,
  } = props;
 
  const [commisionist, setCommisionist] = useState("");
  const { payload, logout } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ["Salir"];

  const updateStatus = async (option) => {
    try {
      const body = {
        agent: payload._id,
        status: option,
        socketID: idAgent,
        queue: queueName,
      };
      const response = await getStatusAgent(body);
      setStatusAgent(option);
    } catch (err) {
      console.log("error", err.message);
    }
  };


  const loggoutSession = async () => {
    await updateStatus("offline");
    logout();
    window.location.reload();
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
    loggoutSession();
    event.preventDefault();
      event.returnValue = '';
    };
  
    window.addEventListener('beforeunload', handleBeforeUnload);
  
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);


  const handleSubMenuSelect = async (option) => {
    setSelectedOption(option);
    if (option === "Salir") {
      await loggoutSession(); 
      await updateStatus(option); 
    } else {
      await updateStatus(option); 
    }
  };


  const handleButtonClick = async () => {
    try {
        const body = {
        queue:payload.queue[0],  
        idAgente: payload._id,
        };
        const response = await getCommisionist(body);
        setCommisionist(response.message);
      } catch (err) {
        console.log("error", err.message);
      }

      setOpen(true);
  };


  const buttonTextColor = open ? "#bdbdbd" : "#CE93D8";
  const iconColor = open ? "#bdbdbd" : "#CE93D8";


  return (
    <div
      container
      direction="column"
      style={{
        minHeight: "6vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppBar style={stylesNav.appBar}>
        <Toolbar>
          <Stack direction="row" sx={stylesNav.stack}>
           

          <Stack sx={stylesButton.online}>
      <CustomButton
        icon={
          <ContactPhoneRounded
            fontSize="small"
            sx={{ color: iconColor }}
          />
        }
        text="Solicitar llamada"
        textColor={buttonTextColor} 
        onButtonClick={handleButtonClick}
        isDisabled={open} 
      />
    </Stack>

           

            <Stack sx={stylesButton.agent}>
              <CustomButton
                text="Agente"
                textColor="#72cb10"
                submenuOptions={options}
                onLogout={loggoutSession}
                onSelect={handleSubMenuSelect}
              />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          variant="filled"
          severity="error"
          sx={{ width: "100%" }}
        >
          Tu solicitud ha sido enviada a un Consultor, por favor espera su llamada.
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

export default NavComissions;
```

## Imports

El código comienza importando varios componentes de React y Material-UI, así como otros componentes y hooks personalizados definidos en el proyecto.

## Función NavComissions

### State Hooks y Variables de Estado

Utiliza **useState** para gestionar múltiples estados locales, como commisionist, selectedOption, y open.
useContext se usa para acceder al contexto de autenticación (AuthContext), obteniendo datos como payload y logout.
**useRef** se usa para crear una referencia de audio (audioRef), que se inicializa con un archivo de audio (wait).

### Hooks Personalizados y Componentes

useWexClient proporciona funciones para obtener el estado del agente (getStatusAgent) y el comisionista (getCommisionist).

### Funciones de Gestión de Eventos y Lógica de Negocio

**updateStatus**: Actualiza el estado del agente enviando una solicitud a la API.
**loggoutSession**: Cambia el estado del agente a "offline" y cierra la sesión.
**handleSubMenuSelect**: Gestiona la selección de una opción del submenú, como "Salir".
**handleButtonClick**: Solicita un comisionista y abre un modal de notificación.
**useEffect**: Añade un listener al evento beforeunload del navegador para manejar la desconexión del agente al cerrar la ventana.

### Renderizado

Renderiza un AppBar con un Toolbar que contiene botones personalizados (CustomButton) para solicitar una llamada y gestionar la sesión del agente.
Muestra una notificación (Snackbar) con un mensaje cuando el estado open es verdadero.
