---
sidebar_position: 9
---

# 📅 Calendario.js

este componente Calendario utiliza dos instancias del componente DatePickerComponent dentro de un diseño apilado (Stack). Cada instancia tiene su propio título y funciones asociadas para manejar las fechas de inicio y final. Este diseño proporciona una interfaz sencilla para seleccionar un rango de fechas.

```js
import React, { useState } from "react";
import { InputLabel, Stack } from "@mui/material";
import DatePickerComponent from "./DatePickerComponent";

function Calendario({
  startDate = null,
  setStartDate = () => {  },
  endDate = null,
  setEndDate = () => {  }
}) {
  
  return (
    <Stack>
    <Stack direction="row">
    <Stack sx={{backgroundColor:"white"}}>
    <DatePickerComponent
    titleLabel="Fecha Inicio"
    value={startDate}
    setValue={setStartDate}
    />
    </Stack>
    <Stack sx={{ marginLeft: "2rem", backgroundColor:"white"}}>
    <DatePickerComponent
    titleLabel="Fecha Final"
    value={endDate}
    setValue={setEndDate}
    />
    </Stack>
    </Stack>
    </Stack>
  );
}

export default Calendario;
```
