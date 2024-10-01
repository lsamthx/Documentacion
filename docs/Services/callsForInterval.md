---
sidebar_position: 153
---

# CallsForInterval (POST)

## URL

El siguiente es el enlace para el servicio:

```url
https://preapi.wex.services/api/callsForWeek
```

## BODY

El siguiente es el body del servicio en formato application/json, donde se muestra cada uno de estos datos como parte de la petición:

- StartDate: Muestra la fecha inicial del servicio
- EndDate: Muestra la fecha final del servicio
- Service: Muestra el número (id) asignado al servicio

```json
{
  "startDate": "2020-11-12",
  "endDate": "2021-11-18",
  "service": "5f89bd0fbd9ba0a61227e32a" 
}
```