---
sidebar_position: 13
---

# Counter.js

Este componente Counter proporciona un temporizador que cuenta el tiempo en horas, minutos y segundos, y se actualiza cada segundo. El color del texto es personalizable mediante la propiedad color.

```js
import React, { useEffect, useState } from "react";

const Counter = ({ color }) => {
  const [totalSeconds, setTotalSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
    setTotalSeconds((prevTotalSeconds) => prevTotalSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  return (
    <span style={{ color }}>
    {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
    </span>
  );
};

export default Counter;
```