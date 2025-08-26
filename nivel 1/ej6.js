// Merge arrays eliminando duplicados.

// Cuando dicen “merge arrays eliminando duplicados”, básicamente significa:

/*Tenés dos o más arrays (o incluso más).
Ejemplo conceptual:
[1, 2, 3] y [2, 3, 4]

Querés unirlos en un solo array (merge) → [1, 2, 3, 2, 3, 4]

Pero además querés eliminar los duplicados, dejando solo elementos únicos → [1, 2, 3, 4]
*/
/*

let array = [1,2,3]
let array2 = [1,2,3]

let merge = [...new Set([...array, ...array2])]

console.log(merge)

// Con filter + includes

let array1 = [1,2,3];
let array2 = [2,3,4];

let merge = [...array1, ...array2].filter((el, idx, arr) => arr.indexOf(el) === idx);

console.log(merge); // [1,2,3,4]
*/