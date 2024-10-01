---
sidebar_position: 154
---

# Call Transfer (POST) - GINA

## URL

El siguiente es el enlace para el servicio:

```url
http://localhost:3001/call-transfer
```

## BODY

El siguiente es el body del servicio en formato application/json. Se muestra cada uno de estos datos:

- IDCASO: Se asignará un número de caso a la llamada recibida.
- IDAGENTE: Se indicará el id del agente que esta atendiendo el caso.
- SKILL: Es colocado acorde a la necesidad del usuario actual.
- SKILLDESTINO: Es hacia donde será redirida la llamada entrante.
- CALLSID: Es el identificador de llamadas del servicio.

```json
{
    "IDCASO":"1235678",
    "IDAGENTE": "7720",
    "SKILL":"VentasOut",
    "SKILLDESTINO": "ventas",
    "CALLSID":"CA27ece10acdfda17efd519c27caaf6735"

}
```

