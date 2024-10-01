---
sidebar_position: 157
---

# login-POST (POST)

## URL

```url
https://preapi.wex.services/login
```

## Body

El siguiente es el body del servicio en formato application/json, donde se muestra cada uno de estos datos como parte de la petición:

-user: Muestra el correo electrónico del usuario que se encuentra conectado al sistema actualmente.
-password: Muestra la contraseña de dicho usuario para permitir el login a la aplicación.

```json
{
  "user": "usuario@correo.net",
  "password": "******"
}   
```
