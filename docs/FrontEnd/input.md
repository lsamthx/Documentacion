---
sidebar_position: 27
---

# Input.js

Este componente LoginForm esta diseñado para manejar el inicio de sesión de usuarios.

```js
import { useContext, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { AuthContext } from "../../Auth/Context";
import { useAuthClient } from "../../hooks/useAuthClient";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState('Rellena todos los campos');
  const { loginClient } = useAuthClient();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const onLogin = async () => {
    if (username === '' || password === '') {
    setMessage('Rellena todos los campos');
    setOpen(true);
    } else {
    try {
    const response = await loginClient(username, password);
  
    if (!response.success) {
    setMessage(response.message);
    setOpen(true);
    } else {
    login(response.user);
  
          
    if (response.user?.profile?.class === '_AGENT_') {
    navigate('/agents-home', {
    replace: true
    });
    } else {
    navigate('/option-dashboard', {
    replace: true
    });
    }
    }
    } catch (err) {
    setMessage(err.message);
    setOpen(true);
    }
    }
  }
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

 
  return (
  <Box
  sx={{
  backgroundImageColor: 'white',
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
      
  }}
  >
  <div style={{ textAlign: "center" }}>
  <h1 style={{ color: "black" }}>Iniciar sesión</h1>
  <div>
  <img src={require("../../assets/logo_1.png")} style={{ width: 100 }} />
  </div>
  <div
  style={{
  display: "block",
  }}
  >
  <TextField
  id="username"
  label="Usuario"
  value={username}
  onChange={handleUsernameChange}
  margin="normal"
  variant="outlined"
  />
  </div>
  <div
  style={{
  display: "block",
  }}
  >
  <TextField
  id="password"
  label="Contraseña"
  type="password"
  value={password}
  onChange={handlePasswordChange}
  margin="normal"
  variant="outlined"
  />
  </div>
  <Button
  style={{
  marginTop: "1rem",
  marginBottom: "1rem",
  }}
  type="submit"
  variant="contained"
  color="primary"
  onClick={onLogin}
  >
  Iniciar sesión
  </Button>
  <Snackbar
  open={open}
  autoHideDuration={3000}
  onClose={handleClose}
  anchorOrigin={{
  vertical: 'top',
  horizontal: 'center'
  }}
  >
  <MuiAlert
  elevation={6}
  variant="filled"
  onClose={handleClose}
  severity="error"
  >
  {message}
  </MuiAlert>
  </Snackbar>
  </div>
  </Box>
  );
};

export default LoginForm;
```
