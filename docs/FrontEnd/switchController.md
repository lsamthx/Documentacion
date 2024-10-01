---
sidebar_position: 41
---

# SwitchController.js

Este componente proporciona una manera de incorporar un interruptor personalizado con un estilo similar al de iOS en una interfaz de usuario de React. La etiqueta asociada al interruptor se coloca en la posición "start" para que aparezca antes del interruptor.

```js
import React from 'react';
import { FormControlLabel, Switch, Typography } from "@mui/material";
import { withStyles } from "@material-ui/core/styles";

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

function SwitchComponent({ label, color,...props }) {
  return (
    <FormControlLabel
      control={<IOSSwitch  {...props} />}
      label={
        <Typography variant="body1" style={{ color: color }}>
          {label}
        </Typography>
      }
      labelPlacement="start"
    />
  );
}

export default SwitchComponent;
```
