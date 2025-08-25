// Eliminar duplicados de un array.

// Forma corta y simple
/*
let numbers = [10, 5, 10, 4, 10]

// Convertimos a Set y luego a array
numbers = [...new Set(numbers)]

console.log(numbers) // [10, 5, 4]
*/

// Alternativa usando filter (sin Set)
let numbers = [10, 5, 10, 4, 10]

numbers = numbers.filter((value, index, arr) => arr.indexOf(value) === index)

console.log(numbers) // [10, 5, 4]
