---
sidebar_position: 46
---

# ToggleButton.js

El componente CustomToggle es un componente de React que utiliza Material-UI para crear un grupo de botones de alternancia personalizados. 

```js
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from '@mui/material';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

const CustomToggle = ({ options, isIcon, title }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]?.value || null);

  const handleOptionChange = (event, newValue) => {
    setSelectedOption(newValue);
  };

  return (
    <div>
    <Typography variant="body2" sx={{ margin: '0.5rem', color: "#818181"}}>
    {title}
    </Typography>
    <Paper
    elevation={0}
    sx={{
    display: 'inline-flex',
    border: (theme) => `1px solid ${theme.palette.divider}`,
    flexWrap: 'wrap',
    }}
    >
       
    <StyledToggleButtonGroup
    size="small"
    value={selectedOption}
    exclusive
    onChange={handleOptionChange}
    aria-label="options"
    sx={{
    '& .MuiToggleButton-root': {
    boxSizing: 'content-box', 
    },
    }}
    >
    {options.map((option) => (
    <ToggleButton
    key={option.value}
    value={option.value}
    aria-label={option.label}
    sx={{
    width: 'auto',
    minWidth: 'auto',
    padding: '6px 12px', 
    }}
    >
    {isIcon ? option.icon : option.label}
    </ToggleButton>
    ))}
    </StyledToggleButtonGroup>
    {options.length > 1 && (
    <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
    )}
    </Paper>
    </div>
  );
};

export default CustomToggle;
```