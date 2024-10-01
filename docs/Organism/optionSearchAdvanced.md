---
sidebar_position: 142
---

# OptionSearchAdvanced.js

El componente OptionSearchAdvanced que has desarrollado en React parece diseñado para realizar búsquedas avanzadas utilizando varios elementos de interfaz como selectores, botones y campos de entrada. 

```js 
import React, { useState, useEffect, useContext } from "react";
import { Stack, Typography } from "@mui/material";
import BoxHeader from "../atoms/BoxHeader";
import Navbar from "./Navbar";
import { AuthContext } from "../../Auth/Context";
import stylesReports from "../../styles/Organisms/OpcionesReportes/reports";
import SearchingAdvanced from "../molecules/SearchingAdvanced";
import { SearchOutlined } from "@mui/icons-material";
import IconWithTitle from "../atoms/IconWithTitle";
import stylesDashboard from "../../styles/Organisms/OpcionDashboard/dasboard";
import useMediaQuery from "@mui/material/useMediaQuery";
import CardComponent from "../atoms/CardComponent";
import stylesService from "../../styles/Molecules/ReportesServicio/service";
import ButtonComponent from "../atoms/ButtonComponent";
import useWexClient from "../../hooks/Clients/wexClient,";
import SelectComponent from "../atoms/Select";
import InputComponent from "../atoms/InputComponent";

function OptionSearchAdvanced() {
  const { payload } = useContext(AuthContext);

  const isLargeScreen = useMediaQuery("(min-width: 18in)");

  const spacing = isLargeScreen ? 40 : 10;

  const { getServices, getListCRM } = useWexClient();
  const [selectedOptionRep, setSelectedOptionRep] = useState("");
  const [info, setInfo] = useState("");
  const [buttonColor, setButtonColor] = useState("#b5bac9");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [service, setService] = useState([]);
  const [selectedData, setSelectedData] = useState("");
  const [data, setData] = useState(null);
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
          setSelectedOptionRep(serviceData[0].id); 
          setSelectedData(serviceData[0].name); 
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchDataFromAPI();
  }, [payload._id]);

  const handleSelectChange = (e) => {
    const newValue = e.target.value;
    setSelectedOptionRep(newValue);
    setData([]);

    const initialInputValues = data ? new Array(data.length).fill("") : [];
    setInputValues(initialInputValues);

    const selectedOptionData = service.find(
      (option) => option.name === newValue
    );

    if (selectedOptionData) {
      updateButtonState(selectedOptionData.id, info);
      updateCRM(selectedOptionData.id);
      setSelectedData(selectedOptionData.name);
    }
  };

  const updateCRM = async (selectedId) => {
    try {
      const response = await getListCRM(selectedId);
      setData(response);

      const initialInputValues = response
        ? new Array(response.length).fill("")
        : [];
      setInputValues(initialInputValues);
    } catch (error) {
      console.error(error);
    }
  };

  const initialInputValues = data ? new Array(data.length).fill("") : [];

  const [inputValues, setInputValues] = useState(initialInputValues);

  const handleInputChange = (newValue, index) => {
    const newData = [...data];
    newData[index].value = newValue;
    setData(newData);

    const newInputValues = [...inputValues];
    newInputValues[index] = newValue;
    setInputValues(newInputValues);
  };

  const updateButtonState = (selectedValue, inputValue) => {
    const isSelectValid = selectedValue !== "0";
    const isInputValid = inputValue.trim() !== "";

    const shouldCheckInput = !service.find(
      (option) => option._id === selectedValue
    )?.status;

    const isValid = shouldCheckInput
      ? isSelectValid
      : isSelectValid && isInputValid;

    setIsButtonDisabled(!isValid);
    setButtonColor(isValid ? "white" : "#b5bac9");
  };

  const handleClickSearch = () => {
    if (isButtonDisabled) {
      alert("Hay campos vacíos. Por favor, completa la información.");
    } else {
      alert("Funciona el evento 2");
    }
  };

  return (
    <Stack sx={{ ...stylesReports.global }}>
      <Stack>
        <Navbar />
      </Stack>
      <Stack sx={{ ...stylesReports.color }}>
        <BoxHeader>
          <Stack
            direction="row"
            spacing={spacing}
            style={{ ...stylesDashboard.div, height: "25rem" }}
          >
            <Stack>
              <div
                style={{
                  ...stylesReports.title,
                  width: "30rem",
                  marginTop: "8rem",
                }}
              >
                <IconWithTitle
                  icon={<SearchOutlined fontSize="large" />}
                  title="Búsqueda Avanzada"
                  iconSize="7.5rem"
                />
              </div>
            </Stack>
            <Stack sx={{ width: "35rem" }}>
              <Stack sx={{ ...stylesReports.stack, marginTop: "6rem" }}>
                <div>
                  <Stack sx={{ width: "100%" }}>
                    <Stack sx={{ ...stylesService.stack }}>
                      <SelectComponent
                        colorLabel="white"
                        fontWeight="bold"
                        fontSizeInput="1.5rem"
                        onChange={handleSelectChange}
                        value={selectedOptionRep}
                        valueSelect="name"
                        options={service}
                        label="Servicio"
                        textColor="gray"
                        backgroundColor="white"
                      />

                      <Stack
                        sx={{
                          width: "6rem",
                          marginTop: "1rem",
                          marginLeft: "28rem",
                        }}
                      >
                        <ButtonComponent
                          label="Buscar"
                          onClick={handleClickSearch}
                          backgroundColor={buttonColor}
                          disabled={isButtonDisabled}
                          color="black"
                        />
                      </Stack>
                    </Stack>
                  </Stack>
                </div>
              </Stack>
            </Stack>
          </Stack>
        </BoxHeader>
      </Stack>
      <Stack sx={{ width: "100%", height: "100%" }}>
        <Stack
          sx={{
            width: "40%",
            marginTop: "1rem",
            margin: "2rem",
          }}
        >
          {data && data.length > 0 ? (
            <CardComponent
              title="Campos de Búsqueda"
              color="#023E8A"
              fontSize="1.7rem"
            >
              <Stack>
                {data.map((item, index) => (
                  <Stack key={index}>
                    <Typography
                      color="#8E9BAE"
                      fontSize="1.2rem"
                      marginTop="1rem"
                    >
                      {item.title}
                    </Typography>
                    <Stack
                      sx={{
                        backgroundColor: "white",
                        width: "100%",
                        border: "none",
                      }}
                    >
                      <InputComponent
                        border="0px solid white"
                        value={item.value}
                        onChange={(e) => handleInputChange(e, index)}
                        width="90%"
                        backgroundColor="white"
                      />
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </CardComponent>
          ) : (
            <CardComponent
              title="No existen CRM activos en este servicio."
              color="gray"
              fontSize="1.1rem"
            />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default OptionSearchAdvanced;
```

