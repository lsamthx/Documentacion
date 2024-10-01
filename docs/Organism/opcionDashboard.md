---
sidebar_position: 139
---

# OpcionDashboard.js

El código es un componente de React llamado OpcionDashboard que representa una página de panel de control con pestañas y contenido dinámico.

```js 
import { IconButton, Stack } from "@mui/material";
import BoxHeader from "../atoms/BoxHeader";
import TabsComponent from "../atoms/Tabs";
import React, { useState, useEffect } from 'react';

import DashboardGeneral from "../molecules/DashboardGeneral";
import DashboardTickets from "../molecules/DashboardTickets";
import SelectComponent from "../atoms/Select";
import Navbar from "./Navbar";
import useWexClient from "../../hooks/Clients/wexClient,";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../Auth/Context";
import { EditOutlined } from "@mui/icons-material";

function OpcionDashboard() {
    const { payload } = useContext(AuthContext);
    const [value, setValue] = useState('1')
    const [tabs, setTabs] = useState([{
        label: 'Dashboard General',
        key: '1'
    }, , {
        label: 'Dashboard Tickets',
        key: '2'
    }]);

    const { getServices } = useWexClient();
    const [service, setService] = useState([]);
    const [image, setImage] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const selectedPosition = service.findIndex((option) => option.name === selectedOption);

    const selectedImage = selectedPosition !== -1 ? image[selectedPosition] : '';


    const fetchDataFromAPI = async () => {
        try {

        const apiData = await getServices(payload._id);

        const serviceData = apiData.map((item) => ({
        id: item._id,
        name: item.name,
        }));
        const imageData = apiData.map((item) => item._config.avatarClient);

        setService(serviceData);
        setImage(imageData);
        setSelectedOption(serviceData[0].name);
        } catch (error) {
        console.error(error);
        }
    };

    const navigate = useNavigate();

    const handleOpcionesServicioClick = () => {
    const selectedService = service.find((item) => item.name === selectedOption);

    if (selectedService) {
    const selectedServiceId = selectedService.id;
    const url = `/option-service/${selectedServiceId}`;
    navigate(url);
    }
    };

    useEffect(() => {
    fetchDataFromAPI();
    }, []);

    return (
    <Stack>
    <Stack>
    <Navbar />
    </Stack>
    <Stack>
    <Stack sx={{ background: "linear-gradient(45deg, #7a90ff, #57cdff)" }}>

    <BoxHeader >
    <div style={{ display: "flex" }}>
    <Stack>
    <div style={{
    width: "10rem",
    height: "10rem",
    borderRadius: "50rem",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e0e0e0",
    marginTop: "7rem",
    marginLeft: "5rem"
    }}>
    {selectedImage !== null ? (

    <div>

    <img
    src={selectedImage}
    alt="Imagen del objeto"
    style={{
    maxWidth: "10rem",
    maxHeight: "10rem"
    }}
    />
    </div>
    ) : (
    console.log("No se ha encontrado una imagen")
    )}
    </div>
    </Stack>

    <Stack>

    <div style={{
    marginTop: "9rem",
    marginLeft: "3rem"
    }}>
    <SelectComponent
                                       
    value={selectedOption}
    onChange={handleSelectChange}
    options={service}
    fontSize="3rem"
    >

    </SelectComponent>
    </div>

    <div style={{
    marginLeft: "3rem"
    }}>
    <IconButton
    style={{
    textDecoration: "none",
    color: "white",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem"
    }}
    onClick={handleOpcionesServicioClick}
    >
    <EditOutlined style={{ marginRight: 5 }} />
    Opciones de Servicio
    </IconButton>
    </div>
    </Stack>

    </div>
    </BoxHeader>
    <div style={{
    marginLeft: "2rem",
    padding: "1rem 2rem"
    }}>
    <TabsComponent
    value={value}
    setValue={setValue}
    tabs={tabs}
    />
    </div>

    </Stack>
    <Stack
    sx={{
    margin: 5
    }}
    >

    {value === '1' && <DashboardGeneral />}

    {value === '2' && <DashboardTickets />}
    </Stack>
    </Stack>
    </Stack>
    );
}

export default OpcionDashboard;
```

## Imports

Aquí se importan los componentes y ganchos necesarios, y se inicializan los estados utilizando el gancho useState.

## Componente

Se define el componente funcional OpcionDashboard y se inicializan los estados relacionados con las pestañas, servicios, imágenes y opciones seleccionadas.

## Functions

Se define la función fetchDataFromAPI, que realiza una solicitud a la API para obtener datos de servicios. Además, se utiliza el efecto useEffect para llamar a esta función cuando el componente se monta.

El componente se renderiza utilizando componentes de Material-UI, como Stack. También incluye un encabezado (BoxHeader) con una imagen seleccionada y un menú desplegable para cambiar entre las pestañas del panel de control.