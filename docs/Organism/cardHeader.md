---
sidebar_position: 131
---

# CardHeader.js

Este componente CardHeader es un encabezado de tarjeta que incluye una imagen de Avatar, el nombre "TUL", y pestañas (Tabs) para cambiar entre los tableros "Dashboard General" y "Dashboard Tickets". 

```jsx 
import { Avatar, Stack, Tab, Tabs, Typography } from "@mui/material";


function CardHeader() {
    return (
    <Stack
    sx={{
    minHeight: '400px',
    maxHeight: '600px',
    backgroundColor: '#67B6FF',
    justifyContent: 'center',
    padding: '1rem 8rem',
    display: 'flex'
    }}
    >
    <Stack direction='row'>
    <Avatar alt="Remy Sharp" src="https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146" />
    <Typography
    sx={{
    paddingLeft: '10px',
    paddingTop: '10px'
    }}
    >
    TUL
    </Typography>

    </Stack>

    <Stack>
    <Tabs>
    <Tab value="two" label="Dashboard General" />
    <Tab value="three" label="Dashboard Tickets" />
    </Tabs>
    </Stack>
    </Stack>
    );
}

export default CardHeader;
```
