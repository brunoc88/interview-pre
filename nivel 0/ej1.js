// Contar vocales en un string.

// Versión más clara y eficiente
/*
let vocals = ['a','e','i','o','u']
let count = null

let countVowels = (word) => {
    count = 0
    
    for(let letter of word.toLowerCase()){
        if(vocals.includes(letter)) count++
    }
    return count
}

console.log("Vocales en javaScript:", countVowels("javaScript"))
*/

// Alternativa más pro (con regex)

const countVowels = (word) => (word.match(/[aeiou]/gi) || []).length

console.log("Vocales en javaScript:", countVowels("javaScript"))

// para evitar null se pone el [] en la 'or'.
// console.log(countVowels("rhythm"))  // 0 (sin error)

// sin la condicion || []
// "rhythm".match(/[aeiou]/gi) // null

