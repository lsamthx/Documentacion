---
sidebar_position: 174
---

# login.js

Este es un diseño básico para un componente de inicio de sesión (LoginComponent) que utiliza componentes de Material-UI (Stack) y componentes personalizados como CardComponent y Input.

```js
import { Stack } from "@mui/material";
import CardComponent from "../components/atoms/CardComponent";
import Input from "../components/atoms/input";
import ButtonTranslation from "../Traduccion_ES_EN/ButtonTraslation";

function LoginComponent() {
  return (
    <Stack direction="column" justifyContent="flex-start" alignItems="flex-end">
      
      {/*<Stack
        
      sx={{ margin: "auto", marginTop: "1%", marginRight: "5%"}}
      >
        
        <ButtonTranslation />
  </Stack>*/}
      
      <Stack sx={{ width: "400px", margin: "auto", marginTop: "8%" }}>

        <CardComponent>
          <Input />
        </CardComponent>
      </Stack>
    </Stack>
  );
}

export default LoginComponent;
```