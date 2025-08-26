// Ordenar objetos por propiedad (ordenar lista de usuarios por edad).

let usuarios = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Bruno", edad: 30 },
    { nombre: "Carla", edad: 20 }
]

console.log(usuarios.sort((a,b) => b.edad - a.edad)) //< --- mayor a menor
console.log(usuarios.sort((a,b) => a.edad - b.edad)) //< --- menor a mayor


// Tip extra: si la propiedad fuera string, podés usar localeCompare:

usuarios.sort((a,b) => a.nombre.localeCompare(b.nombre));
// Eso ordena alfabéticamente los nombres.