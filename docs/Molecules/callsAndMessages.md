---
sidebar_position: 101
---

# CallsAndMessages.js (Molecules)

Este es un componente de React llamado CallsAndMessages que representa una sección de la interfaz de usuario para gestionar campañas y listas activas.

Este componente tiene dos secciones principales: la izquierda para gestionar campañas y la derecha para mostrar listas activas. Algunos puntos clave incluyen la gestión de archivos, la selección del tipo de campaña y la utilización de diversos componentes personalizados y de Material-UI.

```jsx
import { Link, Stack, Switch, Typography } from "@mui/material";
import CardComponent from "../atoms/CardComponent";
import { useState } from "react";
import ButtonComponent from "../atoms/ButtonComponent";
import FileComponent from "../atoms/ButtonFile";
import SelectCircle from "../atoms/RadioButton";
import ModalCampaigns from "../../views/OptionDashboard/Modals/ModalCampaigns";
import { read, utils } from "xlsx";
import Campaings from "./Campaingns";
import InputCampaings from "../atoms/InputCampaings";

function CallsAndMessages() {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [showMSM, setShowSMS] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [listName, setListName] = useState("");
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
  };

  const options = [
    { value: "manual", label: "Manual con Preview" },
    { value: "progress", label: "Progresivo con Preview" },
    { value: "blaster", label: "Blaster con Mensaje" },
  ];

  const getFileReader = (event) => {
    setFile(event.files[0]);
    if (event) {
      let fileReader = new FileReader();

      fileReader.readAsBinaryString(event.files[0]);
      fileReader.onload = (e) => {
        let data = e.target.result;
        const wb = read(data, { type: "binary" });

        const data2 = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {
          header: 1,
        });
        const titles = data2.slice(0, 1);
        const dataTable = data2.slice(1, data2.length);
        setColumns(titles[0]);
        setRows(dataTable[0]);
      };
    }
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
      padding: "3rem 0",
      }}
    >
      <ModalCampaigns
      open={open}
      handleClose={handleClose}
      columnsTable={columns}
      rowsTable={rows}
      file={file}
      fileName={fileName}
      />
      <Stack
        sx={{
        width: "50%",
        flexGrow: 1,
        }}
      >
        <CardComponent>
        <Stack
          sx={{
          display: "block",
          color: "#606060",
          fontWeight: "600",
          }}
          >
          <Link
            underline={`${showMSM ? "hover" : "always"}`}
            sx={{
            cursor: "pointer",
            color: "#606060",
            paddingRight: "10px",
            fontSize: "1.5rem",
            }}
            component="button"
            onClick={() => {
            setShowSMS(!showMSM);
            }}
            >
            Campañas
            </Link>
          </Stack>

          <Typography sx={{ margin: "2% 0 4%" }}>
            Sube tus archivos de Outbouns para este servicio.
          </Typography>

          <Stack spacing={{ xs: 1, sm: 2 }} direction="column">
            <Stack>
            <InputCampaings
            label="Nombre de la Campaña"
            value={listName}
            onChange={setListName}
            width="80%"
            height="1.5rem"
            color="gray"
            colorSelect="gray"
            />
            </Stack>

            <Stack spacing={{ xs: 1, sm: 2 }} sx={{ maxWidth: "50%" }}>
              <FileComponent
                label={"Archivo"}
                backgroundColor="#19d9b4"
                fileNameSet={setListName}
                setFile={getFileReader}
                setUrlFile={setFileName}
              />
            </Stack>
          </Stack>
          <Stack>
          <Campaings />
          </Stack>

          <Stack sx={{ marginTop: "2rem" }}>
            <Typography
            style={{
            color: "#606060",
            paddingRight: "10px",
            fontSize: "1.5rem",
            }}
            >
            Tipo de Campaña
            </Typography>
            <Stack
            direction="row"
            sx={{
            border: "1px solid #d3d3d3",
            marginTop: "1rem",
            borderRadius: "1rem",
            }}
            >
            <Stack sx={{ margin: "1rem" }}>
            <SelectCircle
            options={options}
            selectedValue={selectedOption}
            onChange={handleOptionChange}
            onOptionSelect={handleOptionSelect}
            orientation="horizontal"
            color="primary"
            />
            </Stack>
            </Stack>
          </Stack>
         
          <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          sx={{ marginTop: "1rem" }}
          >
          <ButtonComponent
          label={"Procesar archivo"}
          onClick={() => setOpen(!open)}
          backgroundColor="#19d9b4"
          disabled={!file}
          />
          </Stack>
        </CardComponent>
      </Stack>

      <Stack
        sx={{
        width: "50%",
        }}
      >
      <CardComponent>
      <Typography
      variant="h5"
      style={{
      textAlign: "left",
      color: "black",
      fontFamily: "sans-serif",
      opacity: "0.7",
      fontWeight: "bold",
      }}
      >
      Listas activas
      </Typography>
      <Typography sx={{ margin: "2% 0" }}>
      Administra tus listas desde aquí.
      </Typography>
      </CardComponent>
      </Stack>
    </Stack>
  );
}

export default CallsAndMessages;
```
