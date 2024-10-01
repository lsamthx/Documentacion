---
sidebar_position: 98
---

# Aplicaciones.js (Molecules)

Este fragmento de código corresponde a Aplicaciones.js, que muestra información relacionada con aplicaciones terciarias en un formulario.

## Imports

Imports de `src/components/molecules/DashboardTickets.js`:

```jsx title="src/components/molecules/Aplicaciones.js"
import React, { useState, useEffect } from 'react';
import { Typography } from "@mui/material";
import CardComponent from '../atoms/CardComponent';
import InputComponent from '../atoms/InputComponent';
import { FormControl, InputLabel, Select, MenuItem ,Grid} from '@mui/material';
import useWexClient from '../../hooks/Clients/wexClient,';
```

Como se puede ver se importa useState y useEffect de React, así como varios componentes y elementos de Material-UI para construir la interfaz de usuario.

Esta parte del código es el comienzo de la función Aplicaciones. Aquí se establece el estado inputValue para gestionar un campo de entrada, y se establece el estado errorText para manejar mensajes de error relacionados con ese campo. 
Luego, se define una función llamada handleInputChange, que será ejecutada cuando ocurran cambios en el campo de entrada. Esta función toma un evento (e) como argumento, que generalmente es un evento de cambio de un campo de entrada HTML.

```jsx
function Aplicaciones() {
    const [inputValue, setInputValue] = useState('');
    const [errorText, setErrorText] = useState('');
    const handleInputChange = (e) => {
      ...}}
```

Dentro de handleInputChange, se asigna el valor del campo de entrada (inputValue) a la variable local con el mismo nombre y se realizan varias comprobaciones condicionales para validar el valor ingresado.
Se verifica si el valor está vacío (trim() === ''). Si es así, se establece el mensaje de error "Este campo es obligatorio".

Luego, se verifica si la longitud del valor supera los 15 caracteres. Si es así, se establece el mensaje de error "El máximo de dígitos es 15".

Finalmente, se utiliza una expresión regular (/^\d+$/) para verificar si el valor solo contiene dígitos numéricos. Si no es el caso, se establece el mensaje de error "Solo se aceptan números".

Si ninguna de estas condiciones se cumple, se asigna una cadena vacía a errorText, lo que indica que no hay errores en el campo.

```jsx
const inputValue = e.target.value;

        (inputValue.trim() === '') ?
        setErrorText('Este campo es obligatorio') :
        (inputValue.length > 15) ?
        setErrorText('El máximo de dígitos es 15') :
        (!/^\d+$/.test(inputValue)) ?
        setErrorText('Solo se aceptan números') :

        setErrorText('')

        setInputValue(inputValue);
```

## Consts


En esta parte del código, se definen más estados y funciones para manejar un campo de entrada adicional y un menú desplegable, y se establece la lógica para manejar los cambios en ellos.

Estos estados se utilizan para manejar un campo de entrada adicional. inputValueToken guarda el valor del campo de entrada, y errorToken guarda los mensajes de error relacionados con ese campo.

```jsx
const [inputValueToken, setInputValueToken] = useState('');
const [errorToken, setErrorToken] = useState('');
```

Esta función se ejecutará cuando ocurran cambios en el campo de entrada adicional. Al igual que la función anterior, toma un evento (e) como argumento y actualiza el estado inputValueToken con el nuevo valor del campo. Luego, verifica si el valor del campo está vacío (trim() === '') y establece el mensaje de error "Este campo es obligatorio" si es el caso. Si el campo no está vacío, se asigna una cadena vacía a errorToken, lo que indica que no hay errores en el campo.

```jsx
const handleInputChangeToken = (e) => {
        const inputValueToken = e.target.value;

        if (inputValueToken.trim() === '') {
            setErrorToken('Este campo es obligatorio');
        } else {
            setErrorToken('');
        }

        setInputValueToken(inputValueToken);
    };
```

Estos estados se utilizan para manejar un menú desplegable. selectedOption guarda la opción seleccionada, y error se utiliza para indicar si el menú desplegable está en un estado de error.

```jsx
const [selectedOption, setSelectedOption] = useState('');
const [error, setError] = useState(true);
```

Esta función se ejecutará cuando ocurran cambios en el menú desplegable. Toma un evento (e) como argumento y actualiza el estado selectedOption con la opción seleccionada. Luego, verifica si no se ha seleccionado ninguna opción (es decir, si selectedValue es una cadena vacía) y establece error en true. Esto indica que hay un error en el menú desplegable, y se mostrará un mensaje de error si no se selecciona ninguna opción.

```jsx
const handleChange = (e) => {
const selectedValue = e.target.value;
setSelectedOption(selectedValue);
setError(selectedValue === '');
};
```

Se utiliza el hook personalizado useWexClient para obtener datos a través de la función getAplications. Los datos se almacenan en el estado data utilizando el setData para su posterior uso.

```jsx
const { getAplications } = useWexClient();
const [data, setData] = useState(null);
```

En este fragmento de código, se utiliza el useEffect para realizar una solicitud a través de la función getAplications del hook personalizado useWexClient. La solicitud se realiza una vez que el componente se ha montado, ya que se pasa un arreglo vacío [] como segundo argumento al useEffect. Esto asegura que el efecto solo se ejecute una vez, cuando el componente se carga inicialmente.

Dentro de la función del useEffect, se llama a getAplications y se maneja la respuesta en la función then. Los datos se obtienen de la respuesta y se almacenan en el estado data utilizando setData. Más adelante, data se utilizará para mostrar información en el componente.

La función console.log(data) se utiliza para mostrar el valor de data en la consola del navegador con el propósito de depuración.

```jsx
useEffect(() => {
        getAplications().then((response) => {
        setData(response[0].tokenSchema[0]);

        });
    }, []);
    console.log(data)
    return (
    <div style={{
    width: "95rem",
    padding: "3rem 1.5rem"
        }}> ...)
```


