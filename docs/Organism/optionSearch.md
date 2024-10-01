---
sidebar_position: 141
---

# OptionSearch.js

El componente OptionSearch tiene una funcionalidad orientada a la presentación de datos tabulares y mensajes relacionados con la búsqueda y visualización de registros. 

```js 
import React, { useState, useContext,useEffect } from "react";
import dayjs from "dayjs";
import { Stack, Typography } from "@mui/material";
import BoxHeader from "../atoms/BoxHeader";
import Navbar from "./Navbar";
import { AuthContext } from "../../Auth/Context";
import stylesReports from "../../styles/Organisms/OpcionesReportes/reports";
import Searching from "../molecules/Searching";
import CardComponent from "../atoms/CardComponent";
import IconWithTitle from "../atoms/IconWithTitle";
import { RemoveRedEyeOutlined } from "@mui/icons-material";
import stylesDashboard from "../../styles/Organisms/OpcionDashboard/dasboard";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ModalReport from "../../views/OptionDashboard/ServiceReports/components/ModalReport";
import stylesLoader from "../../styles/Molecules/Loader/Loader";
import CircularProgressBar from "../atoms/Downloader";

import { useTranslation } from "react-i18next";
import ButtonTranslation from "../../Traduccion_ES_EN/ButtonTraslation";
import "../../Traduccion_ES_EN/i18nMiCuenta";

function OptionSearch() {
  const [tableData, setTableData] = useState("");
  const [tableMessages, setTableMessages] = useState("");
  const { payload } = useContext(AuthContext);
  const [info, setInfo] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [audio, setAudio] = useState([]);
  const isLargeScreen = useMediaQuery("(min-width: 18in)");
  const { t } = useTranslation();

  const spacing = isLargeScreen ? 40 : 10;

  const openModalForAudio = (value = "") => {
    setAudio(value);
    setShowModal(true);
  };

  const handleUpdateTableData = (data) => {
    setTableData(data);
  };

  const handleUpdateTableMessages = (data) => {
    setTableMessages(data);
  };

  const formattedMessages = tableMessages && tableMessages.messages ? tableMessages.messages.map((item, index) => {
    const date = new Date(item.dateSend);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

    return {
      formattedDate: formattedDate,
      formattedTime: formattedTime,
    };
}) : [];

  const getStatusText = (status) => {
    switch (status) {
      case 0:
        return t("Welcome.text41")
      case 1:
        return t("Welcome.text42")
      case 4:
        return t("Welcome.text43")
      default:
        return t("Welcome.text44")
    }
  };

  const statusText = getStatusText(tableData.status);
  let formattedCloseAt = '-';
  let formattedAssignedAt = '-';

  if (tableData.closeAt !== null) {
    formattedCloseAt = dayjs(tableData.closeAt).format("DD/MM/YYYY. h:mm:ss a");
  }

  if (tableData.assignedAt !== null) {
    formattedAssignedAt = dayjs(tableData.assignedAt).format("DD/MM/YYYY. h:mm:ss a");
  }
  
  return (
    <Stack sx={{ ...stylesReports.global }}>
      <Stack>
        <Navbar />
      </Stack>
      <Stack className="" sx={{ ...stylesReports.color }}>
        <BoxHeader>
          <Stack
            direction="row"
            spacing={spacing}
            style={{ ...stylesDashboard.div }}
          >
            
            <Stack>
              <div style={{ ...stylesReports.title }}>
                <IconWithTitle
                  icon={<RemoveRedEyeOutlined fontSize="large" />}
                  title={t("Welcome.text60")}
                  iconSize="7.5rem"
                />
              </div>
            </Stack>
            <Stack sx={{ width: "40rem" }}>
              <Stack sx={{ marginTop: "3rem", padding: "3rem" }}>
                <div>
                  <Searching
                    userId={payload._id}
                    onUpdateTableData={handleUpdateTableData}
                    onUpdateMessages={handleUpdateTableMessages}
                  />
                </div>
              </Stack>
            </Stack>
          </Stack>
        </BoxHeader>
      </Stack>
      <Stack sx={{ ...stylesLoader.loader }}>
      
      </Stack>
      <Stack sx={{ alignItems: "center", width: "100%", height: "100%" }}>
        <ModalReport
          open={showModal}
          uriAudio={audio}
          handleClose={() => setShowModal(!showModal)}
        />
        {tableData && tableData.message ? (
          <Stack
            style={{
              padding: "2rem 0",
              width: "60%",
            }}
          >
            <CardComponent>
              <Typography
                style={{
                  textAlign: "center",
                  color: "black",
                  marginBottom: "1.5rem",
                  opacity: "0.7",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                {tableData.message}
              </Typography>
            </CardComponent>
          </Stack>
        ) : (
          <Stack
            style={{
              padding: "1.5rem 0",
              width: "60%",
            }}
          >
            {tableData ? (
              <Stack
                direction="column"
                style={{
                  padding: "2rem 0",
                  width: "100%",
                }}
              >
                <Stack>
                  <CardComponent>
                    <Stack>
                      <Typography
                        style={{
                          textAlign: "left",
                          color: "black",
                          marginBottom: "1.5rem",
                          opacity: "0.7",
                          fontWeight: "bold",
                          fontSize: "1.4rem",
                        }}
                      >
                        {t("Welcome.text45")}{tableData.folio}
                      </Typography>
                      <TableContainer style={{ width: "100%" }}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                  fontWeight: "bold",
                                  color: "#7085A9",
                                  width: "6%",
                                }}
                              >
                                {t("Welcome.text46")}
                              </TableCell>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                  fontWeight: "bold",
                                  color: "#7085A9",
                                  width: "6%",
                                }}
                              >
                                {t("Welcome.text47")}
                              </TableCell>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                  fontWeight: "bold",
                                  color: "#7085A9",
                                  width: "6%",
                                }}
                              >
                                {" "}
                                {t("Welcome.text48")}
                              </TableCell>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                  fontWeight: "bold",
                                  color: "#7085A9",
                                  width: "6%",
                                }}
                              >
                                {t("Welcome.text49")}
                              </TableCell>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                  fontWeight: "bold",
                                  color: "#7085A9",
                                  width: "6%",
                                }}
                              >
                                {t("Welcome.text50")}
                              </TableCell>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                  fontWeight: "bold",
                                  color: "#7085A9",
                                  width: "6%",
                                }}
                              >
                                {t("Welcome.text51")}
                              </TableCell>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                  fontWeight: "bold",
                                  color: "#7085A9",
                                  width: "8%",
                                }}
                              >
                                {t("Welcome.text52")}
                              </TableCell>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                  fontWeight: "bold",
                                  color: "#7085A9",
                                  width: "6%",
                                }}
                              >
                                {t("Welcome.text53")}
                              </TableCell>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                  fontWeight: "bold",
                                  color: "#7085A9",
                                  width: "10%",
                                }}
                              >
                                {t("Welcome.text54")}
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow
                              key={tableData._id}
                              style={{ backgroundColor: "#ECECEC" }}
                            >
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                  color: "#708198",
                                }}
                              >
                                {tableData.serviceName}
                              </TableCell>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                  color: "#708198",
                                }}
                              >
                                {tableData.phoneNumber}
                              </TableCell>
                              <TableCell
                                sx={{
                                  color: "#8089FF",
                                }}
                              >
                                {tableData.folio}
                              </TableCell>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                  color: "#708198",
                                }}
                              >
                                {tableData.metaData &&
                                tableData.metaData.urlRecordVoice ? (
                                  <a
                                    onClick={() => {
                                      openModalForAudio(
                                        tableData.metaData.urlRecordVoice
                                      );
                                    }}
                                    style={{
                                      textDecoration: "underline",
                                      color: "#8E91FB",
                                      fontWeight: "bold",
                                      cursor: "pointer",
                                    }}
                                  >
                                    Abrir
                                  </a>
                                ) : (
                                  "-"
                                )}
                              </TableCell>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                  color: "#708198",
                                }}
                              >
                                {formattedAssignedAt}
                              </TableCell>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                  color: "#708198",
                                }}
                              >
                                {formattedCloseAt}
                              </TableCell>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                  color: "#708198",
                                }}
                              >
                                {statusText}
                              </TableCell>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                  color: "#708198",
                                }}
                              >
                                {tableData.classification &&
                                tableData.classification[0] &&
                                tableData.classification[0].comments
                                  ? tableData.classification[0].comments
                                  : "-"}
                              </TableCell>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                  color: "#708198",
                                }}
                              >
                                {Math.round(tableData.callDuration)}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Stack>
                  </CardComponent>
                </Stack>
                <Stack
                  direction="column"
                  style={{
                    marginTop: "1rem",
                    width: "100%",
                  }}
                >
                  <CardComponent>
                    <Stack>
                      <Typography
                        style={{
                          textAlign: "left",
                          color: "black",
                          marginBottom: "1.5rem",
                          opacity: "0.7",
                          fontWeight: "bold",
                          fontSize: "1.4rem",
                        }}
                      >
                        {t("Welcome.text55")}
                      </Typography>
                      <TableContainer style={{ width: "100%" }}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                  fontWeight: "bold",
                                  color: "#7085A9",
                                  width: "0.5%",
                                }}
                              >
                                {t("Welcome.text56")}
                              </TableCell>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                  fontWeight: "bold",
                                  color: "#7085A9",
                                  width: "1.5%",
                                }}
                              >
                                {t("Welcome.text57")}
                              </TableCell>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                  fontWeight: "bold",
                                  color: "#7085A9",
                                  width: "6%",
                                }}
                              >
                                {t("Welcome.text58")}
                              </TableCell>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                  fontWeight: "bold",
                                  color: "#7085A9",
                                  width: "6%",
                                }}
                              >
                                {t("Welcome.text59")}
                              </TableCell>
                            </TableRow>
                          </TableHead>

                          <TableBody>
                          {tableMessages && tableMessages.messages && formattedMessages.map((formattedData, index) => (
                              <TableRow
                                key={index}
                                style={{
                                  backgroundColor:
                                    index % 2 === 0 ? "#ECECEC" : "white",
                                }}
                              >
                                <TableCell
                                  sx={{
                                    textAlign: "center",
                                    color: "#708198",
                                  }}
                                >
                                  {formattedData.formattedDate}
                                </TableCell>
                                <TableCell
                                  sx={{
                                    textAlign: "center",
                                    color: "#708198",
                                  }}
                                >
                                  {formattedData.formattedTime}
                                </TableCell>
                                <TableCell
                                  sx={{
                                    textAlign: "center",
                                    color: "#708198",
                                  }}
                                >
                                  {tableMessages.messages[index].msg}
                                </TableCell>
                                <TableCell
                                  sx={{
                                    textAlign: "center",
                                    color: "#708198",
                                  }}
                                >
                                  {tableMessages.messages[index].type}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Stack>
                  </CardComponent>
                </Stack>
              </Stack>
            ) : (
              <Stack
                style={{
                  padding: "2rem 0",
                  width: "60%",
                }}
              >
                <CardComponent
                  title={t("Welcome.text61")}
                  color="#8E9BAE"
                  fontSize="1.1rem"
                />
              </Stack>
            )}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}
export default OptionSearch;
```

