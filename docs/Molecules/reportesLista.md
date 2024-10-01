---
sidebar_position: 121
---

# ReportesLista.js (Molecules)

Este componente proporciona una interfaz para que el usuario seleccione un servicio de una lista y luego exporte algún tipo de informe relacionado con ese servicio. El botón de exportación actualmente muestra una alerta, pero probablemente se conectaría a una funcionalidad de exportación real en la aplicación final.

```js
import React, { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import ButtonComponent from "../atoms/ButtonComponent";
import useWexClient from "../../hooks/Clients/wexClient,";

function ReportesLista({ userId = '' }) {
  const { getServices } = useWexClient();
  const [service, setService] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    getAllServices();
  }, []);

  const getAllServices = async () => {
    try {
      const apiData = await getServices(userId);
      const serviceData = apiData.map((item) => ({
        id: item._id,
        name: item.name,
      }));
      setService(serviceData);
      setSelectedOption(serviceData[0].id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickExport = () => {
    alert("Funciona el evento 1");
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Stack>
    <Stack
    sx={{
    background: "white",
    width: "35rem",
    marginLeft: "3rem",
    marginTop: "1rem",
    }}
    >

    <FormControl style={{ width: "35rem" }}>
    <InputLabel sx={{fontSize:"13px"}}>Selecciona una lista</InputLabel>
    <Select
    labelId="select-label"
    id="select"
    value={selectedOption}
    onChange={handleChange}
    label="Elige un servicio"
    >

    {service.map(item =>{
    return (
    <MenuItem value={item.id}>{item.name}</MenuItem>
    );
    })}
    </Select>
    </FormControl>
    </Stack>
    <Stack
    sx={{
    width: "6rem",
    marginTop: "2rem",
    marginLeft: "32rem",
    }}
    >

    <ButtonComponent label="Exportar" onClick={handleClickExport} backgroundColor="#19d9b4" />
    </Stack>
    </Stack>
  );
}
export default ReportesLista;
```

# Imports

- Se importan los componentes de React (React, useState, useEffect) y de Material-UI (Stack, FormControl, InputLabel, Select, MenuItem).
- Se importa ButtonComponent para el botón que activará la exportación.
- Se importa el hook useWexClient para obtener servicios desde algún cliente de Wex.

# Estado Local

- service: Un estado que almacena la lista de servicios obtenidos.
- selectedOption: Un estado que almacena el valor del servicio seleccionado.

# Uso de useEffect

Al montarse el componente, se llama a getAllServices para obtener la lista de servicios.

# Función getAllServices

- Utiliza el hook useWexClient para obtener servicios del cliente de Wex.
- Mapea la respuesta y transforma los datos en un formato que incluye id y name.
- Establece el estado service con los datos mapeados y selecciona la primera opción.

# Funciones de Manejo de Eventos

- handleClickExport: Muestra una alerta indicando que el evento de exportación funciona.
- handleChange: Maneja el cambio en la selección del servicio actualizando el estado selectedOption.

# Renderización del Componente

- Utiliza el componente Stack para organizar visualmente los elementos.
- Utiliza FormControl, InputLabel, Select, y MenuItem para crear un menú desplegable de servicios.
- Utiliza ButtonComponent para crear un botón de exportación.

# Estilos y Diseño

- Utiliza estilos en línea (sx) para ajustar el ancho, margen izquierdo y margen superior de los elementos.
- Define el ancho del menú desplegable como "35rem".
- Define el ancho del botón de exportación como "6rem".
- Se utiliza marginTop y marginLeft para posicionar adecuadamente los elementos en el Stack.

# Renderización de Opciones de Servicio

Mapea las opciones de servicio dentro del componente MenuItem.