## Importaciones y Configuraciones

Importación de varios componentes de Material-UI (Stack, Typography, etc.) y componentes locales como BoxHeader, Navbar, SearchingAdvanced, IconWithTitle, CardComponent, ButtonComponent, SelectComponent, e InputComponent.
Utilización de hooks como useContext para el contexto de autenticación (AuthContext), useMediaQuery para la responsividad, y useEffect para manejar efectos secundarios.

## Estado Local

Uso de el estado local con useState para gestionar datos como selectedOptionRep, info, buttonColor, isButtonDisabled, service, selectedData, data, y inputValues.

## Efecto de Carga Inicial

Uso de useEffect para cargar datos iniciales cuando el componente se monta, obteniendo servicios específicos del usuario (payload._id) utilizando funciones como getServices y getListCRM.

## Manejo de Selección y Actualización de Datos

Implementación de funciones como handleSelectChange para manejar cambios en el selector de servicios, actualizar el estado y obtener datos relacionados.
updateCRM se utiliza para actualizar la lista de CRM disponibles según el servicio seleccionado.

## Interacción y Validación de Botones

updateButtonState se encarga de validar si los campos requeridos están completos antes de habilitar el botón de búsqueda.
handleClickSearch maneja la lógica cuando se hace clic en el botón de búsqueda, mostrando alertas según el estado del botón.

## Renderizado de Componentes y Datos

Renderización de Navbar y BoxHeader para la estructura general de la página.
Uso de componentes como SelectComponent para el selector de servicios y ButtonComponent para el botón de búsqueda.
Muestra los campos de búsqueda dinámicamente según los datos obtenidos (data) utilizando CardComponent y InputComponent.