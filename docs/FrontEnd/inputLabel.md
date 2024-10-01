---
sidebar_position: 30
---

# Inputlabel.js

Este componente InputLabel proporciona una etiqueta y un campo de entrada personalizado que puede ser un selector o un campo de texto. Puede manejar la validación y muestra mensajes de error según sea necesario.

```js
import React, { useState, useEffect } from "react";

const InputLabel = ({
  label,
  inputType,
  options,
  selectwidth,
  inputwidth,
  value = "",
  setValue = () => {},
  hdlOnFocus = () => {},
  hdlOnChange = () => {},
  validate = () => "",
}) => {
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    const error = validate(value);
    setValidationError(error || "");
  }, [value, validate]);

  const getChangeSelevct = (e) => {
    const selectedValue = e.target.value;
    hdlOnChange(selectedValue);
    setValue(selectedValue);
  };

  const getNweValue = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setValidationError(validate(inputValue) || "");
  };

  return (
    <div>
    <label
    style={{
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
    color: "#708198",
    }}
    >
    {label}
    </label>
    {inputType === "select" ? (
    <select
    value={value}
    style={{
    width: selectwidth,
    padding: "8px",
    backgroundColor: "#edeff2",
    border: "none",
    color: "gray",
    outline: "none",
    borderRadius: "7px",
    }}
    onChange={getChangeSelevct}
    >
    {options.map((option, index) => (
    <option key={index} value={option.value}>
    {option.label}
    </option>
    ))}
    </select>
    ) : (
    <div>
    <input
    type={inputType}
    autoComplete="off"
    value={value}
    onChange={getNweValue}
    style={{
    width: inputwidth,
    padding: "8px",
    backgroundColor: "#edeff2",
    border: "none",
    color: "gray",
    outline: "none",
    borderRadius: "7px",
    }}
    onFocus={hdlOnFocus}
    />
    {validationError && (
    <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
    {validationError}
    </div>
    )}
    </div>
    )}
    </div>
  );
};

export default InputLabel;
```