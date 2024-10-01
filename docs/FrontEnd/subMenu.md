---
sidebar_position: 40
---

# SubMenu.js

Este componente proporciona un menú desplegable sensible al desplazamiento con opciones específicas y un botón que se activa al pasar el ratón sobre él.

```js
import React, { useState, useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const SubMenu = ({ user, loggout = () => { } }) => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
    if (window.scrollY > 2) {
    setIsScrolling(true);
    } else {
    setIsScrolling(false);
    }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Button
    aria-controls="simple-menu"
    aria-haspopup="true"
    onMouseEnter={handleMouseEnter}
    style={{
    textTransform: "capitalize",
    fontSize: "20px",
    textDecoration: "none",
    color: isScrolling ? "blue" : "white",
    transition: "background-color 0.3s",
    fontFamily: "sans-serif",

    }}
    >
    {user}
    </Button>
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
    <MenuItem onClick={handleClose} component={Link} to="#">
    Mi Cuenta
    </MenuItem>
    <MenuItem onClick={handleClose} component={Link} to="#">
    Mis Servicios
    </MenuItem>
    <MenuItem onClick={() => {
    handleClose();
    loggout();
    }}>
    Salir
    </MenuItem>
    </Menu>
    </>
  );
};

export default SubMenu;
```