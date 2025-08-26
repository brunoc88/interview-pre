// Rotar un array N posiciones ([1,2,3,4,5], rotar 2 → [4,5,1,2,3]).

let numbers = [1, 2, 3, 4, 5];

const rotar = (arr, n) => {
  let copia = [...arr]; // no modificar el original
  for (let i = 0; i < n; i++) {
    let ultimo = copia.pop();     // saco el último
    copia.unshift(ultimo);        // lo pongo al inicio
  }
  return copia;
};

console.log(rotar(numbers, 2));
// [4, 5, 1, 2, 3]
