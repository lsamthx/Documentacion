---
sidebar_position: 51
---

# AuthContext.js

 Este código busca crear un contexto en React utilizando la función createContext.

 ## Imports

 ```js title="src/Auth/Context/AuthContext.js"
import { createContext } from "react";
import { AuthProvider } from "./AuthProvider";
```

## Export

Finalmente, se exporta el componente AuthContext. Esto permite que otros módulos de la aplicación importen y utilicen este componente como sea necesario.

```js
export const AuthContext = createContext(AuthProvider);
```