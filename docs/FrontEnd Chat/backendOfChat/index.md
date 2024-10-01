---
sidebar_position: 59
---

# index.html

Este código representa una página HTML que utiliza Bootstrap y Socket.IO para establecer una conexión con un servidor de sockets.

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Socket Server</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css" integrity="sha384-DhY6onE6f3zzKbjUPRc2hOzGAdEf4/Dz+WJwBvEYL/lkkIsI3ihufq9hk9K4lVoK" crossorigin="anonymous">
</head>
<body class="container">

    <h1 class="mt-5">Acceso denegado</h1>
    <hr>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.1/socket.io.js" integrity="sha512-AcZyhRP/tbAEsXCCGlziPun5iFvcSUpEz2jKkx0blkYKbxU81F+iq8FURwPn1sYFeksJ+sDDrI5XujsqSobWdQ==" crossorigin="anonymous"></script>

    <script>
        // Conexión con el socket server
        const socket = io('http://localhost:8080');

        
        /// Para emitir
        // socket.emit('mensaje-to-server', { data });
        
        // Para escuchar
        socket.on('mensaje-from-server', (data) => {
            // callback a ejecutar
        });
        

    </script>
    
</body>
</html>
```

En resumen, esta página HTML proporciona un mensaje de "Acceso denegado" y utiliza la biblioteca Socket.IO para establecer una conexión con un servidor de sockets. 