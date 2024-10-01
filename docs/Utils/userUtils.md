---
sidebar_position: 164
---

# useUtils.js (utils)

El hook useUtils proporciona una función llamada colorHEX que genera un código de color hexadecimal aleatorio.

```jsx 
const useUtils = () => {
  const generateLetter = () => {
    var letras = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];
    let numero = (Math.random() * 15).toFixed(0);
    return letras[numero];
  };

  const colorHEX = () => {
    let color = "";
    for (let i = 0; i < 6; i++) {
      color = color + generateLetter();
    }
    return "#" + color;
  };

  return {
    colorHEX
  }
};

export default useUtils;
```

## Función generateLetter

- Declara un array letras que contiene caracteres alfanuméricos y dígitos hexadecimales.
- Genera un número aleatorio (numero) entre 0 y 15 (ambos inclusive).
- Retorna el elemento correspondiente al índice generado en el array letras.

## Función colorHEX

- Inicializa una cadena vacía llamada color.
- Itera seis veces para generar seis caracteres hexadecimales.
- En cada iteración, concatena el resultado de la función generateLetter a la cadena color.
- Retorna el código de color hexadecimal completo, precedido por el carácter #.

## Hook useUtils

Retorna un objeto que contiene la función colorHEX.