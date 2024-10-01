---
sidebar_position: 43
---

El componente TabsComponent está diseñado para renderizar una interfaz de pestañas utilizando el componente Tabs de Material-UI.

```js
import { Stack, Tab, Tabs } from "@mui/material";

function TabsComponent (props) {
  const { value = '1', setValue = () => { }, tabs = [] } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack>
    <Tabs
    value={value}
    onChange={handleChange}
    textColor="secondary"
    indicatorColor="secondary"
    variant="scrollable"
    >
    {tabs.map((item, index) => {
    return (
    <Tab
    key={index}
    value={item.key}
    label={item.label}
    disabled={item.disabled} />
    );
    })}
    </Tabs>
    </Stack>
  );
}

export default TabsComponent;
```
