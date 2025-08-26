// Frecuencia de palabras en una oración.

// ej : "hola mundo hola chat"

// ej: { hola: 2, mundo: 1, chat: 1 }


let frecuenciaPalabra = (string) => {
    let contador = {}

    let words = string.trim().toLowerCase().split(" ")

    for (let w of words) {
        if (contador[w]) {
            contador[w]++
        }else {
            contador[w] = 1
        }
    }
    return contador
}

console.log(frecuenciaPalabra("hola mundo hola chat"))
