---
sidebar_position: 102
---

# Campaigns.js (Molecules)

Este es un componente de React llamado Campaings que representa la configuración de campañas en la interfaz de usuario.

Este componente tiene dos secciones principales: la izquierda para la configuración de inicio, fin y horas de trabajo de la campaña, y la derecha para configuraciones adicionales como el número

```jsx
import { Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import InputCampaings from "../atoms/InputCampaings";
import DateTimePicker from "../atoms/DateTimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import SwitchComponent from "../atoms/SwitchControler";
import CustomDateTimePicker from "../atoms/DateTimePicker";
import CustomTimePicker from "../atoms/TimePicker";
import CustomToggle from "../atoms/ToggleButton";
import DayCounter from "../atoms/DayCounter";
import TimeCounter from "../atoms/TimeCounter";
import ButtonComponent from "../atoms/ButtonComponent";

function Campaings() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [state, setState] = useState({
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [stateA, setStateA] = useState({
    checkedA: true,
  });

  const handleChangeA = (event) => {
    setStateA({ ...stateA, [event.target.name]: event.target.checked });
  };

  const [stateC, setStateC] = useState({
    checkedC: true,
  });

  const handleChangeC = (event) => {
    setStateC({ ...stateC, [event.target.name]: event.target.checked });
  };

  const [startTime, setStartTime] = React.useState("");
  const [endTime, setEndTime] = React.useState("");

  const handleStartTimeChange = (newTime) => {
    setStartTime(newTime);
  };

  const handleEndTimeChange = (newTime) => {
    setEndTime(newTime);
  };

  const textOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ];

  return (
     
      <Stack sx={{ marginTop: "2rem" }}>
      <Typography
      style={{
      color: "#606060",
      paddingRight: "10px",
      fontSize: "1.5rem",
      }}
      >
      Esquema
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
      <Stack sx={{ width: "50%" }}>
      <Stack alignItems="flex-start" direction="row">
      <Stack
      sx={{ margin: "0.7rem", marginLeft: "3rem", width: "25%" }}
      >

      <SwitchComponent
      label="Inicio de Campaña"
      checked={state.checkedB}
      onChange={handleChange}
      name="checkedB"
      color="#818181"
      />

      </Stack>
      <Stack sx={{ margin: "0.5rem", width: "50%" }}>
      <CustomDateTimePicker isStartDate={true} />
      </Stack>
      </Stack>
      <Stack alignItems="flex-start" direction="row">
      <Stack
      sx={{ margin: "0.7rem", marginLeft: "3rem", width: "25%" }}
      >

      <SwitchComponent
      label="Fin de Campaña"
      checked={stateA.checkedA}
      onChange={handleChangeA}
      name="checkedA"
      color="#818181"
      />
      </Stack>
      <Stack
      sx={{ width: "50%", margin: "0.5rem", marginLeft: "1rem" }}
      >
      <CustomDateTimePicker isStartDate={false} />
      </Stack>
      </Stack>

      <Stack alignItems="flex-start" direction="row">
      <Stack
      sx={{
      margin: "0.7rem",
      width: "25%",
      marginTop: "2.5rem",
      marginLeft: "3rem",
      }}
      >

      <SwitchComponent
      label="Horas de Trabajo"
      checked={stateC.checkedC}
      onChange={handleChangeC}
      name="checkedC"
      color="#818181"
      />
      </Stack>
      <Stack  direction="column">
      <Stack>
      <Stack sx={{ margin: "0.2rem", marginLeft: "1rem" }}>
      <CustomTimePicker
      defaultValue={startTime}
      onChange={handleStartTimeChange}
      />
      </Stack>
      <Stack>
      <Typography variant="h6" sx={{ marginLeft: "60px" }}>
      a
      </Typography>
      </Stack>

      <Stack sx={{ margin: "0.2rem", marginLeft: "1rem" }}>
      <CustomTimePicker
      defaultValue={endTime}
      onChange={handleEndTimeChange}
      />
      </Stack>
      </Stack>
      </Stack>
      </Stack>
      </Stack>
      <Stack sx={{ width: "50%", display: "flex",
      flexDirection: "column", flexGrow:1}}>
      <Stack sx={{ margin: "0.5rem", marginLeft: "4rem", width:"100%", flex: 1  }}>
      <CustomToggle
      options={textOptions}
      isIcon={false}
      title="Número de Atenciones"
      />
      
      </Stack>
      <Stack direction="row" sx={{width:"100%"}}>
      <Stack sx={{ margin: "0.5rem", marginLeft: "4rem" , flex: 1 }}>
      <Typography
      variant="body2"
      sx={{ margin: "0.5rem", color: "#818181" }}
      >

      Intervalo
      </Typography>
      <DayCounter width="5rem"/>
      </Stack>
      <Stack sx={{ margin: "2.7rem", marginLeft: "1rem" ,flex: 1 }}>
      <TimeCounter width="6.5rem"/>
      </Stack>
      </Stack>
      </Stack>
      </Stack>
      </Stack>
      
  );
}

export default Campaings;
```