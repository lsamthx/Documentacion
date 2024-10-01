---
sidebar_position: 99
---

# ButtonsAgentsHome.js (Molecules)


Este es un componente de React llamado ButtonHome que renderiza una serie de botones y un componente de advertencia (WarningComponent). 

## Imports

```jsx
import React from "react";
import ButtonAgentsHome from "../atoms/ButtonHomeAgents";
import {
  LocalPhoneOutlined,
  Send,
  VisibilityOutlined,
  Warning,
  WarningOutlined,
} from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import { Tooltip } from "@mui/material";
import WarningComponent from "../atoms/Warning";

function ButtonHome() {
  return (
    <Stack
      direction="row"
      style={{
      display: "flex",
      justifyContent: "flex-end",
      borderBottom: "none",
      position: "absolute",
      bottom: "15px",
      right: 0,
      }}
    >
      <Stack>
      <WarningComponent title="Llamada monitoreada"/>
      </Stack>
    
      <Stack>
      <ButtonAgentsHome
      icon={<LocalPhoneOutlined fontSize="small" />}
        textColor="white"
        backgroundColor="#72cb10"
        onClick={() => alert("Hacer llamada")}
        style={{ borderRadius: "7px" }}
        />
      </Stack>
      <Stack style={{ marginLeft: "1rem", width: "7rem" }}>
        <ButtonAgentsHome
        text="FINALIZAR"
        backgroundColor="#F0506E"
        textColor="white"
        onClick={() => alert("Clic en botón de icono 2")}
        style={{ borderRadius: "7px" }}
        />
      </Stack>
      <Stack
        style={{ marginLeft: "1rem", width: "10rem", marginRight: "1rem" }}
      >
        <ButtonAgentsHome
        text="CONTINUAR DESPUÉS"
        backgroundColor="#29B6F6"
        textColor="white"
        onClick={() => alert("Clic en otro botón de icono")}
        style={{ borderRadius: "7px" }}
        />
      </Stack>
    </Stack>
  );
}

export default ButtonHome;
```

- Se importa React para la creación de componentes.
- ButtonAgentsHome es un componente de botón personalizado.
- Se importan varios iconos de @mui/icons-material que se utilizarán en los botones.
- Stack y Tooltip son componentes de Material-UI que ayudan con el diseño y las descripciones emergentes.
- WarningComponent es un componente de advertencia personalizado.
- Se declara el componente funcional ButtonHome.
- Se utiliza un componente Stack de Material-UI para alinear los elementos horizontalmente.
- Se establece el estilo para posicionar el conjunto de botones en la esquina inferior derecha de la pantalla.
- Se utilizan múltiples bloques Stack para organizar los elementos horizontalmente.
- En el primer bloque se muestra un WarningComponent con el título "Llamada monitoreada".
- En los siguientes bloques se muestran botones (ButtonAgentsHome) con diferentes propiedades como íconos, colores y eventos de clic.
- Cada botón tiene un evento onClick que muestra una alerta como ejemplo. Puedes sustituir la función alert con la lógica real que deseas ejecutar al hacer clic en los botones.

En resumen, este componente ButtonHome renderiza una serie de botones y un componente de advertencia, cada uno con sus propias características visuales y acciones asociadas.