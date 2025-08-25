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
