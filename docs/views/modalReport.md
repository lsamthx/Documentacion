---
sidebar_position: 178
---

# ModalReport.js

El componente ModalReport esta diseñado para mostrar un modal que reproduce archivos de audio cuando está abierto. 

```js
import {
  Modal, Stack,
} from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '95%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: "8px",
  width: '100%',
  margin: 'auto'
};

function  ModalReport ({
  open = false,
  handleClose = () => {},
  uriAudio = ''
}) {
  
  
  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Stack style={style}>
        <audio controls>
          <source src={uriAudio} type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
      </Stack>
    </Modal>
  );
}

export default ModalReport;
```

## Componente ModalReport

ModalReport es una función de componente de React que toma tres props: open, handleClose, y uriAudio.
**open**: Controla si el modal debe estar abierto o cerrado.
**handleClose**: Función que se llama cuando se intenta cerrar el modal.
**uriAudio**: URL del archivo de audio que se va a reproducir.

## Estilo del modal

Define un objeto style que configura las propiedades visuales del modal:
**position**: Absoluta para posicionamiento específico.
**top y left**: Colocan el modal en el centro superior derecho de la pantalla.
**transform**: Ajusta la posición relativa para centrar el modal correctamente.
**bgcolor**: Color de fondo del papel del modal.
**borderRadius**: Borde redondeado del modal.
**width**: Ancho del modal al 100% del contenedor.
**margin**: Auto para centrar horizontalmente.

## Modal de Material-UI

Utiliza el componente Modal de Material-UI para mostrar el contenido en una ventana modal.
**open**: Propiedad booleana que indica si el modal debe mostrarse.
**onClose**: Función que se llama cuando se intenta cerrar el modal, ejecutando handleClose.

## Componente Stack

Stack de Material-UI se utiliza para agrupar y alinear elementos dentro del modal.
Aplica el estilo definido (style) al Stack.

## Elemento audio

Incluye un elemento audio estándar de HTML5 que muestra controles de reproducción para el archivo de audio.
La etiqueta source define la ubicación del archivo de audio (src={uriAudio}) y el tipo de archivo (type="audio/ogg").
Si el navegador no es compatible con el formato de audio especificado, se muestra el mensaje "Your browser does not support the audio element.".