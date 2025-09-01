// El factorial de un número n (se escribe n!) significa multiplicar todos los números desde n hasta 1.
// Ejemplo:
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Factorial:
// n! = n * (n-1) * (n-2) * ... * 2 * 1


/*Lógica recursiva

La recursión es cuando una función se llama a sí misma para resolver un subproblema más pequeño.

Paso 1 – Caso base

Siempre en recursión tenemos que definir un caso base:

0! = 1

1! = 1

Esto detiene la recursión y evita un bucle infinito.

Paso 2 – Paso recursivo

Decimos:
n! = n * (n-1)!

👉 O sea, para calcular el factorial de n, necesitamos el factorial de n-1.
Ejemplo: factorialRecursivo(5)

factorialRecursivo(5)
→ devuelve 5 * factorialRecursivo(4)

factorialRecursivo(4)
→ devuelve 4 * factorialRecursivo(3)

factorialRecursivo(3)
→ devuelve 3 * factorialRecursivo(2)

factorialRecursivo(2)
→ devuelve 2 * factorialRecursivo(1)

factorialRecursivo(1)
→ caso base → devuelve 1

🔗 Ahora se resuelve “hacia atrás”:

factorialRecursivo(2) → 2 * 1 = 2

factorialRecursivo(3) → 3 * 2 = 6

factorialRecursivo(4) → 4 * 6 = 24

factorialRecursivo(5) → 5 * 24 = 120

Conclusión: La recursión funciona como una pila (stack): primero se acumulan llamadas hasta 
llegar al caso base, y después se van resolviendo en orden inverso.

*/
function factorialIterativo(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

function factorialRecursivo(n) {
  if (n === 0 || n === 1) return 1; // caso base
  return n * factorialRecursivo(n - 1); // paso recursivo
}


console.log("factorial iterarito",factorialIterativo(5))
console.log("factorial recursivo",factorialRecursivo(5))