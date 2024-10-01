---
sidebar_position: 29
---

# InputComponent.js

 Este componente InputComponent es una envoltura del componente TextField de Material-UI con funcionalidad adicional de validación de entrada. 

```js
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

function InputComponent(props) {
  const { label, value, onChange,width, fullWidth, errorText ,validate, backgroundColor } = props;
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    if (validate) {
      const error = validate(value);
      setValidationError(error || "");
    }
  }, [value, validate]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValidationError("");

    if (onChange) {
      onChange(inputValue);
    }
  };


  return (
    <div>
    <TextField
    label={label}
    value={value}
    onChange={handleInputChange}
    fullWidth={fullWidth}
    sx={{ width:width, backgroundColor: backgroundColor}} 
    variant="outlined"
    error={!!validationError || !!errorText}
    />
    </div>
  );
}

export default InputComponent;
```