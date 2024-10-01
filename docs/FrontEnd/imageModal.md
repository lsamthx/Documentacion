---
sidebar_position: 26
---

# ImageModal.js

El componente ImageModal muestra una imagen en un modal (ventana emergente). El modal se centra en la pantalla y tiene un botón de cerrar en la esquina superior derecha. La imagen se ajusta para ocupar todo el espacio del contenedor. El modal se controla mediante las props open (para abrir/cerrar) y onClose (función para cerrar el modal). La URL de la imagen se pasa a través de la prop src.

```js
import React from "react";
import { Modal, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ImageModal = ({ open, onClose, src }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "white",
          padding: "3rem",
          border: "1px solid #ccc",
        }}
      >
        <IconButton
          style={{
            position: "absolute",
            top: "1px",
            right: "10px",
            fontSize: "2rem",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        <img
          style={{ width: "100%", height: "100%" }}
          src={src}
          alt="Modal content"
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
```

## Imports

**React**: Se importa la biblioteca React para usar la funcionalidad de componentes.

### mui/material:

**Modal**: Componente de Material-UI para crear un modal (ventana emergente).
**Button**: Componente de Material-UI para crear botones.
**IconButton**: Componente de Material-UI para crear botones con iconos.

### mui/icons-material:

**CloseIcon**: Icono de Material-UI que representa una "X" para cerrar el modal.

## Definición del componente ImageModal

### Props:

**open**: Booleano que indica si el modal está abierto (true) o cerrado (false).
**onClose**: Función que se llama para cerrar el modal.
**src**: URL de la imagen que se mostrará en el modal.

### Estructura del JSX:

**Modal**: Contenedor principal del modal.
**open=open**: Controla si el modal está abierto o cerrado.
**onClose=onClose**: Función para cerrar el modal.
**style=**: Aplica estilos CSS en línea para centrar el modal en la pantalla.
**display: "flex"**: Hace que el modal use un flexbox.
**alignItems: "center"**: Centra verticalmente el contenido del modal.
**justifyContent: "center"**: Centra horizontalmente el contenido del modal.
**div**: Contenedor interno para la imagen y el botón de cerrar.
**style=**: Aplica estilos CSS en línea.
**position: "relative"**: Posiciona el div relativamente para poder posicionar el botón de cerrar.
**backgroundColor: "white"**: Establece el fondo blanco.
**padding: "3rem"**: Aplica un padding de 3 rem.
**border: "1px solid #ccc"**: Establece un borde de 1px con color gris claro.
**IconButton**: Botón para cerrar el modal.
**style=**: Aplica estilos CSS en línea.
**position: "absolute"**: Posiciona el botón absolutamente dentro del div.
**top: "1px"**: Establece la posición desde la parte superior.
**right: "10px"**: Establece la posición desde la derecha.
**fontSize: "2rem"**: Tamaño de fuente de 2 rem.
**cursor: "pointer"**: Cambia el cursor a una mano cuando se pasa por encima.
**onClick=onClose**: Llama a la función onClose cuando se hace clic.
**CloseIcon**: Icono de cerrar (una "X").
**img**: Imagen que se muestra en el modal.
**style=width: "100%", height: "100%"**: Ajusta la imagen para que ocupe todo el espacio del contenedor.
**src=src**: Establece la URL de la imagen.
**alt="Modal content"**: Texto alternativo para la imagen.
