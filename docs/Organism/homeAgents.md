---
sidebar_position: 135
---

# HomeAgents.js

El componente HomeAgents es la página principal de la aplicación para los agentes. 

```js 
import ButtonHome from "../../components/molecules/ButtonsAgentsHome";
import LeftBar from "./LeftBar";
import NavAgents from "../../components/molecules/NavAgents";
import NavTab from "../../components/molecules/NavNumber";

function HomeAgents() {
  return (
  <>
  <NavTab />
  <NavAgents />
  <ButtonHome />
  <LeftBar />
  </>
  );
}

export default HomeAgents;
```
