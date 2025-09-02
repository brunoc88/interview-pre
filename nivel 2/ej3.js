// Binary search
/*
1. Qué problema resuelve

Queremos buscar un número dentro de un array ordenado (por ejemplo, [1, 3, 5, 7, 9, 11]).
Si el array está ordenado, no necesitamos recorrerlo de principio a fin (como haríamos con un for normal).
Podemos descartar la mitad de los elementos en cada paso → mucho más rápido.

2. La idea básica

Imagina que tenés un libro de 100 páginas y querés buscar la página 73:

No empezás desde la página 1.

Vas al medio → página 50. Como 73 es mayor, descartás la mitad de abajo (1–50).

Ahora vas al medio de la parte de arriba → página 75. Te pasaste, entonces descartás la mitad de arriba (75–100).

Te queda 51–74, y seguís reduciendo hasta encontrar la página 73.

Eso mismo hace el algoritmo en un array.

3. Pasos del algoritmo

Tomamos dos punteros:

inicio = 0 (principio del array)

fin = arr.length - 1 (final del array)

Calculamos el índice medio:
medio = Math.floor((inicio + fin) / 2)

Comparamos arr[medio] con el valor buscado:

Si es igual, lo encontramos ✅

Si el valor buscado es menor, buscamos en la mitad izquierda (fin = medio - 1).

Si es mayor, buscamos en la mitad derecha (inicio = medio + 1).

Repetimos hasta que inicio > fin → significa que no está en el array ❌.

4. Ejemplo
Buscar 7 en [1, 3, 5, 7, 9, 11]:

inicio = 0, fin = 5 → medio = 2 → arr[2] = 5
Buscado (7) > 5 → descartamos la izquierda → inicio = 3

inicio = 3, fin = 5 → medio = 4 → arr[4] = 9
Buscado (7) < 9 → descartamos la derecha → fin = 3

inicio = 3, fin = 3 → medio = 3 → arr[3] = 7 🎉 encontrado.

*/

function binarySearch(arr, target) {
  let inicio = 0;
  let fin = arr.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

    console.log("inicio:", inicio, "fin:", fin, "medio:", medio, "valor medio:", arr[medio]);

    if (arr[medio] === target) {
      console.log("Encontrado en posición", medio);
      return medio;
    } else if (arr[medio] < target) {
      inicio = medio + 1; // muevo el inicio
    } else {
      fin = medio - 1; // muevo el fin
    }
  }

  console.log("No encontrado");
  return -1;
}

binarySearch([1, 3, 5, 7, 9, 11], 7);