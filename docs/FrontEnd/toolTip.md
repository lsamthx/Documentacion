---
sidebar_position: 47
---

# ToolTip.js

Este archivo de estilo define un diseño básico para el tooltip. Cuando el usuario coloca el cursor sobre el elemento con la clase tooltip-container, se mostrará el texto del tooltip con un efecto de desvanecimiento (opacity) y algunos estilos básicos.

```js
import { WarningOutlined } from "@mui/icons-material";
import "../../styles/Tooltip/Tooltip.css";

function Tooltip({ children }) {
  return (
    <div className="tooltip-container">
    <span className="tooltip-text">{children}</span>
    <WarningOutlined fontSize="medium" style={{ color: "#ffc340" }} />
    </div>
  );
      
}

export default Tooltip;
```