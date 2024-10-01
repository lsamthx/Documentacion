---
sidebar_position: 129
---

# TextMessage.js (Molecules)

Este componente de TextMessage es un componente funcional de React que representa un área de texto (textarea). 

```js
import { useState } from "react";

function TextMessage(props) {
  const { placeholder = '', onKeyEnter = () => { } } = props;
  const [] = useState();

  return (
    <textarea
    placeholder={placeholder}
    style={{
    width: '90%',
    resize: 'none',
    borderRadius: '10px',
    padding: '10px 10px 0',
    height: '3rem',
    maxHeight: '3rem'
    }}
    onKeyUp={(event) => {
    if (event.key === "Enter")
    onKeyEnter();
    }}
    />
  );
}

export default TextMessage
```

## Propiedades

- placeholder: Un valor predeterminado para el atributo placeholder del textarea.
- onKeyEnter: Una función que se llama cuando se presiona la tecla "Enter" en el textarea.

## Estado

Se utiliza el hook useState, pero parece haber una declaración vacía de estado. Es posible que haya olvidado proporcionar el estado y la función de actualización del estado.

## Renderización

- Renderiza un textarea con ciertos estilos en línea.
- El ancho del textarea es el 90% del contenedor.
- Se deshabilita el redimensionamiento del textarea.
- Se establece un borde redondeado.
- El relleno (padding) y la altura (height) están configurados para darle una apariencia específica.
- El textarea tiene un límite máximo de altura (maxHeight).

## Eventos

Utiliza el evento onKeyUp para detectar cuando se presiona una tecla. Si la tecla presionada es "Enter", se llama a la función onKeyEnter.

## Componente Exportado

El componente TextMessage se exporta al final del archivo para que pueda ser utilizado en otros archivos.