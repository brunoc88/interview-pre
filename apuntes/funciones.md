## Regex

### ¿Cómo funciona el regex /[aeiou]/gi?

- / ... / → indica que es una expresión regular.

- [aeiou] → un conjunto de caracteres: busca cualquiera de esas letras.

- `g` (global) → busca todas las coincidencias en el string, no solo la primera.

- `i` (ignore case) → ignora mayúsculas/minúsculas (A cuenta igual que a).

```js
"JavaScript".match(/[aeiou]/gi)
// Resultado → ["a", "a", "i"]

```
---

## infinity

En JavaScript (y en matemáticas en general) existe Infinity y -Infinity.

📌 Infinity

Es un valor numérico especial que representa positivo infinito.
Ejemplo:
```js
console.log(1 / 0);   // Infinity
console.log(Infinity > 9999999); // true

```
📌 -Infinity

Es negativo infinito, o sea, un número más chico que cualquier otro.
Ejemplo:
```js
console.log(-1 / 0);   // -Infinity
console.log(-Infinity < -9999999); // true
```
🚀 ¿Por qué se usa en programación?

Cuando querés inicializar un máximo o mínimo antes de recorrer un array:
```js
let max = -Infinity;  // el menor valor posible
let numbers = [10, 20, -5];

for (let n of numbers) {
  if (n > max) max = n;
}

console.log(max); // 20

```

- Si usás 0 como inicial, falla en arrays con números negativos.

-Infinity garantiza que cualquier número real será mayor, así nunca te quedás sin actualizar.

En tu caso del segundo máximo, se usa -Infinity para que al comparar con números negativos siga funcionando bien.