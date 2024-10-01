---
sidebar_position: 105
---

# DashboardAgents.js

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
import disconnect from "../../assets/disconnect.mp3"
import WexChat from "../../views/AgentsHome/components/WexChat";
import { Stack } from "@mui/material";
import IncomingCalls from "./IncomingCalls";
import ButtonsRecived from "./ButtonsRecivedCall";

function DashboardAgents() {
  const audioRef = useRef(new Audio(disconnect));
  const { payload } = useContext(AuthContext);
  const [showWaiting, setShowWaiting] = useState(true);
  const [callAnswered, setCallAnswered] = useState(false);
  const [incomingCallVisible, setIncomingCallVisible] = useState(false);
  const [idAgent, setIDAgent] = useState(payload._id);
  const [queueAgent, setQueueAgent] = useState( payload.queue.length > 0 ? payload.queue[0] : "prueba");
  const [typeAgent, setTypeAgent] = useState("");
  const [pbxToken, setPbxToken] = useState();
  const [statusAgent, setStatusAgent] = useState();
  const [conferencedID, setConferencedID] = useState(null);
  const { finishCall, finishCallSale, getStatusAgent, getCallConsultor} = useWexClient();
  const [data, setData] = useState(null);
  const [callSid, setCallSid] = useState("");
  const [socketID, setSocketID] = useState(null);
  const [callSuccess, setCallSuccess] = useState(false);
  const [dataSale, setDataSale] = useState(null);
  const [endedCall, setEndedCall] = useState(false);
  const [nameAgent, setNameAgent] = useState(null);
  const [responseCalls, setResponseCalls] = useState("");
  const [queue, setQueue] = useState("");
  const [toIdAgent, setToIdAgent] = useState("");
  const [fromIdAgent, setFromIdAgent] = useState("");

  const handleClick = async () => {
    try {
      const body = {
      queue: queue,
      To: toIdAgent,
      From:fromIdAgent
      };
      const response = await getCallConsultor(body);
      setResponseCalls(response.CallSid);
      setCallAnswered(true);
    } catch (err) {
      console.log("error", err.message);
    }
  };

  const handleEndClick = () => {
    if (responseCalls) {
      const body = {
        CallSid: responseCalls,
        Agente: fromIdAgent,
      };

      finishCallSale(body)
        .then((response) => {
          setIncomingCallVisible(false);
          setCallAnswered(false);
          setCallSuccess(false);
          setShowWaiting(true);
          setEndedCall(true);
          audioRef.current.play();
        })
        .catch((err) => {
          console.log("error", err);
        });
    } else {
      alert("No hay ninguna llamada activa.");
    }
    
   
  };

  useEffect(() => {
    changeStatusAgent("Conectado");
  }, []);

  useEffect(() => {
    socket.on("pbx-token", (data) => {
      setPbxToken(data.token);

    });

    socket.on("new-conference", (conferenceID, idAgent) => {
      if (payload._id === idAgent) {
        setConferencedID(conferenceID);
        setShowWaiting(false);
      }
    });

    socket.on("info-request", (idAgente, request) => {
      if(idAgente == payload._id){
        setIncomingCallVisible(true);
      setNameAgent(request?.dataComisionista?.profile?.name)
      setQueue(request?.request?.queue)
      setToIdAgent(request?.request?.idAgente)
      setFromIdAgent(payload._id)
      }
      
    });

    socket.on("disconnect", () => {});
  }, []);

  const changeStatusAgent = async (option) => {
    setStatusAgent(option);
  };

  useEffect(() => {
    if (
      "mediaDevices" in navigator &&
      "getUserMedia" in navigator.mediaDevices
    ) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    }
  }, []);

  useEffect(() => {
    if (statusAgent === "Conectado") {
      // socket.emit('agente', idAgent, queueAgent, typeAgent);
      socket.emit("tokenPbx", idAgent);
      setSocketID(socket.id);
    }
  }, [statusAgent]);

  useEffect(() => {
    if (pbxToken) {
      connectPbxVoiceClient(pbxToken);
    } else {
      socket.on("pbx-token", (data) => {
        setPbxToken(data.token);
      });
    }
  }, [pbxToken]);

  const answerdCall = () => {
    if (conferencedID) {
      socket.emit("join-conference-agent", conferencedID, idAgent);
    }
  };

  const endCall = () => {
    if (conferencedID) {
      const body = {
        conferenceSid: conferencedID,
        Agente: idAgent,
      };

      finishCall(body)
        .then((response) => {
          setData(response);
          setShowWaiting(true);
          setCallSuccess(false);
          setIncomingCallVisible(false);
        })
        .catch((err) => {
          console.log("error", err);
        });
    } else {
      alert("No hay ninguna llamada activa.");
    }
  };

  const endCallSale = () => {
    if (callSid) {
      const body = {
        CallSid: callSid,
        Agente: idAgent,
      };

      finishCallSale(body)
        .then((response) => {
          setCallSuccess(false);
          setShowWaiting(true);
          setEndedCall(true);
          audioRef.current.play();
          setDataSale(response);
        })
        .catch((err) => {
          console.log("error", err);
        });
    } else {
      alert("No hay ninguna llamada activa.");
    }
  };

  socket.on("finish-call-client", (body,caller,called) => {
    //cuando cuelga el cliente comisionista
    if(caller[1] == payload._id){
    setCallSuccess(false);
          setShowWaiting(true);
          setIncomingCallVisible(false);
      setCallAnswered(false);

    }
  });

  const connectPbxVoiceClient = (pbxToken) => {
    const device = new Pbx.Device(pbxToken, {
      allowIncomingWhileBusy: true,
      debug: true,
    });
    device.on("error", (error) => {
      console.error(error);
    });
    device.on("incoming", (connection) => {
      connection.accept();
    });
  };

  return (
    <>
      {callSuccess ? (
        <>
          <NavAgents
            idAgent={idAgent}
            queueName={queueAgent}
            statusAgent={statusAgent}
            setStatusAgent={setStatusAgent}
            callSuccess={callSuccess}
            setCallSuccess={setCallSuccess}
            showWaiting={showWaiting}
            setShowWaiting={setShowWaiting}
            callSid={callSid}
            setCallSid={setCallSid}
            endedCall={endedCall}
            setEndedCall={setEndedCall}
          />
          <ButtonHome
            callSuccess={callSuccess}
            setCallSuccess={setCallSuccess}
            eventFinishCallSale={() => endCallSale()}
          />
        </>
      ) : (
        <>
          <NavAgents
            idSocket={idAgent}
            queueName={queueAgent}
            statusAgent={statusAgent}
            setStatusAgent={setStatusAgent}
            callSuccess={callSuccess}
            setCallSuccess={setCallSuccess}
            showWaiting={showWaiting}
            setShowWaiting={setShowWaiting}
            callSid={callSid}
            setCallSid={setCallSid}
            endedCall={endedCall}
            setEndedCall={setEndedCall}
          />
          {incomingCallVisible ? (
            <>
            <NavAgents/>

            <IncomingCalls 
            callAnswered={callAnswered}
            setCallAnswered={setCallAnswered}
            nameAgent={nameAgent} handleClick={handleClick} handleEndClick={handleEndClick}/>
            </>
          ) : showWaiting ? (
            <Stack direction="column">
            {/*<NavTab />
            <Stack direction="row">
            <LeftBar />
            <WexChat />
        </Stack>*/}
            <Waiting
            textColor="#aaaaaa"
            text="Estamos al día, no hay mas personas esperando."
          />
          </Stack>
            
          ) : (
            <ButtonHome
              eventCall={() => answerdCall()}
              eventFinishCall={() => endCall()}
            />
          )}

          {!showWaiting && <NavTab />}
          {!showWaiting && <LeftBar />}
        </>
      )}
    </>
  );
}

export default DashboardAgents;
```

## Importaciones

Importa todas las bibliotecas y componentes necesarios, incluidas funciones y hooks de Twilio, socket, y otros componentes internos.

## Estados y Referencias

Define todos los estados necesarios para gestionar las llamadas, el estado del agente, y otros detalles importantes.
Usa useRef para manejar el audio de desconexión.

## Funciones de Manejo de Eventos

**handleClick**: Inicia una llamada consultor.
**handleEndClick**: Finaliza una llamada consultor.
**answerdCall**: Acepta una llamada en curso.
**endCall**: Finaliza una llamada en curso.
**endCallSale**: Finaliza una llamada de venta.

## Efectos

useEffect para inicializar el estado del agente, configurar los sockets, solicitar permisos de medios y conectar el cliente PBX.

## Conexión PBX

**connectPbxVoiceClient**: Conecta el cliente PBX de Twilio con el token proporcionado y maneja eventos de errores y llamadas entrantes.

## Renderizado del Componente

Renderiza diferentes componentes y vistas en función del estado actual del agente y la llamada, utilizando condicionales para mostrar los componentes apropiados (como NavAgents, ButtonHome, IncomingCalls, Waiting, NavTab, y LeftBar).