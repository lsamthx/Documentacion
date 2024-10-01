---
sidebar_position: 115
---

# MiCuenta.js

El componente MisServicios permite a los usuarios actualizar su nombre de usuario y contraseña, utilizando hooks para manejar el estado y la lógica de actualización, y Material-UI para el diseño. La internacionalización se maneja con useTranslation.

```js
import React, { useContext, useState } from "react";
import Navbar from "../organisms/Navbar";
import { Stack, Typography } from "@mui/material";
import BoxHeader from "../atoms/BoxHeader";
import stylesDashboard from "../../styles/Organisms/OpcionDashboard/dasboard";
import { Person } from "@mui/icons-material";
import IconWithTitle from "../atoms/IconWithTitle";
import CardComponent from "../atoms/CardComponent";
import stylesAgent from "../../styles/Molecules/Agents/styleAgents";
import InputCampaings from "../atoms/InputCampaings";
import ButtonComponent from "../atoms/ButtonComponent";
import stylesCall from "../../styles/Molecules/Calls/calls";
import { AuthContext } from "../../Auth/Context";
import useUser from "../../hooks/useUser";
import AlertComponent from "../atoms/Alert";
import { useTranslation } from "react-i18next";
import "../../Traduccion_ES_EN/i18nMiCuenta";

function MisServicios() {
  const { payload } = useContext(AuthContext);
  const { updateUserName, updatePasswordUser } = useUser();
  const userName = payload?.profile?.name || "";
  const [name, setName] = useState(userName);
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("Rellena todos los campos");
  const [typeAlert, setTypeAlert] = useState("success");

  //#region Translation
  //*TRANSLATION
  const { t } = useTranslation();

  const updateUser = async () => {
    try {
      const body = {
        idUser: payload._id,
        userName: name,
      };

      const response = await updateUserName(body);

      setMessage(response.message);
      setTypeAlert("success");
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    } catch (err) {
      setMessage(err.message);
      setTypeAlert("error");
      setShowAlert(true);
    }
  };

  const updatePassword = async () => {
    try {
      const body = {
        idUser: payload._id,
        password: password,
        oldPasswrod: oldPassword,
      };
      const response = await updatePasswordUser(body);

      setMessage(response.message);
      setTypeAlert("success");
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
        setPassword("");
        setOldPassword("");
      }, 2000);

    } catch (err) {
      setMessage(err.message);
      setTypeAlert("error");
      setShowAlert(true);
    }
  };

  const handleClose = () => {
    setShowAlert(false);
  };

  //#region Styles
  return (
    <Stack>
      <Stack>
        <Stack>
          <Navbar />
          
        </Stack>

        <Stack>
          <div
            style={{
              ...stylesDashboard.stack,
              height: "15rem",
            }}
          >
            <BoxHeader>
              <Stack sx={{ marginTop: "5rem", marginLeft: "5rem" }}>
                <IconWithTitle
                  icon={<Person fontSize="large" />}
                  title={t("Welcome.text1")}
                  iconSize="7.5rem"
                />
              </Stack>
            </BoxHeader>
            
          </div>
        </Stack>
      </Stack>

      <Stack style={stylesAgent.divP}>
        <CardComponent>
          {showAlert && (
            <AlertComponent
              message={message}
              handleClose={() => handleClose(!showAlert)}
              typeAlert={typeAlert}
            />
          )}
          <Stack spacing={{ xs: 1, sm: 2 }} direction="column">
            <Stack spacing={{ xs: 1, sm: 2 }} direction="column">
              <Typography variant="h5" style={stylesCall.typographyd}>
                {t("Welcome.text2")}
              </Typography>

              <InputCampaings
                label={t("Welcome.text3")}
                width="50%"
                height="1.5rem"
                color="gray"
                colorSelect="gray"
                value={name}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setName(() => newValue);
                }}
              />

              <ButtonComponent
                label={t("Welcome.text5")}
                onClick={() => updateUser()}
                backgroundColor="#19d9b4"
                width="20%"
              />
            </Stack>

            <Stack spacing={{ xs: 1, sm: 2 }} direction="column">
              <Typography variant="h5" style={stylesCall.typographyd}>
                {t("Welcome.text6")}
              </Typography>

              <InputCampaings
                label={t("Welcome.text7")}
                width="50%"
                height="1.5rem"
                color="gray"
                colorSelect="gray"
                type="password"
                value={oldPassword}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setOldPassword(() => newValue);
                }}
              />
              <InputCampaings
                label={t("Welcome.text3")}
                width="50%"
                height="1.5rem"
                color="gray"
                colorSelect="gray"
                type="password"
                value={password}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setPassword(() => newValue);
                }}
              />
              <ButtonComponent
                label={t("Welcome.text9")}
                onClick={() => updatePassword()}
                backgroundColor="#19d9b4"
                width="20%"
              />
            </Stack>
          </Stack>
        </CardComponent>
      </Stack>
    </Stack>
  );
}

export default MisServicios;
```

## Imports

Se importan diversos componentes y hooks necesarios para el funcionamiento del componente, incluyendo Material-UI para el diseño, y AuthContext y useUser para la gestión de autenticación y datos del usuario.
useTranslation se utiliza para manejar la internacionalización del componente.

## Definición del Componente MisServicios

Se utiliza useContext para obtener la información del usuario autenticado (payload) desde AuthContext.
Se inicializan varios estados usando useState para gestionar el nombre, la contraseña, el estado de alerta y los mensajes.

## Traducción y Funciones de Actualización

**updateUser** y **updatePassword**: Son funciones asíncronas que manejan la actualización del nombre de usuario y la contraseña, respectivamente.
**handleClose**: Cierra el componente de alerta.

## Renderización del Componente

El componente se renderiza utilizando componentes de Material-UI para organizar y estilizar el contenido.
Se muestra un formulario con entradas (InputCampaings) para el nombre de usuario y la contraseña actual y nueva.
Los botones (ButtonComponent) permiten a los usuarios enviar los cambios para actualizar su nombre de usuario y contraseña.
El componente AlertComponent muestra mensajes de éxito o error basados en las acciones realizadas.

