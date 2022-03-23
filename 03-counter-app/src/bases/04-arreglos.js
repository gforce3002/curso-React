/**
 * Arreglos
 */

//const arregl = new Array(100);
const arreglo = [1,2,3,4]
/* arreglo.push(1)
arreglo.push(2)
arreglo.push(3)
arreglo.push(4) */

let arreglo2 = [...arreglo, 5]
/**
 * Nota. no es recomendable usar el operador
 * push es usar el operado (...) Spred
 */

let arreglo3 = arreglo2.map(x=>x*2)

console.table(arreglo)
console.table(arreglo2)
console.table(arreglo3)