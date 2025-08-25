// Contar palabras en una oración.
/*
// Forma básica con split(" ")
const sentence = "Hola mundo desde JavaScript"

const wordCount = sentence.trim().split(" ").length

console.log(wordCount) // 4

// Forma robusta con regex en split(/\s+/)

const sentence = "Hola   mundo desde  JavaScript"

const wordCount = sentence.trim().split(/\s+/).length

console.log(wordCount) // 4 

// Forma “pro” usando match con regex

const sentence = "Hola   mundo desde  JavaScript"

const words = sentence.match(/\b\w+\b/g) || []

console.log(words.length) // 4 ✅

Notas:

\b → límite de palabra (inicio/final).

\w+ → una o más letras/dígitos/underscore.

|| [] → evita error si no hay coincidencias (oración vacía).

Este enfoque solo cuenta palabras reales, ignorando espacios, tabs o signos de puntuación que no forman palabras.

⚡ Resumen para entrevistas:

Forma rápida: split(" ") → fácil, rápido, básico.

Forma robusta: split(/\s+/) → manejo de múltiples espacios.

Forma pro: match(/\b\w+\b/g) → elegante, cuenta solo palabras reales.

*/
