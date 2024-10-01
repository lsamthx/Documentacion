---
sidebar_position: 180
---

# PageNotFound.js

Este componente es útil para mostrar una página estática cuando un usuario intenta acceder a una ruta que no existe en la aplicación

```js
function NotFoundComponent() {
  return (
    <div>
      <figure class="image img-not-found">
        <img src={require("./../assets/404-error.jpg" )}/>
      </figure>
    </div>
  );
}

export default NotFoundComponent;
```