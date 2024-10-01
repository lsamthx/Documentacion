---
sidebar_position: 21
---

# Drawer.js

Este componente proporciona un ícono con un tooltip que, al hacer clic, abre un cajón con contenido adicional. El cajón tiene un encabezado con un botón de retroceso y puede contener cualquier contenido adicional que se pase como hijo (children). Las posiciones del cajón se pueden personalizar mediante las propiedades top y left.

```js
import React, { useState } from "react";
import { Stack, Drawer, Typography, IconButton, Tooltip } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import stylesIconNav from "../../styles/Icons/iconsNav";
import stylesDrawer from "../../styles/Drawer/Drawer";

const DrawerWithTooltip = ({ nameTip, title, iconTitle, icon, children, top, left }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleButtonClick = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <Stack>
    <Tooltip title={nameTip} arrow placement="right" style={stylesIconNav.IconGlobal}>
    <IconButton onClick={handleButtonClick}>
    {icon}
    </IconButton>
    </Tooltip>

    <Drawer
    anchor="left"
    open={drawerOpen}
    onClose={handleCloseDrawer}
    sx={{...stylesDrawer.drawer,
    "& .MuiDrawer-paper": {
    ...stylesDrawer.muiDrawer, 
    top: top,
    left: left,
    },
    }}
    >
    <Stack direction="row">
    <Stack></Stack>
    <Stack sx={stylesDrawer.icon}>
    <IconButton>{iconTitle}</IconButton>
    <Typography  gutterBottom sx={stylesDrawer.title}>
    {title}
    </Typography>
    </Stack>
    <Stack style={stylesDrawer.iconButton}>
    <IconButton
    onClick={handleCloseDrawer}
    style={stylesDrawer.onClick}
    >
    <ArrowBackIos
    fontSize="small"
    sx={stylesDrawer.arrowBack}
    />
    </IconButton>
    </Stack>
    </Stack>
    <Stack>
    {children}
    </Stack>
    </Drawer>
    </Stack>
  );
};

export default DrawerWithTooltip;
```