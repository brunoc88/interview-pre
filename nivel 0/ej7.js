// FizzBuzz clásico: imprimir números del 1 al 100, pero múltiplos de 3 → "Fizz", múltiplos de 5 → "Buzz"
//, múltiplos de ambos → "FizzBuzz"


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

// FizzBuzz en una línea dentro del loop
for (let i = 1; i <= 100; i++) {
    console.log(
        (i % 3 === 0 && i % 5 === 0) ? "FizzBuzz" :
        (i % 3 === 0) ? "Fizz" :
        (i % 5 === 0) ? "Buzz" :
        i
    )
}

