---
sidebar_position: 179
---

# OptionService.js

Este componente "OptionService" se utiliza para crear una interfaz que permite a los usuarios navegar entre diferentes secciones, como información general, respuestas rápidas, servicios y aplicaciones. Cada sección es representada por un componente diferente, y se controla a través del estado de value.

## Imports

Imports de `src/views/OptionService/OptionService.js`:

```jsx title="src/views/OptionService/OptionService.js
import { Stack } from "@mui/material";
import BoxHeader from "../../components/atoms/BoxHeader";
import TabsComponent from "../../components/atoms/Tabs";
import { useState } from "react";
import Servicios from "../../components/molecules/Servicios";
import InfoGeneral from "../../components/molecules/InfoGeneral";
import Respuestas from "../../components/molecules/RespuestasRapidas";
import Aplicaciones from "../../components/molecules/Aplicaciones";
import Navbar from "../../components/organisms/Navbar";
```

En esta sección, se importan las librerías y componentes necesarios para el componente "OptionService". Estos componentes incluyen Stack, BoxHeader, TabsComponent, useState, y otros componentes personalizados como "Servicios", "InfoGeneral", "Respuestas", "Aplicaciones", los cuales permitirá que sean utilizados.

## Function OptionService

```jsx
function OptionService() {
  const [value, setValue] = useState('1')
  const [tabs, setTabs] = useState([{
    label: 'Información General',
    key: '1'
  }, {
    label: 'Respuestas Rápidas',
    key: '2'
  }, {
    label: 'Servicio',
    key: '3'
  }, {
    label: 'Aplicaciones',
    key: '4'
  }]); ...}
```

Este es el componente funcional "OptionService". Utiliza el hook useState para gestionar el estado local. value representa el valor actual de la pestaña seleccionada y se inicia en '1'. tabs es una lista de objetos que contiene etiquetas y claves para las pestañas.

## Stacks & Components

Este bloque de código describe la estructura y el contenido del componente "OptionService".
Se utiliza el componente Stack para organizar el contenido del componente.

En el primer Stack, se incluye el componente Navbar, que representa la barra de navegación.

En el segundo Stack, se crea un encabezado con un fondo degradado.

El tercer Stack contiene el contenido principal. Se utiliza TabsComponent para mostrar pestañas y permite al usuario cambiar entre diferentes secciones.

Las secciones correspondientes a cada valor de value se muestran condicionalmente. Por ejemplo, si value es igual a '1', se muestra el componente "InfoGeneral".

```jsx
 return (
    <Stack>
    <Stack>
    <Navbar />
    </Stack>
    <Stack>
    <div style={{
    background:"linear-gradient(45deg, #fe6298, #ff8766)"

    }}>
    <BoxHeader>
    </BoxHeader>
    </div>
    </Stack>
    <Stack
    sx={{
    margin: 5
    }}
    >
    <TabsComponent
    value={value}
    setValue={setValue}
    tabs={tabs}
    />

    {value === '1' && <InfoGeneral />}

    {value === '2' && <Respuestas />}

    {value === '3' && <Servicios />}

    {value === '4' && <Aplicaciones />}
    </Stack>
    </Stack>
);
```

## Export

Finalmente, el componente "OptionService" se exporta como el componente predeterminado.

```jsx
export default OptionService;
```