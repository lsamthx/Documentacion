---
sidebar_position: 28
---

# InputCampaings.js

Este componente proporciona un campo de entrada personalizado con una etiqueta flotante que se ajusta dinámicamente según el enfoque y el contenido del campo. 

```js
import React, { useState } from "react";

const InputCampaings = ({ label, value, onChange, width, height, color, colorSelect }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
    setIsFocused(false);
    }
  };

  return (
    <div style={{ position: "relative" }}>
    <div
    style={{
    display: "flex",
    flexDirection: "column",
    fontFamily: "sans-serif",
    color: color,
    }}
    >
    <label
    style={{
    position: "absolute",
    top: isFocused || value ? "5px" : "65%",
    left: "8px",
    transform: isFocused || value ? "translateY(0)" : "translateY(-50%)",
    transition: "all 0.3s ease",
    color: isFocused ? colorSelect : color,
    pointerEvents: "none",
    background: "white", 
    padding: "0 4px", 
    }}
    >
    {label}
    </label>
    </div>
    <div>
    <input
    type="text"
    value={value}
    onChange={onChange}
    onFocus={handleFocus}
    onBlur={handleBlur}
    style={{
    border: "none",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
    width: width || "100%",
    height: height || "2rem",
    padding: "8px",
    backgroundColor: "transparent", 
    color: "gray",
    borderColor: "none", 
    outline:"none",
    marginTop:"1rem"
    }}
    />
    </div>
    </div>
  );
};

export default InputCampaings;
```
