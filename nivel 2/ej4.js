/*Idea básica

Bubble sort compara pares adyacentes y los intercambia si están en el orden incorrecto. Repite esto muchas veces hasta que no haya más intercambios. Es como hacer pasar burbujas: los valores “grandes” van subiendo hacia el final del array.

Ej.: [5, 3, 8, 4]

Compara 5 y 3 → los intercambia → [3, 5, 8, 4]

Compara 5 y 8 → no swap → [3, 5, 8, 4]

Compara 8 y 4 → swap → [3, 5, 4, 8]
Fin de la primera pasada: el mayor (8) quedó al final.

Se repite hasta que ninguna pasada hace swaps.
*/


let bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        console.log(`\n ---pasada ${i + 1} ---`)
        for (let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j + 1]) {
                console.log('swap')
                let temp = arr[j] //<--- guardo el valor para despues pasarlo
                arr[j] = arr[j + 1] //<--- guardo el valor inferior
                arr[j + 1 ] = temp //<-- paso superio a la un indice +
            }
            console.log('arr',arr)
        }
    }
    return arr
}

console.log(bubbleSort([5, 3, 8, 4])); // -> [3, 4, 5, 8]

// Nota: n - 1 - i porque después de cada pasada, el último elemento está en su posición final.
