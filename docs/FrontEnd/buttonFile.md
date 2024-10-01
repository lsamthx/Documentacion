---
sidebar_position: 7
---

# 📂 buttonFile.js

Este componente FileComponent proporciona un botón que permite a los usuarios cargar archivos. Al seleccionar un archivo, se actualizan los estados relacionados con la información del archivo y se ejecutan las funciones proporcionadas.

```js
import React, { useState } from "react";
import Button from "@mui/material/Button";
import buttonStyles from "./../../styles/Button/ButtonComponent";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

function FileComponent({
  label,
  onClick,
  backgroundColor,
  color,
  setUrlFile = '',
  fileNameSet = () => {},
  setFile  = () => {},
}) {

  const setNewFileName = (e) => {
    if (e.target?.files[0]) {
    setFile(e?.target);
    setUrlFile(e?.target.value);
    fileNameSet(e?.target?.files[0].name || '');
    }
  };

  return (
    <Button
    component="label"
    variant="contained"
    startIcon={<CloudUploadIcon />}
    sx={{
    ...buttonStyles.buttonStyle,
    backgroundColor: backgroundColor,
    color: color,
    "&:hover": {
    //you want this to be the same as the backgroundColor above
    backgroundColor: backgroundColor,
    },
    }}
    >
    {label}
    <input
    type="file"
    hidden
    onChange={setNewFileName}
    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
      />
    </Button>
  );
}

export default FileComponent;
```