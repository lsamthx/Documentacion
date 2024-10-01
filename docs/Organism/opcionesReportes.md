---
sidebar_position: 140
---

# OpcionesReportes.js

Este código es un componente de React llamado OpcionReportes que representa una página de informes con pestañas y contenido dinámico. 

```js 
import { useState, useContext } from "react";
import { Stack, Typography } from "@mui/material";
import BoxHeader from "../atoms/BoxHeader";
import TabsComponent from "../atoms/Tabs";
import ReportesServicio from "../molecules/ReportesServicio";
import ReportesLista from "../molecules/ReportesLista";
import Navbar from "./Navbar";
import ServiceReports from "../../views/OptionDashboard/ServiceReports/ServiceReports";
import ServiceList from "../../views/OptionDashboard/ServiceList/ServiceList";
import { AuthContext } from "../../Auth/Context";
import GraphReport from "../../views/OptionDashboard/ServiceReports/components/GraphReport";

function OpcionReportes() {
  const { payload } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [value, setValue] = useState("1");
  const [tabs] = useState([
    {
      label: "Reportes del Servicio",
      key: "1",
    },
    ,
    {
      label: "Reportes de Listas",
      key: "2",
    },
    {
      label: "Reportes de Graficas",
      key: "3",
    },
  ]);

  return (
    <Stack>
    <Stack>
    <Navbar />
    </Stack>
    <Stack
    className=""
    sx={{ background: "linear-gradient(45deg, #7a90ff, #57cdff)" }}>
    <BoxHeader>
    <Stack alignItems="flex-end">
    <Stack
    sx={{
    marginTop: "4rem",
    padding: "1rem 10rem",
    }}
    >
    <Stack sx={{ alignItems: "flex-start" }}>
    <Stack
    style={{
    marginLeft: "2rem",
    padding: "1rem 2rem",
    }}
    >
    <TabsComponent
    value={value}
    setValue={setValue}
    tabs={tabs}
    />
    </Stack>
    </Stack>
    <Stack
    sx={{
    margin: 5,
    }}
    >
    {value === "1" &&
    <ReportesServicio
    userId={payload._id}
    startDate={startDate}
    endDate={endDate}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
    />
    }

    {value === "2" && <ReportesLista userId={payload._id}  />}
    </Stack>
    </Stack>
    </Stack>
    </BoxHeader>
    </Stack>

    {value === '1' &&
    <Stack>
    <ServiceReports
    />
    </Stack>
    }
    {value === '2' && 
    <Stack>
    <ServiceList />
    </Stack>
    }
    {value === '3' && 
    <Stack>
    <GraphReport />
    </Stack>
    }
    </Stack>
  );
}

export default OpcionReportes;
```

## Imports

Se importan los componentes y contextos necesarios, y se inicializan los estados utilizando el gancho useState.

## Componentes

Se define el componente funcional OpcionReportes y se inicializan los estados relacionados con las fechas, el valor de la pestaña seleccionada y la configuración de las pestañas.

El componente se renderiza utilizando componentes de Material-UI, como Stack. También incluye un encabezado (BoxHeader) con un selector de pestañas (TabsComponent) y se muestran diferentes componentes (ReportesServicio, ReportesLista, ServiceReports, ServiceList, GraphReport) según la pestaña seleccionada.