## Importaciones y Configuraciones

Importación de varios componentes de Material-UI (Stack, Typography, Table, TableContainer, etc.) y otros componentes locales como BoxHeader, Navbar, Searching, CardComponent, IconWithTitle, ModalReport, y CircularProgressBar.
También se importan bibliotecas y funciones como dayjs para el manejo de fechas y useMediaQuery para la responsividad.

## Estado Local

Utilizas el estado local con useState para gestionar datos como tableData, tableMessages, info, showModal, y audio.

## Funciones Auxiliares

Definición de varias funciones auxiliares como openModalForAudio, handleUpdateTableData, handleUpdateTableMessages, y getStatusText.

## Internacionalización (i18n)

Utiliza la biblioteca react-i18next (useTranslation) para la internacionalización, traduciendo textos usando t("Welcome.textXX").

## Renderizado de Componentes y Datos

Renderiza Navbar y BoxHeader para la estructura general de la página.
Utiliza Searching para realizar búsquedas y actualizar los datos de la tabla y los mensajes.
Presenta los datos de tableData y tableMessages en tablas usando componentes de Material-UI (Table, TableHead, TableBody, TableCell, TableRow, TableContainer).
Manejo de formatos de fecha con dayjs.
Abre un modal para reproducir audio cuando se hace clic en un enlace específico.
