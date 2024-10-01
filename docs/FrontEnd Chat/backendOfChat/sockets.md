---
sidebar_position: 65
---

# Sockets.js

Este código define una clase Sockets que maneja los eventos de sockets para la aplicación.

```jsx
class Sockets {

    constructor( io ) {

    this.io = io;

    this.socketEvents();
    }

    socketEvents() {
    // On connection
    this.io.on('connection', ( socket ) => {

    //ToDo: Validar el JWT
    //Si el token no es valido, desconectar
    //Si el token es valido, conectarlo
    //Saber que usuario esta activo mediante el UID
    //Emitir todos los usuarios conectados
    //Socket join, uid
    //Escuchar cuando el cliente manda un mensaje
    //mensaje personal
    //Desconectar
    //Marcar en la base de datos que el usuario se desconecto
    //Emitir todos los usuarios conectados
        
    });
    }

}

module.exports = Sockets;
```

Este código proporciona la estructura básica para manejar eventos de sockets. Dentro del evento de conexión, se puede implementar la lógica específica necesaria, como la autenticación del usuario, la gestión de mensajes, la actualización del estado de conexión, entre otras cosas. 