---
sidebar_position: 144
---

# Login.js

El componente LoginComponent parece ser una interfaz de usuario simple para el inicio de sesión.

```jsx 
import { Stack } from "@mui/material";
import CardComponent from "../components/atoms/CardComponent";
import Input from "../components/atoms/input";


function LoginComponent() {


    return (
    <Stack
    direction="column"
    justifyContent="flex-end"
    alignItems="center"
    >
    <Stack sx={{ width: '400px', margin: 'auto', marginTop: '8%' }}>
    <CardComponent>
    <Input/>
    </CardComponent>
    </Stack>
    </Stack>
    );
}

export default LoginComponent;
```

