---
sidebar_position: 134
---

# darkMode.js

Este código React define un componente ThemeButton que utiliza Material-UI para cambiar entre un tema claro (lightTheme) y un tema oscuro (darkTheme) al hacer clic en un botón.

```js 
import React, { useState } from "react";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
  mode: "dark",
  },
});

const ThemeButton = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme.palette.mode === "light" ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Button onClick={toggleTheme}>Toggle Theme</Button>
    </ThemeProvider>
  );
};

export default ThemeButton;
```