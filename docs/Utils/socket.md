---
sidebar_position: 163
---

# Socket.js

Este código crea y exporta una conexión WebSocket a un servidor específico (https://devapi.wex.services/) utilizando socket.io-client. La opción de no intentar la reconexión automática está deshabilitada. Esto es útil en situaciones donde se quiere tener un control manual sobre las reconexiones o donde las reconexiones automáticas no son deseadas.

```jsx 
import { io } from "socket.io-client";

export default io.connect('https://devapi.wex.services/', { reconnection: false });
// export default io.connect('http://localhost:3001/');
```