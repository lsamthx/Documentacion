---
sidebar_position: 12
---

# ComentBox.js

Este componente TextInput proporciona un campo de texto de entrada con opciones de personalización, como el título, el ancho, el color de fondo y el color del texto.

```js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const TextInput = ({ title, width, backgroundColor, textColor}) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <Container>
    <div>
    <Typography  sx={{color:"#999999",}} >{title}</Typography>
    <TextField
    id="textoEntrada"
    variant="outlined"
    fullWidth
    multiline
    rows={4}
    value={inputText}
    onChange={handleInputChange}
    style={{  backgroundColor:backgroundColor, width:width, color:textColor,color: `${textColor} !important`  }}
    />
    </div>
    </Container>
  );
};

export default TextInput;
```# ComentBox.js

Este componente TextInput proporciona un campo de texto de entrada con opciones de personalización, como el título, el ancho, el color de fondo y el color del texto.

```js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const TextInput = ({ title, width, backgroundColor, textColor}) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <Container>
    <div>
    <Typography  sx={{color:"#999999",}} >{title}</Typography>
    <TextField
    id="textoEntrada"
    variant="outlined"
    fullWidth
    multiline
    rows={4}
    value={inputText}
    onChange={handleInputChange}
    style={{  backgroundColor:backgroundColor, width:width, color:textColor,color: `${textColor} !important`  }}
    />
    </div>
    </Container>
  );
};

export default TextInput;
```