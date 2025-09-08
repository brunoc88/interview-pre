// Encontrar el 2º número más grande en un array.
/*
let numbers = [10, 20, 1, 5]

const secondMax = () => {

    let max = numbers[0]
    let sMax = 0

    for (let n of numbers) {
        if (n > max) max = n
    }


    for (let n of numbers) {
        if (n !== max && n < max && n > sMax) sMax = n
    }

    console.log('Maximo: ', max)
    console.log('Segundo Maximo: ', sMax)
}

secondMax()
*/
// Versión con sort
/*
const secondMax = (numbers) => {
  let sorted = [...new Set(numbers)].sort((a, b) => b - a); 
  return { max: sorted[0], sMax: sorted[1] };
};

console.log(secondMax([10, 20, 1, 5]));  // { max: 20, sMax: 10 }
console.log(secondMax([5, 5, 5]));       // { max: 5, sMax: undefined }
console.log(secondMax([-5, -2, -10]));   // { max: -2, sMax: -5 }
Uso de new Set(numbers) → elimina duplicados antes de ordenar.

.sort((a, b) => b - a) → ordena de mayor a menor.

sorted[0] es el máximo, sorted[1] el segundo máximo.

Si no existe segundo máximo (ejemplo: [5,5,5]), devuelve undefined. */

// ✅ Versión mejorada (doble loop, pero más segura)
/*
const secondMax = (numbers) => {
  let max = -Infinity;
  let sMax = -Infinity;

  for (let n of numbers) {
    if (n > max) max = n;
  }

  for (let n of numbers) {
    if (n !== max && n > sMax) sMax = n;
  }

  return { max, sMax };
};

console.log(secondMax([10, 20, 1, 5]));
console.log(secondMax([-5, -2, -10])); 

// 🚀 Versión más eficiente (un solo loop)

const secondMax = (numbers) => {
  let max = -Infinity;
  let sMax = -Infinity;

  for (let n of numbers) {
    if (n > max) {
      sMax = max;
      max = n;
    } else if (n > sMax && n !== max) {
      sMax = n;
    }
  }

  return { max, sMax };
};

console.log(secondMax([10, 20, 1, 5])); // { max: 20, sMax: 10 }
console.log(secondMax([-5, -2, -10]));  // { max: -2, sMax: -5 }
*/

// Mi forma:

let secondMax = (arr) =>{
    let max = arr[0]
    let second = -Infinity

    for(let n of arr) {
        if(n > max){
            second = max
            max = n
        }
    }

    return second
}

console.log(secondMax([1,2,10,3,22]))