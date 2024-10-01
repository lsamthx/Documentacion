---
sidebar_position: 109
---

# HomeButton.js

El componente HomeButton es sencillo y directo, proporcionando una interfaz de usuario que permite la navegación a una ruta específica (/option-dashboard) al hacer clic en un botón. Utiliza useNavigate de react-router-dom para manejar la redirección.

```js
import React from 'react';
import { useNavigate } from 'react-router-dom';


const HomeButton = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/option-dashboard');
    };

    return (
        <button onClick={handleButtonClick}>Ir al panel de opciones</button>
    );
};

export default HomeButton;
```

## Imports

React se importa desde la biblioteca react para utilizar la funcionalidad de componentes de React.
useNavigate se importa desde react-router-dom para manejar la navegación del usuario.

## Definición del Componente HomeButton

**HomeButton**: Es un componente funcional.
**useNavigate**: Se usa para obtener la función navigate, que permite redirigir al usuario a diferentes rutas.

## Manejo del Evento de Clic

**handleButtonClick**: Es una función que se ejecuta cuando se hace clic en el botón. Dentro de esta función, navigate('/option-dashboard') redirige al usuario a la ruta /option-dashboard.

## Renderización del Botón

La función return del componente renderiza un botón HTML.
La propiedad onClick del botón está configurada para llamar a handleButtonClick cuando se hace clic en el botón.
El texto del botón es "Ir al panel de opciones".