---
sidebar_position: 54
---

# types.js

En este código, los tipos de acciones definidos en types siguen una convención común en aplicaciones Redux o de gestión de estado, donde se utilizan corchetes cuadrados para indicar el módulo o el contexto al que pertenece la acción. Estos tipos son útiles para asegurarse de que las acciones no colisionen con acciones de otros módulos y para proporcionar una nomenclatura más descriptiva.

Los tipos de acciones definidos son:

- **login**: '[Auth] Login': Este tipo de acción se utiliza para representar una acción de inicio de sesión. El texto entre comillas cuadradas [Auth] indica que esta acción está relacionada con el módulo de autenticación o la autenticación en la aplicación.

- **logout**: '[Auth] Logout': Este tipo de acción se utiliza para representar una acción de cierre de sesión. Al igual que con el tipo de acción de inicio de sesión, [Auth] aquí también indica que esta acción está relacionada con la autenticación.

## Const

```js title="src/Auth/types/types.js"

export const types = {
  login: '[Auth] Login',
  logout: '[Auth] Logout'
};

```


