---
sidebar_position: 145
---

# Modal.js

El componente ModalView es una ventana modal para editar usuarios. 

```js
import React, { useState } from "react";
import Modal from "../components/atoms/ModalComponent";
import InputLabel from "../components/atoms/InputLabel";
import { Stack } from "@mui/material";
import ButtonComponent from "../components/atoms/ButtonComponent";

function ModalView() {
  const handleCancel = () => {
  alert("Funciona el evento a");
  };

  const handleModalAdd = () => {
  alert("Funciona el evento b");
  };

  const optionsProfile = [
  { label: "Opción 1", value: "opcion1" },
  { label: "Opción 2", value: "opcion2" },
  { label: "Opción 3", value: "opcion3" },
  ];

  const optionsAtentions = [
  { label: "Opción 1", value: "opcion1" },
  { label: "Opción 2", value: "opcion2" },
  { label: "Opción 3", value: "opcion3" },
  ];

  const optionsQueue = [
  { label: "Opción 1", value: "opcion1" },
  { label: "Opción 2", value: "opcion2" },
  { label: "Opción 3", value: "opcion3" },
  ];

  const optionsStatus = [
  { label: "Opción 1", value: "opcion1" },
  { label: "Opción 2", value: "opcion2" },
  { label: "Opción 3", value: "opcion3" },
  ];

  const [modalVisibleAdd, setModalVisibleAdd] = useState(false);

  const handleCloseModalAdd = () => {
  setModalVisibleAdd(false);
  };

  const handleClickAddNew = () => {
  alert("Funciona el evento Guardar");
  };


  const handleAddNew = () => {
  setModalVisibleAdd(true);
  };


  const Buttons = () => (
  <>
  <div style={{marginRight:"1rem"}}>
  <ButtonComponent
  label="Cancelar"
  onClick={handleCancel}
  backgroundColor="#f0f0f0"
  color="#708198"
  />
  </div>
  <div style={{marginRight:"1rem"}}>
  <ButtonComponent
  label="Guardar"
  onClick={handleModalAdd}
  backgroundColor="#8088ff"
  />
  </div>
  </>
  );

  return (
  <div>
  {modalVisibleAdd && (
  <Modal
  title="Editar Usuario"
  buttons={<Buttons />}
  width="700px"
  visible={modalVisibleAdd}
  onClose={handleCloseModalAdd}
  >
  <Stack direction="row" spacing={2} alignItems="flex-start">
  <Stack sx={{ width: "50%", marginLeft: "1rem" }}>
  <InputLabel
  label="Nombre"
  inputType="text"
  inputwidth="90%"
  />
  <InputLabel
  label="Usuario"
  inputType="text"
  inputwidth="90%"
  />
  <InputLabel
  label="Perfil"
  inputType="select"
  selectwidth="95%"
  options={optionsProfile}
  />
  </Stack>
  <Stack sx={{ width: "50%", marginLeft: "1rem" }}>
  <InputLabel
  label="Número de atenciones simultaneas"
  inputType="select"
  selectwidth="90%"
  options={optionsAtentions}
  />
  <InputLabel
  label="Queue"
  inputType="select"
  selectwidth="90%"
  options={optionsQueue}
  />
  <InputLabel
  label="Estatus"
  inputType="select"
  selectwidth="90%"
  options={optionsStatus}
  />
  <InputLabel
  label="Cambiar contraseña"
  inputType="password"
  inputwidth="90%"
  />
  </Stack>
  </Stack>
  </Modal>
  )}
  </div>
  );
}

export default ModalView;
```