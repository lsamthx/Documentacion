---
sidebar_position: 2
---

# 📋 AlternRows.js

Este componente representa una lista de elementos donde cada elemento se muestra como un enlace con estilos alternos de fondo. El texto del enlace es el valor del elemento en la lista.

---

## 🛠️ Implementación

Aquí tienes el código para el componente `AlternRows`:

```js
import React from "react";
import stylesAltern from "../../styles/AlternRows/Altern";

const ListRows = ({ listaDeItems }) => {
  return (
    <div>
    {listaDeItems.map((item, index) => (
    <a
    key={index}
    href={`#item-${index}`}
    style={{
    ...stylesAltern.a,
    backgroundColor: index % 2 === 0 ? "#f8f8f8" : "#ffffff",
    }}
    >
    {item}
    </a>
    ))}
    </div>
  );
};

export default ListRows;
```

## ⚙️ Propiedades

| Propiedad    | Tipo     | Descripción                                       | Valor por Defecto |
|--------------|----------|---------------------------------------------------|-------------------|
| `listaDeItems`    | array  | Lista de elementos que se mostrarán como enlaces.        | -                 |


