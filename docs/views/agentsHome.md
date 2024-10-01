---
sidebar_position: 165
---

# AgentsHome.js

El componente AgentsHome es un simple componente funcional en React que solo renderiza el componente HomeAgents dentro de un fragmento. Este tipo de estructura es común en React para organizar y encapsular partes de la interfaz de usuario en componentes reutilizables.

```js
import HomeAgents from "../../components/organisms/HomeAgents";



function AgentsHome() {


    return (  
      <>
      <HomeAgents/>
      </>
      
    );
}

export default AgentsHome;
```