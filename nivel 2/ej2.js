/*📌 ¿Qué es Fibonacci?

Es una secuencia de números en la que cada número es la suma de los dos anteriores.
Se define así:

F(0) = 0

F(1) = 1

F(n) = F(n-1) + F(n-2) para n ≥ 2

👉 Secuencia:
0, 1, 1, 2, 3, 5, 8, 13, 21...


La historia de Fibonacci

Imaginemos que tenemos conejitos 🐇.

El primer mes nace 1 conejito.

El segundo mes hay 1 conejito.

Después, cada mes nuevo, la cantidad de conejitos es la suma de los dos meses anteriores.

Así empieza la cuenta:

Mes 0 → 0 conejitos
Mes 1 → 1 conejito
Mes 2 → 1 (0 + 1)
Mes 3 → 2 (1 + 1)
Mes 4 → 3 (1 + 2)
Mes 5 → 5 (2 + 3)
Mes 6 → 8 (3 + 5)
Mes 7 → 13 (5 + 8)
...
🔄 Iterativo (paso a paso)

Acá usamos dos cajitas: a y b.

a guarda el número del mes anterior.

b guarda el número del mes actual.

Código:
*/

function fibonacciIterativo(n) {
  if (n < 2) return n; //<--- Si n es 0 o 1, no queremos entrar al bucle → la respuesta es 0 si n = 0directamente.
  let a = 0, b = 1;

  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
    console.log(`Iteración ${i}: a=${a}, b=${b}`);
  }

  return b;
}
console.log(fibonacciIterativo(6))

/*
🔁 Recursivo (más mágico ✨)

Con recursión es como preguntar:

“¿Cuántos conejitos hay en el mes n?”

→ “Bueno… no sé, pero si me decís los del mes n-1 y n-2, te lo digo.”

Y así hasta llegar al mes 0 o 1, que sí sabemos (caso base).

Ejemplo fib(4):
fib(4) = fib(3) + fib(2)
       = (fib(2) + fib(1)) + (fib(1) + fib(0))
       = ((1 + 1) + 1) + (1 + 0)
       = 3


*/

function fibonacciRecursivo(n) {
  if (n < 2) return n; // caso base: 0 o 1
  return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
}

console.log(fibonacciRecursivo(4))

/*
📌 En simple:

Iterativo = vamos sumando pasito a pasito, y vemos cada valor en cada iteración.

Recursivo = vamos haciendo preguntas y desarmando el problema hasta lo más chiquito.
*/