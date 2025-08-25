// Palíndromo: comprobar si una palabra se lee igual al revés.

// Versión limpia (sencilla)
/*
const palindrome = (word) => word.split("").reverse().join("") === word

console.log(palindrome("neuquen"))
console.log(palindrome("bruno"))   */

// Alternativa manual con loop (sin usar reverse)

const palindromo = (word) => {
    for (let i = 0; i < word.length / 2; i++) { //<--- word.length / 2 solo necesitamos compromar la mitad de la palabra
        if (word[i] !== word[word.length - 1 - i]) return false
    }
    return true
}

console.log(palindromo("neuquen")) 

/*
🔹 Paso a paso

i = 0

Empezamos desde el inicio de la palabra.

i será el índice de la letra que vamos a comparar desde el principio.

word.length - 1 - i

Esto es el índice de la letra correspondiente desde el final.

Ejemplo: "neuquen" → word.length = 7

i = 0 → word[0] es "n", word[6] es "n" → comparamos primera y última letra.

i = 1 → word[1] es "e", word[5] es "e" → comparamos segunda y penúltima letra.

i < word.length / 2

Solo necesitamos recorrer la mitad de la palabra porque estamos comparando pares de letras: inicio ↔ final.

Ejemplo: "neuquen" → longitud 7 → 7/2 = 3.5 → el loop irá i = 0, 1, 2, 3

A i = 3 ya estamos en la letra del medio "q". La letra del medio no necesita compararse con nadie, porque en palíndromos el medio siempre es igual a sí mismo.

if (word[i] !== word[word.length - 1 - i]) return false

Si algún par de letras no coincide → no es palíndromo → salimos inmediatamente.

Esto hace que el algoritmo sea eficiente: O(n/2) = O(n).

return true

Si llegamos hasta la mitad sin encontrar diferencias → la palabra es palíndromo.
*/