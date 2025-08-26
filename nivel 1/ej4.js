// Forma recursiva (clásica)
function flatten(arr) {
  let result = [];

  for (let el of arr) {
    if (Array.isArray(el)) {
      result = result.concat(flatten(el)); // si es array, aplano recursivamente
    } else {
      result.push(el); // si no, agrego el elemento
    }
  }

  return result;
}

console.log(flatten([1, [2, 3], [4, [5]]]));
// [1, 2, 3, 4, 5]

// Forma moderna con flat de ES2019

const arr = [1, [2, 3], [4, [5]]];
console.log(arr.flat(Infinity)); 
// [1, 2, 3, 4, 5]
