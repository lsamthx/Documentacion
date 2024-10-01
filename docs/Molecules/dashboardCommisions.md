---
sidebar_position: 106
---

# DashboardCommisions.js

El componente DashboardCommisions maneja el flujo de trabajo de las llamadas de comisiones, integrando la funcionalidad de llamadas con Twilio y sockets para la comunicación en tiempo real. Utiliza varios estados para gestionar la lógica de las llamadas, la interfaz de usuario, y las interacciones del usuario, asegurando una experiencia de usuario fluida y responsiva.

```js
import React, { useContext, useEffect, useState, useRef } from "react";
import { AuthContext } from "../../Auth/Context";

import socket from "../../utils/Socket";
import * as Pbx from "twilio-client";

import Waiting from "../atoms/Waiting";
import LeftBar from "../organisms/LeftBar";
import ButtonHome from "./ButtonsAgentsHome";
import NavAgents from "./NavAgents";
import NavTab from "./NavNumber";
import useWexClient from "../../hooks/Clients/wexClient,";
import disconnect from "../../assets/disconnect.mp3";
import NavComissions from "./NavComissions";
import ButtonsRecived from "./ButtonsRecivedCall";
import ButtonComponent from "../atoms/ButtonComponent";
import { Stack } from "@mui/material";
import WaitingAgents from "../atoms/WaitingAgents";

function DashboardCommisions() {
  const audioRef = useRef(new Audio(disconnect));
  const [open, setOpen] = useState(false);
  const { payload } = useContext(AuthContext);
  const [showWaiting, setShowWaiting] = useState(true);
  const [receivedCall, setReceivedCall] = useState(false);
  const [callSid, setCallSid] = useState("");
  const [clientTo, setClientTo] = useState("");
  const [pbxToken, setPbxToken] = useState();
  const { finishCallSale } = useWexClient();
  const [callSuccess, setCallSuccess] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonLabel) => {
    setActiveButton(buttonLabel);
  };

  const buttons = [
    { label: "Supervisor" },
    { label: "Soporte Ventas" },
    { label: "Registro Ventas" },
    { label: "Comisiones" },
  ];

  useEffect(() => {
    socket.on("pbx-token", (data) => {
      setPbxToken(data.token);
    });

    socket.on("call-received", (clientTo, callsid) => {
      if (clientTo == payload._id) {
        setShowWaiting(false);
        setClientTo(clientTo);
        setCallSid(callsid);
        console.log(clientTo, callsid);
      }
    });

    socket.emit("tokenPbx", payload._id);
  }, []);

  useEffect(() => {
    if (pbxToken) {
      connectPbxVoiceClient(pbxToken);
    } else {
      socket.on("pbx-token", (data) => {
        setPbxToken(data.token);
      });
    }
  }, [pbxToken]);

  const endCall = () => {
    if (callSid) {
      const body = {
        CallSid: callSid,
        Agente: payload._id, //idconsultor
      };

      finishCallSale(body)
        .then((response) => {
          setShowWaiting(true);
          setCallSuccess(false);
          audioRef.current.play();
        })
        .catch((err) => {
          console.log("error", err);
        });
    } else {
      alert("No hay ninguna llamada activa.");
    }
  };

  socket.on("finish-call-client", (body, caller, called) => {
    //caller es el consultor, called es comisionista
    //cuando cuelga el agente consultor
    if (called[1] == payload._id) {
      setShowWaiting(true);
      setCallSuccess(false);
    }
  });

  const connectPbxVoiceClient = (pbxToken) => {
    const device = new Pbx.Device(pbxToken, {
      allowIncomingWhileBusy: true,
      debug: true,
    });
    device.on("error", (error) => {
      console.error(error);
      setOpen(false);
    });
    device.on("incoming", (connection) => {
      connection.accept();
      setOpen(false);
    });
  };

  return (
    <>
      {callSuccess ? (
        <>
          <NavComissions open={open} setOpen={setOpen} />

          <ButtonsRecived eventFinishCall={() => endCall()} />
        </>
      ) : (
        <>
          {showWaiting ? (
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Stack>
                <WaitingAgents />
              </Stack>
              <Stack direction="column" sx={{ alignItems: "center" }}>
                {buttons.map((button, index) => (
                  <Stack
                    key={index}
                    sx={{
                      width: "100%",
                      alignItems: "center",
                      marginTop: "1.5rem",
                    }}
                  >
                    <ButtonComponent
                      label={button.label}
                      backgroundColor={
                        activeButton === button.label ? "#98D631" : "#0CB7F2"
                      }
                      onClick={() => handleButtonClick(button.label)}
                    />
                  </Stack>
                ))}
              </Stack>
            </Stack>
          ) : (
            <>
              <NavComissions open={open} setOpen={setOpen} />
              <ButtonsRecived eventFinishCall={() => endCall()} />
            </>
          )}
          <NavComissions open={open} setOpen={setOpen} />
        </>
      )}
    </>
  );
}

export default DashboardCommisions;
```

