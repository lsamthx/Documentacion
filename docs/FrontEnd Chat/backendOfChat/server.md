---
sidebar_position: 64
---

Este código define una clase Server que encapsula la lógica de un servidor Express con Socket.IO. 

```jsx
// Servidor de Express
const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const cors = require("cors");

const Sockets = require("./sockets");
const { dbConection } = require("../db/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Conectar a base de datos
    dbConection();

    // Http server
    this.server = http.createServer(this.app);

    // Configuraciones de sockets
    this.io = socketio(this.server, {
      /* configuraciones */
    });
  }

  middlewares() {
    // Desplegar el directorio público
    this.app.use(express.static(path.resolve(__dirname, "../public")));

    // CORS
    this.app.use(cors());

    // Parseo del body
    this.app.use(express.json());

    // API Endpoints
    this.app.use("/api/login", require("../router/auth"));
    this.app.use("/api/mensajes", require("../router/mensajes"));
  }

  // Esta configuración se puede tener aquí o como propieda de clase
  // depende mucho de lo que necesites
  configurarSockets() {
    new Sockets(this.io);
  }

  execute() {
    // Inicializar Middlewares
    this.middlewares();

    // Inicializar sockets
    this.configurarSockets();

    // Inicializar Server
    this.server.listen(this.port, () => {
      console.log("Server corriendo en puerto:", this.port);
    });
  }
}

module.exports = Server;
```

## Explicación

### Definición de la clase Server

- **class Server**: Define la clase Server.

### Constructor

- **constructor()**: En el constructor, se inicializan propiedades como app, port, server y io. También se conecta a la base de datos llamando a la función dbConection().

### Método middlewares

- **middlewares()**: Define un método que configura los middlewares de Express.
- **this.app.use(express.static(path.resolve(__dirname, "../public")));**: Configura Express para servir archivos estáticos desde el directorio public.
- **this.app.use(cors());**: Habilita el middleware CORS para permitir solicitudes desde cualquier origen.
- **this.app.use(express.json());**: Configura Express para parsear el cuerpo de las solicitudes como JSON.
Configura las rutas de la API utilizando los routers auth y mensajes.

### Método configurarSockets

- **configurarSockets()**: Define un método que configura el manejo de sockets utilizando la clase Sockets.
- **new Sockets(this.io);**: Instancia la clase Sockets pasándole el objeto io de Socket.IO.

### Método execute

- **execute()**: Define un método que inicializa los middlewares, configura los sockets y arranca el servidor.
- **this.middlewares();**: Inicializa los middlewares.
- **this.configurarSockets();**: Configura los sockets.
- **this.server.listen(this.port, ());**: Inicia el servidor en el puerto especificado.

### Exportación de la clase

- **module.exports = Server;**: Exporta la clase Server para que pueda ser utilizada en otros archivos.

En resumen, este código encapsula la lógica del servidor Express con Socket.IO, incluyendo la configuración de middlewares, la conexión a la base de datos, y la configuración de los sockets. La clase Server se instancia y se ejecuta para iniciar el servidor.