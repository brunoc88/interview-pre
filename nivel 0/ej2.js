// Invertir un string ("bruno" → "onurb").

// Forma corta
/*
const reverseString = (word) => word.split("").reverse().join("")

console.log(reverseString("bruno")) // "onurb"
*/

// Forma manual con loop

const reverseString = (word) => {
  let reversed = ""
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i]
  }
  return reversed
}

console.log(reverseString("bruno")) // "onurb"