## Imports

Estas son las importaciones de las librerías y componentes necesarios para que el componente DashboardCommisions funcione. Se importa React y varios hooks de React, así como el contexto de autenticación, el socket para la comunicación en tiempo real, Twilio Client para manejar llamadas, y varios componentes internos para la interfaz de usuario.

## Declaración del componente

**audioRef**: Se usa para manejar el sonido de desconexión.
**useState**: Se utiliza para definir varios estados: open, showWaiting, receivedCall, callSid, clientTo, pbxToken, callSuccess, y activeButton.
**useContext**: se utiliza para obtener información del contexto de autenticación, específicamente payload.

## Función para Manejar Clicks en Botones

**handleButtonClick**: Actualiza el estado activeButton cuando se hace clic en un botón. 
**buttons**: Es un array de objetos que define las etiquetas de los botones.

### Uso de useEffect para Configurar Sockets y Token PBX

Este useEffect configura los listeners de socket para recibir el token PBX y manejar llamadas recibidas. También emite un evento para solicitar el token PBX.

### Conexión del Cliente PBX

Este useEffect llama a connectPbxVoiceClient si pbxToken está disponible, o escucha por el evento de token PBX si aún no está disponible.

### Función para Finalizar Llamadas

endCall maneja la finalización de la llamada enviando una solicitud al servidor para finalizar la llamada usando finishCallSale.

### Manejo de Finalización de Llamadas por el Cliente

```js
  socket.on("finish-call-client", (body, caller, called) => {
    if (called[1] == payload._id) {
      setShowWaiting(true);
      setCallSuccess(false);
    }
  });
```

Este evento se dispara cuando el cliente finaliza la llamada, actualizando el estado para mostrar que la llamada ha terminado.

## Conexión del Cliente PBX con Twilio

**connectPbxVoiceClient**: Configura el dispositivo PBX de Twilio con el token y maneja eventos de error y llamadas entrantes.

## Renderización del Componente

```js
  return (
    <>
      {callSuccess ? (
        <>
          <NavComissions open={open} setOpen={setOpen} />
          <ButtonsRecived eventFinishCall={() => endCall()} />
        </>
      ) : (
        <>
          {showWaiting ? (
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Stack>
                <WaitingAgents />
              </Stack>
              <Stack direction="column" sx={{ alignItems: "center" }}>
                {buttons.map((button, index) => (
                  <Stack
                    key={index}
                    sx={{
                      width: "100%",
                      alignItems: "center",
                      marginTop: "1.5rem",
                    }}
                  >
                    <ButtonComponent
                      label={button.label}
                      backgroundColor={
                        activeButton === button.label ? "#98D631" : "#0CB7F2"
                      }
                      onClick={() => handleButtonClick(button.label)}
                    />
                  </Stack>
                ))}
              </Stack>
            </Stack>
          ) : (
            <>
              <NavComissions open={open} setOpen={setOpen} />
              <ButtonsRecived eventFinishCall={() => endCall()} />
            </>
          )}
          <NavComissions open={open} setOpen={setOpen} />
        </>
      )}
    </>
  );
```

Este bloque condicionalmente renderiza diferentes componentes de la interfaz de usuario en función del estado actual:

Si **callSuccess** es verdadero, muestra NavComissions y ButtonsRecived.
Si **showWaiting** es verdadero, muestra un stack de componentes que incluye WaitingAgents y botones de acciones.
Si **showWaiting** es falso, muestra NavComissions y ButtonsRecived.





