---
sidebar_position: 125
---

# Searching.js

El componente Searching que has mostrado implementa una interfaz de usuario para realizar búsquedas utilizando datos seleccionados y entrados. Utiliza hooks de estado y efecto para manejar la carga inicial de datos y la interacción con la API. Además, utiliza varios componentes de Material-UI y personalizados para crear una interfaz de usuario funcional y responsive.

```js
import React, { useState,useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import stylesService from "../../styles/Molecules/ReportesServicio/service";
import ButtonComponent from "../../components/atoms/ButtonComponent";
import SelectComponent from "../../components/atoms/Select";
import InputComponent from "../atoms/InputComponent";
import useWexClient from "../../hooks/Clients/wexClient,";
import { useContext } from "react";
import { AuthContext } from "../../Auth/Context";
import { useTranslation } from "react-i18next";
import "../../Traduccion_ES_EN/i18nMiCuenta";

function Searching({ onUpdateTableData, onUpdateMessages}) {
  const { payload } = useContext(AuthContext);
  const [selectedOptionRep, setSelectedOptionRep] = useState("");
  const [info, setInfo] = useState("");
  const [buttonColor, setButtonColor] = useState("#b5bac9");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const { getServices,getFolioGeneral,getFolioMessages } = useWexClient();
  const [service, setService] = useState([]);
  const [selectedData, setSelectedData] = useState("");
  const { t } = useTranslation();
  
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const apiData = await getServices(payload._id);
  
        const serviceData = apiData.map((item) => ({
          id: item._id,
          name: item.name,
        }));
        
  
        if (serviceData.length > 0) {
          setService(serviceData);
  
          const storedOption = localStorage.getItem('SelectedOption');
          const initialOption = serviceData[0]?.id;
  
          setSelectedOptionRep(initialOption);
          localStorage.setItem('SelectedOption', initialOption);
  
          const selectedOptionData = serviceData.find(option => option.id === initialOption);
          setSelectedData(selectedOptionData ? selectedOptionData.name : "");
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchDataFromAPI();
  }, [payload._id]);

  const handleRequest = async () => {
    try {
      const body = { folio: info };
      const response = await getFolioGeneral(selectedOptionRep, body);
      const responseMessage = await getFolioMessages(body);
      onUpdateTableData(response);
      onUpdateMessages(responseMessage);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectChange = (e) => {
    const newValue = e.target.value;
    setSelectedOptionRep(newValue);
    const selectedOptionData = service.find(option => option.id === newValue);
    setSelectedData(selectedOptionData ? selectedOptionData.name : "");
    updateButtonState(newValue, info);
  };
  

  const handleInputChange = (newValue) => {
    setInfo(newValue);
    updateButtonState(selectedOptionRep, newValue);
  };

  const updateButtonState = (selectedValue, inputValue) => {
    const isValid = selectedValue !== "0" && inputValue.trim() !== "";
    setIsButtonDisabled(!isValid);
    setButtonColor(isValid ? "#19d9b4" : "#b5bac9");
  };

  const handleClickSearch = () => {
    if (isButtonDisabled) {
      alert("Hay campos vacíos. Por favor, completa la información.");
    } else {
      alert("Funciona el evento 2");
    }
  };

  return (
    <Stack sx={{width:"100%", alignItems:"end"}}>
      <Stack sx={{ ...stylesService.stack}}>
        <SelectComponent
          colorLabel="white"
          fontWeight="bold"
          fontSizeInput="1.5rem"
          onChange={handleSelectChange}
          value={selectedOptionRep}
          valueSelect="id"
          options={service}
          label={t("Welcome.text46")}
          textColor="gray"
          backgroundColor="white"
        />
      </Stack>

    <Stack sx={{width: "100%"}}>
        <Stack>
            <Typography
        color="white"
        fontSize="1.5rem"
        fontWeight="bold"
        marginTop="2rem"
      >
        {t("Welcome.text62")}
      </Typography>
        </Stack>
        
      <Stack
        sx={{
          backgroundColor: "white",
          width:"100%",
          border: "none",
        }}
      >
        <InputComponent
          label={info ? " " : t("Welcome.text63") }
          value={info}
          onChange={handleInputChange}
          fullWidth
          backgroundColor="white"
        />
      </Stack>
    </Stack>
      
      <Stack sx={{ width: "6rem", marginTop: "1rem", marginLeft: "47rem" }}>
        <ButtonComponent
          label={t("Welcome.text60")}
          onClick={handleRequest}
          backgroundColor={buttonColor}
          disabled={isButtonDisabled}
        />
      </Stack>
    </Stack>
  );
}
export default Searching;
```

## Imports

Importa React y varios hooks y componentes de Material-UI necesarios.
stylesService, ButtonComponent, SelectComponent, InputComponent: Importa estilos y componentes personalizados.
**useWexClient**: Hook personalizado para interactuar con servicios relacionados con clientes.
**useContext, AuthContext**: Para gestionar el contexto de autenticación del usuario.
**useTranslation**: Hook de React-i18next para manejar internacionalización.

## Componente Searching Funcional

Utiliza el hook useContext para obtener el contexto de autenticación (AuthContext).
Define varios estados locales utilizando el hook useState para manejar datos como la opción seleccionada, la información de entrada, el color y estado del botón, servicios disponibles, datos seleccionados y traducción.
getServices, getFolioGeneral, getFolioMessages: Funciones proporcionadas por useWexClient para interactuar con la API y obtener datos.

### Hook useEffect

Utiliza useEffect para cargar datos iniciales cuando el componente se monta (payload._id se utiliza para obtener los servicios específicos del usuario autenticado).

### Manejo de Eventos

**handleRequest**: Función para manejar la solicitud de búsqueda con datos ingresados.
**handleSelectChange**: Maneja el cambio en la selección de opciones del servicio.
**handleInputChange**: Maneja el cambio en la entrada de información.
**updateButtonState**: Actualiza el estado del botón según la validez de los datos seleccionados e ingresados.
**handleClickSearch**: Evento para mostrar una alerta si los campos están vacíos o realizar una acción (en este caso, solo muestra una alerta).

## Renderizado

Renderiza varios Stack de Material-UI para estructurar la interfaz.
SelectComponent, Typography, InputComponent, y ButtonComponent se utilizan para representar diferentes partes de la interfaz.
Utiliza t("Welcome.text") para traducir texto usando i18next, según las configuraciones locales cargadas.