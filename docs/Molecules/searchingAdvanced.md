---
sidebar_position: 126
---

# SearchingAdvanced.js

El componente SearchingAdvanced proporciona una interfaz avanzada de búsqueda que permite seleccionar un servicio, ingresar y validar información adicional dinámicamente, y realizar búsquedas con validación de campos. Utiliza hooks de estado y efecto para manejar la carga inicial de datos y la interacción con la API, junto con componentes de Material-UI para una interfaz de usuario moderna y funcional.

```js
import React, { useState, useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import stylesService from "../../styles/Molecules/ReportesServicio/service";
import ButtonComponent from "../../components/atoms/ButtonComponent";
import useWexClient from "../../hooks/Clients/wexClient,";
import SelectComponent from "../../components/atoms/Select";
import InputComponent from "../atoms/InputComponent";
import { useContext } from "react";
import { AuthContext } from "../../Auth/Context";

function SearchingAdvanced({}) {
  const { payload } = useContext(AuthContext);
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

          const storedOption = localStorage.getItem("SelectedOption");
          const initialOption = storedOption || serviceData[0]?.id;

          setSelectedOptionRep(initialOption);
          localStorage.setItem("SelectedOption", initialOption);

          const selectedOptionData = serviceData.find(
            (option) => option.id === initialOption
          );
          setSelectedData(selectedOptionData ? selectedOptionData.name : "");
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
    } catch (error) {
      console.error(error);
    }
  };

  const [inputValues, setInputValues] = useState(new Array(data.length).fill('')); 

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
      </Stack>

      <Stack sx={{ width: "100%" }}>
        <Stack>
          <Typography
            color="#023E8A"
            fontSize="2rem"
            fontWeight="bold"
            marginTop="2rem"
          >
            Campos de Búsqueda
          </Typography>

          {data !== null &&
            data.map((item, index) => (
              <Stack key={index}>
                <Typography
                  color="white"
                  fontSize="1.5rem"
                  fontWeight="bold"
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
                    label={
                      item.value ? " " : `Aquí va un ejemplo de ${item.title}`
                    }
                    value={item.value}
                    onChange={(e) => handleInputChange(e, index)} //crear constante con los datos de data dentro de handleinputchange
                    //data en la posicion de index
                    fullWidth
                    backgroundColor="white"
                  />
                </Stack>
              </Stack>
            ))}
        </Stack>
      </Stack>

      <Stack sx={{ width: "6rem", marginTop: "1rem", marginLeft: "28rem" }}>
        <ButtonComponent
          label="Buscar"
          onClick={handleClickSearch}
          backgroundColor={buttonColor}
          disabled={isButtonDisabled}
          color="black"
        />
      </Stack>
    </Stack>
  );
}
export default SearchingAdvanced;
```

## Imports

Importa React y varios hooks y componentes de Material-UI necesarios.
**stylesService, ButtonComponent, SelectComponent, InputComponent**: Importa estilos y componentes personalizados.
**useWexClient**: Hook personalizado para interactuar con servicios relacionados con clientes.
**useContext, AuthContext**: Para gestionar el contexto de autenticación del usuario.

## Componente SearchingAdvanced Funcional

Utiliza el hook useContext para obtener el contexto de autenticación (AuthContext).
Define varios estados locales utilizando el hook useState para manejar datos como la opción seleccionada, información de entrada, color y estado del botón, servicios disponibles, datos seleccionados y datos adicionales (data).

### Hook useEffect

Utiliza useEffect para cargar datos iniciales cuando el componente se monta (payload._id se utiliza para obtener los servicios específicos del usuario autenticado).

## Manejo de Eventos

**handleSelectChange**: Maneja el cambio en la selección de opciones del servicio.
**updateCRM**: Obtiene y actualiza datos adicionales (data) basados en la opción seleccionada.
**handleInputChange**: Maneja el cambio en la entrada de información, actualizando data y validando el estado del botón.
**updateButtonState**: Actualiza el estado del botón basado en la validez de la selección y la entrada.
**handleClickSearch**: Evento para mostrar una alerta si los campos están vacíos o realizar una acción (en este caso, solo muestra una alerta).

## Renderizado

Renderiza varios Stack de Material-UI para estructurar la interfaz.
SelectComponent, Typography, InputComponent, y ButtonComponent se utilizan para representar diferentes partes de la interfaz.
Utiliza data.map para iterar sobre los datos adicionales (data) y renderizar campos de entrada dinámicamente.
Utiliza t("Welcome.text") para traducir texto (no se incluyó en este ejemplo).