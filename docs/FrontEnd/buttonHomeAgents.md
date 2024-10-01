---
sidebar_position: 8
---

# 🏠 ButtonHomeAgents

El componente ButtonHomeAgents proporciona un botón flexible que puede mostrar texto, íconos o ambos. Los estilos son configurables mediante las propiedades, y también se pueden proporcionar estilos adicionales a través de la propiedad style.


### 🛠️ Implementación

```js
const ButtonAgentsHome = ({ text, icon, backgroundColor, textColor, onClick, style }) => {
  const buttonStyle = {
    display: 'flex', 
    alignItems: 'center',
    backgroundColor: backgroundColor || 'blue', 
    color: textColor || 'white', 
    height: '2rem',
    border: 'none',
    cursor: 'pointer',
    padding: '15px', 
    ...style, 
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
    {icon && <span>{icon}</span>}
    {text && <span style={{ marginLeft: '0.5rem' }}>{text}</span>}
    </button>
  );
};

export default ButtonAgentsHome;
```

### ⚙️ Propiedades

| Propiedad         | Tipo     | Descripción                                                      | Valor por Defecto |
|-------------------|----------|------------------------------------------------------------------|-------------------|
| `text`            | string   | Texto que se mostrará en el botón.                             | -                 |
| `icon`            | node     | Ícono que se mostrará junto al texto.                          | -                 |
| `backgroundColor` | string   | Color de fondo del botón.                                      | `'blue'`         |
| `textColor`       | string   | Color del texto del botón.                                     | `'white'`        |
| `onClick`         | function | Función que se ejecuta al hacer clic en el botón.              | -                 |
| `style`           | object   | Estilos adicionales para personalizar el botón.                | -                 |

:::info 💡 se pueden poner imagenes, investigar como poner ruta online una vez arriba
![alt text](image.png) 


