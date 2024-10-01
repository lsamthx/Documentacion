---
sidebar_position: 138
---

# Navbar.js

El código es un componente de barra de navegación (Navbar) implementado en React utilizando Material-UI.

```js 
import React, { useEffect, useState } from 'react'
import { AppBar, Stack } from "@mui/material";
import SubMenu from '../atoms/SubMenu';
import { useContext } from 'react';
import { AuthContext } from '../../Auth/Context';
import { useNavigate } from 'react-router-dom';
import stylesNavbar from '../../styles/Navbar/Navbar';

function Navbar() {
  const { payload, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const userName = payload?.profile?.name || '';
  const [isScrolling, setIsScrolling] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const loggoutSession = () => {
    logout();

    navigate('/', {
    replace: false
    });
  };

  return (

    <div >
    {<AppBar
    style={{
    ...stylesNavbar.appBar,
    ...(isScrolling ? stylesNavbar.appBarScrolling : {}),
    }}
    >
    <Stack direction="row" style={{ justifyContent: "space-between" }}>
    <Stack sx={stylesNavbar.stack}>
    <a href="/option-dashboard" id="logo"
    style={{ ...stylesNavbar.textBlue,
    ...(isScrolling ? stylesNavbar.textBlueScrolling : {}),}}>we·x</a>
    </Stack>

    <Stack sx={stylesNavbar.stack}>
    <div>
    <a
    className="active"
    href="/option-dashboard"
    style={{
    ...stylesNavbar.a,
    ...(isScrolling ? stylesNavbar.aScrolling : {}),
    }}>Inicio</a>

    <a href="/reportes"
    style={{
    ...stylesNavbar.a,
    ...(isScrolling ? stylesNavbar.aScrolling : {}),
    }}> Reportes</a>

    <a
    href="#"
    style={{
    ...stylesNavbar.a,
    ...(isScrolling ? stylesNavbar.aScrolling : {}),
    }}
    >Buscador
    </a>

    <a style={
    stylesNavbar.a
    }>
    <SubMenu 
    user={userName}
    loggout={() => loggoutSession()}
    />
    </a>
    </div>

    </Stack>
    </Stack>
    </AppBar>
    }
    </div >

  );
}

export default Navbar;
```

## Componente Navbar (Navbar.js)

Este componente representa una barra de navegación que contiene un logo, enlaces de navegación y un menú desplegable para el usuario. También incluye estilos que se aplican al cambiar el desplazamiento (scrolling) de la página.

- Este componente usa el contexto de autenticación (AuthContext) para obtener información sobre el usuario autenticado y realizar el cierre de sesión.
- La barra de navegación cambia su apariencia (stylesNavbar) al desplazarse hacia abajo (scrolling).
