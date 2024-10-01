---
sidebar_position: 151
---

# Call Out (POST) - GINA

## URL

El siguiente es el enlace para el servicio:

```url
https://preapi.wex.services/call-out
```

## BODY

El siguiente es el body del servicio en formato application/json. Se muestra cada uno de estos datos:

- IDCASO: Se asignará un número de caso a la llamada recibida.
- IDAGENTE: Se indicará el id del agente que esta atendiendo el caso.
- SKILL: Es colocado acorde a la necesidad del usuario actual.
- SKILLDESTINO: Es hacia donde será redirida la llamada entrante.
- CLIENTNUMBER: Muestra el número telefónico del cual realizó la llamada el cliente.
- COMPANYNUMBER: Muestra el número telefónico del cual realizó la llamada la compañia/empresa.

```json
{
    "IDCASO":"1235678",
    "IDAGENTE": "7718",
    "SKILL":"VentasOut",
    "SKILLDESTINO": "compras",
    "CLIENTNUMBER":"+525565639807",
    "COMPANYNUMBER":"+525570058704"

}
```

