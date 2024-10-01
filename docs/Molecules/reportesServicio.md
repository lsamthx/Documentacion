---
sidebar_position: 122
---

# ReportesServicio.js (Molecules)

Este componente proporciona una interfaz para que el usuario seleccione un servicio, un tipo de informe y un rango de fechas, y luego realice una búsqueda o exportación de datos relacionados con el informe del servicio seleccionado. Los eventos de búsqueda y exportación actualmente muestran alertas, pero probablemente se conectarían a funcionalidades de búsqueda y exportación reales en la aplicación final.

```js
import React, { useState } from "react";
import { Stack } from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import Calendario from "../../components/atoms/Calendario";
import ButtonComponent from "../atoms/ButtonComponent";
import useWexClient from "../../hooks/Clients/wexClient,";
import { useEffect } from "react";
import SelectComponent from "../atoms/Select";

function ReportesServicio({
  userId = '',
  startDate = null,
  setStartDate = () => { },
  endDate = null,
  setEndDate = () => { }
}) {
  const { getServices } = useWexClient();
  const [service, setService] = useState([]);
  const [reportType] = useState([{
    _id: 'Reporte de llamadas',
    name: 'Reporte de llamadas'
  }]);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionRep, setSelectedOptionRep] = useState(reportType[0]._id);

  useEffect(() => {
    getAllServices();
  }, []);

  const getAllServices = async () => {
    try {
      const apiData = await getServices(userId);
      const serviceData = apiData.map((item) => ({
        _id: item._id,
        name: item.name,
      }));

      setService(serviceData);
      setSelectedOption(serviceData[0]._id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChangeRep = (event) => {
    setSelectedOptionRep(event.target.value);
  };

  const handleClickExport = () => {
    alert("Funciona el evento 1");
  };
  const handleClickSearch = () => {
    alert("Funciona el evento 2");
  };
  return (
    <Stack>
    <Stack
    sx={{
    width: "35rem",
    marginLeft: "3rem",
    marginTop: "1rem",
    }}
      >    
    <SelectComponent
    onChange={(e) => {
    setSelectedOption(e.target.value)
    }}
    value={selectedOption}
    valueSelect='_id'
    options={service}
    label="Elige un servicio"
    textColor="#000000"
    backgroundColor="white"
    />
    </Stack>

    <Stack
    sx={{
    width: "35rem",
    marginLeft: "3rem",
    marginTop: "1rem",
    }}
    >

    <SelectComponent
    onChange={(e) => {
    setSelectedOptionRep(e.target.value)
    }}
    value={selectedOptionRep}
    valueSelect='_id'
    options={reportType}
    label='Elige un Reporte'
    textColor="#000000"
    backgroundColor="white"
    />
    </Stack>

    <Stack
    sx={{
    width: "35rem",
    marginLeft: "3rem",
    marginTop: "1rem",
    }}
    >
    <Calendario
    startDate={startDate}
    endDate={endDate}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
    />
    </Stack>
    <Stack direction="row">
    <Stack
    sx={{
    width: "6rem",
    marginTop: "2rem",
    marginLeft: "25rem",
    }}
    >

    <ButtonComponent label="Buscar" onClick={handleClickSearch} backgroundColor="#19d9b4"/>
    </Stack>
    <Stack
    sx={{
    width: "6rem",
    marginTop: "2rem",
    marginLeft: "1rem",
    }}
    >
    <ButtonComponent label="Exportar" onClick={handleClickExport} backgroundColor="#19d9b4"/>
    </Stack>
    </Stack>
    </Stack>
  );
}

export default ReportesServicio;
```

# Imports

- Se importan los componentes de React (React, useState, useEffect) y de Material-UI (Stack, FormControl, InputLabel, Select, MenuItem).
- Se importa Calendario para la selección de fechas.
- Se importa ButtonComponent y SelectComponent para los botones y la selección de servicio y tipo de informe, respectivamente.
- Se importa useWexClient para obtener servicios desde algún cliente de Wex.

# Estado Local

- service: Un estado que almacena la lista de servicios obtenidos.
- reportType: Un estado que almacena el tipo de informe (en este caso, solo hay un tipo: "Reporte de llamadas").
- selectedOption: Un estado que almacena el valor del servicio seleccionado.
- selectedOptionRep: Un estado que almacena el valor del tipo de informe seleccionado.

# Uso de useEffect

Al montarse el componente, se llama a getAllServices para obtener la lista de servicios.

# Función getAllServices

- Utiliza el hook useWexClient para obtener servicios del cliente de Wex.
- Mapea la respuesta y transforma los datos en un formato que incluye _id y name.
- Establece el estado service con los datos mapeados y selecciona la primera opción.

# Funciones de Manejo de Eventos

- handleChange: Maneja el cambio en la selección del servicio actualizando el estado selectedOption.
- handleChangeRep: Maneja el cambio en la selección del tipo de informe actualizando el estado selectedOptionRep.
- handleClickExport: Muestra una alerta indicando que el evento de exportación funciona.
- handleClickSearch: Muestra una alerta indicando que el evento de búsqueda funciona.

# Renderización del Componente

- Utiliza el componente Stack para organizar visualmente los elementos.
- Utiliza SelectComponent para crear un menú desplegable de servicios.
- Utiliza SelectComponent para crear un menú desplegable de tipos de informe.
- Utiliza Calendario para la selección de fechas.
- Utiliza ButtonComponent para crear botones de búsqueda y exportación.

# Estilos y Diseño

- Utiliza estilos en línea (sx) para ajustar el ancho, margen izquierdo y margen superior de los elementos.
- Define el ancho del menú desplegable de servicios y del menú desplegable de tipos de informe como "35rem".
- Define el ancho del calendario como "35rem".
- Define el ancho de los botones de búsqueda y exportación como "6rem".
- Se utiliza marginTop y marginLeft para posicionar adecuadamente los elementos en el Stack.

# Renderización de Opciones de Servicio e Informe

- Mapea las opciones de servicio dentro del componente SelectComponent.
- Mapea las opciones de tipo de informe dentro del componente SelectComponent.