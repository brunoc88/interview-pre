// Frecuencia de caracteres en un string ("hola" → {h:1, o:1, l:1, a:1}).

function frecuenciaCaracteres(str) {
  const contador = {};

  for (let char of str) {
    if (contador[char]) {
      contador[char]++; // si ya existe, sumo 1
    } else {
      contador[char] = 1; // si no existe, arranca en 1
    }
  }

  return contador;
}

console.log(frecuenciaCaracteres("hola"));
// { h:1, o:1, l:1, a:1 }
