---
sidebar_position: 5
---

# 🔘 ButtonAgents.js

Este componente **CustomButton** representa un botón personalizado con opciones de menú desplegable, utilizado para crear una interfaz de usuario flexible y dinámica.

```js
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Menu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Stack from "@mui/material/Stack";
import stylesButton from "../../styles/ButtonAgents/ButtonAgents";

const CustomButton = ({
  icon,                  // 🌟 Icono que se mostrará en el botón
  text,                  // ✏️ Texto que se mostrará en el botón
  submenuTitle,         // 📜 Título del submenú
  submenuOptions,       // 🗂️ Opciones del submenú
  href,                 // 🔗 URL a la que redirigir si se proporciona
  textColor,            // 🎨 Color del texto
  submenuIcon,          // 🌐 Icono que se mostrará en el submenú
  onLogout,             // 🚪 Función a ejecutar al cerrar sesión
  onSelect,             // ✅ Función a ejecutar al seleccionar una opción del submenú
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const renderSubMenuOptions = () => {
    const options = Array.isArray(submenuOptions)
      ? submenuOptions.filter((option) => option !== "Salir")
      : [];

    return (
      <div>
        {options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={() => handleSubMenuOptionClick(option)}
          >
            <Typography style={stylesButton.menuItem}>{option}</Typography>
          </MenuItem>
        ))}
        {Array.isArray(submenuOptions) && submenuOptions.includes("Salir") && (
          <MenuItem onClick={handleLogoutClick}>
            <Typography style={stylesButton.menuItem}>Salir</Typography>
          </MenuItem>
        )}
      </div>
    );
  };

  const handleSubMenuOptionClick = (option) => {
    handleClose();
    onSelect(option);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    handleClose();
    onLogout();
  };

  const buttonContent = (
    <Stack direction="row" alignItems="center">
      {icon && <IconButton color="inherit">{icon}</IconButton>}
      {text && (
        <Typography sx={{ ...stylesButton.text, color: textColor }}>
          {text}
        </Typography>
      )}
      {submenuOptions && submenuOptions.length > 0 && <ArrowDropDownIcon />}
    </Stack>
  );

  const renderSubmenu = (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      elevation={0}
      PaperProps={{
        style: { width: "150px", background: "transparent" },
      }}
    >
      {submenuTitle && (
        <MenuItem disabled>
          <Stack direction="row" alignItems="center">
            {submenuIcon && (
              <IconButton color="inherit" sx={{ marginTop: "1rem" }}>
                {submenuIcon}
              </IconButton>
            )}
            {submenuTitle && (
              <Typography sx={stylesButton.submenuTitle}>
                {submenuTitle}
              </Typography>
            )}
          </Stack>
        </MenuItem>
      )}
      {renderSubMenuOptions()}
    </Menu>
  );

  if (href) {
    return (
      <a href={href} style={{ textDecoration: "none" }}>
        <Button
          style={{ boxShadow: "none" }}
          onMouseEnter={handleClick}
          onMouseLeave={handleClose}
        >
          {buttonContent}
        </Button>
        {renderSubmenu}
      </a>
    );
  }

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ boxShadow: "none" }}
      >
        {buttonContent}
      </Button>
      {renderSubmenu}
    </div>
  );
};

export default CustomButton;
```

### ⚙️ Propiedades del componente

| Propiedad        | Tipo       | Descripción                                                     |
| ---------------- | ---------- | --------------------------------------------------------------- |
| `icon`           | `element`  | 🌟 Icono que se mostrará en el botón                           |
| `text`           | `string`   | ✏️ Texto que se mostrará en el botón                           |
| `submenuTitle`   | `string`   | 📜 Título del submenú                                          |
| `submenuOptions` | `array`    | 🗂️ Opciones del submenú                                       |
| `href`           | `string`   | 🔗 URL a la que redirigir si se proporciona                    |
| `textColor`      | `string`   | 🎨 Color del texto                                             |
| `submenuIcon`    | `element`  | 🌐 Icono que se mostrará en el submenú                        |
| `onLogout`       | `function` | 🚪 Función a ejecutar al cerrar sesión                         |
| `onSelect`       | `function` | ✅ Función a ejecutar al seleccionar una opción del submenú    |

## Imports

Se importan varios componentes y estilos de MUI, así como el estado (useState) y el componente principal de React (React).

## Definición del componente

Define un componente de función llamado CustomButton que acepta varias propiedades como argumentos.

## Manejador de Eventos

Cada función maneja eventos relacionados con la interacción del usuario, como hacer clic en opciones del menú, abrir o cerrar el menú y hacer clic en la opción "Salir".