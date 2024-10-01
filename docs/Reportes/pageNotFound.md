---
sidebar_position: 146
---

# PageNotFound.js

El componente NotFoundComponent esta diseñado para mostrar una imagen de error 404 cuando una página no se encuentra.

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
