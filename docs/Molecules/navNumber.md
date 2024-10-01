---
sidebar_position: 119
---

# NavNumber.js (Molecules)

Este componente representa una barra de pestañas simple con dos pestañas ('1' y posiblemente más) y muestra contenido específico para cada pestaña. Puede expandirse agregando más lógica y componentes para cada pestaña según sea necesario en su aplicación.

```js
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TabsComponent from '../atoms/Tabs';
import Stack from '@mui/material/Stack';
import DashboardGeneral from './DashboardGeneral';
import DashboardTickets from './DashboardTickets';
import { useState } from 'react';


function NavTab() {
    const [value, setValue] = useState('1')
    const [tabs, setTabs] = useState([{
    label: '+5567209876',
    key: '1'
    }]);
    return (
        <div>
        <Stack>
        <AppBar style={{
        marginTop: "64px", backgroundColor: "#F4F5F8", height: "45px", display: '',
        overflow: 'hidden',
        transition: '0.4s',
        position: 'fixed',
        width: '100%'
        }} position="fixed">
    <Toolbar>
    <Stack style={{ marginLeft: "3rem" }} >
    < TabsComponent
        value={value}
        setValue={setValue}
        tabs={tabs}
        style={{ fontSize: "2px" }}
    />
                            
    <Stack

    >

    {value === '1' && " s "}
 
    </Stack>
    </Stack>

    </Toolbar>

    </AppBar>
    </Stack>

    </div>

    );
}

export default NavTab;
```

# Imports

- Se importan los componentes necesarios de Material-UI, como AppBar, Toolbar, Stack.
También se importa el componente TabsComponent y los paneles de los paneles del dashboard (DashboardGeneral y DashboardTickets).
- Se utiliza el hook useState de React para manejar el estado local.

# Estado Local

- Se utiliza el estado local (value y tabs) mediante el hook useState, value almacena el valor de la pestaña actualmente seleccionada y tabs es un array de objetos que representa las pestañas disponibles, cada una con una etiqueta (label) y una clave (key).

# Estructura del Componente

- El componente usa AppBar y Toolbar de Material-UI para crear una barra de navegación en la parte superior.
- TabsComponent se utiliza para renderizar las pestañas y permitir al usuario cambiar entre ellas.
- Se tiene un Stack anidado para colocar contenido específico de la pestaña debajo de las pestañas.
- Cada pestaña tiene un valor (value) asociado, y el contenido de la pestaña actual se muestra condicionalmente.

# Manejo de Cambio de Pestañas

TabsComponent recibe el estado value y la función setValue para manejar los cambios de pestañas.
Se asocia un conjunto específico de contenido con cada valor de pestaña.

# Diseño y Estilos

- La barra de navegación tiene un estilo específico con un margen superior, color de fondo y posición fija (position: 'fixed').
- Se utiliza Toolbar para organizar los elementos de la barra de navegación.
- Los estilos en línea se utilizan para personalizar la apariencia.

# Contenido de las Pestañas

Actualmente, solo se muestra el texto "s" cuando la pestaña con el valor '1' está seleccionada. Este contenido condicional es un marcador de posición y puede reemplazarse con los componentes reales que desea mostrar para cada pestaña.
