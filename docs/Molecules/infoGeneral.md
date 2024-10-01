---
sidebar_position: 111
---

# InfoGeneral.js (Molecules)

Aquí definimos un componente de React llamado **InfoGeneral.js**, que representa una interfaz de usuario para mostrar información general y detalles sobre agentes registrados en una aplicación web.

## Imports

Imports de `src/components/molecules/InfoGeneral.js`:

```jsx title="src/components/molecules/InfoGeneral.js"
import React, { useState, useEffect } from 'react';
import { Typography } from "@mui/material";
import InputComponent from "../atoms/InputComponent";
import useWexClient from '../../hooks/Clients/wexClient,';
import Table from './Table';
import ButtonComponent from '../atoms/ButtonComponent';
```

Los imports anteriores tienen la siguiente funcionalidad en el archivo js trabajado:
Se importa la biblioteca React, así como varios componentes y ganchos necesarios para construir la interfaz de usuario. Entre los componentes importados se incluyen Typography, InputComponent, Table, y ButtonComponent. También se utiliza el gancho useWexClient para obtener datos relacionados con los agentes registrados.

## Function InfoGeneral

El componente InfoGeneral es un componente funcional de React que se encarga de mostrar información general y detalles sobre agentes registrados.

```jsx
function InfoGeneral() {...}
```

Lo siguiente define estados y funciones para gestionar la entrada del usuario en los campos de nombre del servicio y saludo inicial. Las funciones handleInputChange y handleInputChangeSaludo se utilizan para capturar los cambios en la entrada del usuario y validarlos. También se define la función handleClickAdd que se ejecutará cuando se haga clic en el botón "Agregar Usuario". Estas secciones del código se encargan de la interacción del usuario con los campos de entrada y el botón en la interfaz de usuario.

```jsx
const [inputValue, setInputValue] = useState('');
const [errorText, setErrorText] = useState('');
const handleInputChange = (e) => {
    const inputValue = e.target.value;

    const isValid = /^[a-zA-Z]+$/.test(inputValue);

    if (inputValue.trim() === '') {
        setErrorText('Este campo es obligatorio');
    } else if (!isValid) {
        setErrorText('Solo se aceptan letras');
    } else {
        setErrorText('');
    }

    setInputValue(inputValue);
};

const [inputValueSaludo, setInputValueSaludo] = useState('');
const [errorSaludo, setErrorSaludo] = useState('');

const handleInputChangeSaludo = (e) => {
    const inputValueSaludo = e.target.value;

    const isValid = /[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s.,!?¡¿-]+/.test(inputValueSaludo);

    if (inputValueSaludo.trim() === '') {
        setErrorSaludo('Este campo es obligatorio');
    } else if (!isValid) {
        setErrorSaludo('Solo se aceptan letras y caracteres especiales');
    } else {
        setErrorSaludo('');
    }

    setInputValueSaludo(inputValueSaludo);
};

const handleClickAdd = () => {
    alert('Funciona el evento a');
};
```

Se utiliza el hook useWexClient para obtener la función getInfoGeneral y otros recursos relacionados con la API.

```jsx
const { getInfoGeneral } = useWexClient();
```

Se definen estados con useState para gestionar la información obtenida de la API y para manejar los datos de entrada y errores en los campos de nombre del servicio y saludo inicial.

```jsx
const [data, setData] = useState(null);
const [info, setInfo] = useState(null);
```

Se utiliza el efecto useEffect para cargar la información inicial al montar el componente. La función getInfoGeneral se llama y la respuesta se utiliza para establecer los estados data e info con información sobre agentes registrados y la información general del servicio.

```jsx
useEffect(() => {
        getInfoGeneral().then((response) => {
        setData(response.agents);
        setInfo(response.generalInformation[0]);
        });
    }, []);
```

Se definen los títulos de las columnas para la tabla de agentes registrados en columnTitles.

```jsx
const columnTitles = ['Usuario', 'Nombre', 'Perfil', 'Queue', 'Estado'];
```

Se declara la función cellRenderer que se utiliza para personalizar la visualización de los datos en la tabla. Esta función mapea los valores de las columnas a la información específica de cada agente. También definimos la estructura de la interfaz de usuario, se muestran títulos, campos de entrada para el nombre del servicio y el saludo inicial, y una tabla de agentes registrados.

```jsx
function cellRenderer(agentItem, title) {
        return (
            <div style={{
                fontSize: '1rem',
                color: 'darkgray',
                textAlign: 'center',
                marginTop: '1.5rem'
            }}>
                {title === 'Usuario'
                ? agentItem.user
                : title === 'Nombre'
                ? agentItem.profile.name
                : title === 'Perfil'
                ? agentItem.profile.class
                : title === 'Queue'
                ? agentItem.queue
                : title === 'Estado'
                ? agentItem.status === 1
                ? 'Activo'
                : agentItem.status === 0
                ? 'Suspendido'
                : agentItem.status === 10
                ? 'Baja'
                : null
                : null
                }
            </div>
        );
    }
```

## Typography

Se utiliza el componente Typography para mostrar títulos y mensajes en la interfaz de usuario.

```jsx
<Typography
                variant="h4"
                style={{
                    textAlign: "left",
                    color: "black",
                    fontFamily: "sans-serif",
                    marginTop: "1rem",
                    marginLeft: "2rem",
                    opacity: "0.7",
                    fontWeight: "bold"
                }}>
                Información General
            </Typography>

            <Typography
                variant="h6"
                style={{
                    textAlign: "left",
                    color: "black",
                    fontFamily: "sans-serif",
                    marginTop: "1rem",
                    marginLeft: "2rem",
                    opacity: "0.5"
                }}>
                Nombre del Servicio
            </Typography>
```

## InputComponent

Se emplea el componente InputComponent para permitir al usuario ingresar datos en los campos de nombre del servicio y saludo inicial. Los valores y las funciones de manejo se vinculan a los estados y funciones definidas anteriormente.

```jsx
<InputComponent
                   label={info ? info.name : ''}
                   value={inputValue}
                   onChange={handleInputChange}
                   fullWidth
                   variant="outlined"
                   errorText={errorText}
                  >

                </InputComponent>
```

Se muestra la tabla de agentes registrados utilizando el componente Table, y se pasa la función cellRenderer para personalizar la visualización de los datos.

```jsx
 <Table data={data} columnTitles={columnTitles} cellComponent={cellRenderer} />
```

Finalmente, se incluye un botón "Agregar Usuario" que, al hacer clic en él, ejecutará la función handleClickAdd.

```jsx
<ButtonComponent label="Agregar Usuario" onClick={handleClickAdd} />
```

