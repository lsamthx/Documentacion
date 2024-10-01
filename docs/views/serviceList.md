---
sidebar_position: 186
---

# ServiceList.js

El componente ServiceList es una vista que muestra un mapa (MapDisplay) centrado en una ubicación específica y, si es posible, muestra también la ubicación actual del usuario con un círculo alrededor.

```js
import { useEffect, useState } from "react";
import MapDisplay from "../../../components/atoms/MapDisplay";
import { Stack } from "@mui/material";

function ServiceList () {
  const [userLocation, setuserLocation] = useState(null);
  
  const centerLat = 19.371267;
  const centerLng = -99.174697;
  const zoom = 12;
  const width = '100%';
  const height = '100%';
  const circleRadius = 500;

  const getUserLocation = () => {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
    const user = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
    };
    setuserLocation(user);
    });
    }
  }

  useEffect(() => {
    getUserLocation();
  }, [])

  return (
    <Stack>
    <MapDisplay
    zoom={zoom}
    centerLat={centerLat}
    centerLng={centerLng}
    width={width}
    height={height}
    userLocation={userLocation}
    circleRadius={circleRadius}
    />
    </Stack>
    );
  }
  
  export default ServiceList;
```