---
sidebar_position: 50
---

# Warning.js

Este componente acepta una propiedad title que se utiliza como el contenido del tooltip para el ícono de advertencia (WarningOutlined). También incluye un ícono de visibilidad (VisibilityOutlined). El contenido del tooltip se muestra cuando el usuario coloca el cursor sobre el ícono de advertencia.

```js
import React from "react";
import { VisibilityOutlined, WarningOutlined } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import { Tooltip } from "@mui/material";

const WarningComponent = ({title})=> {
  return (
  <Stack>
  <Stack direction="row">
  <Tooltip title={title} arrow placement="top">
  <Stack sx={{ margin: "5px", marginRight: "1px" }}>
  <WarningOutlined fontSize="medium" style={{ color: "#ffc340" }} />
  </Stack>
  </Tooltip>
  <Stack sx={{ margin: "5px", marginRight: "2rem" }}>
  <VisibilityOutlined fontSize="medium" style={{ color: "#ffc340" }} />
  </Stack>
  </Stack>
  </Stack>
  );
}
export default WarningComponent;
```