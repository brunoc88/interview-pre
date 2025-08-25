// Encontrar el número más grande de un array.

// Forma corta 
let numbers = [10, 5, 3, 8, 1, 2]

console.log(Math.max(...numbers))

// Forma con loop
/*
let max = numbers[0]

for (let i = 0 ; i <= numbers.length ; i++) {   
    if(max < numbers[i]) max = numbers[i]
}
console.log("maximo", max)
*/

// Forma con loop mejorada
let max = numbers[0]

for (let num of numbers) {
    if (num > max) max = num
}

console.log("maximo", max)

// Forma “pro” usando reduce

const maxNumber = numbers.reduce((max, curr) => curr > max ? curr : max, numbers[0])
console.log("maximo", maxNumber)
