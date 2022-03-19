/**
 * Templeta Strings
 */

const nombre = "Francisco"
const apellido = "Ramirez"

const nombrecompleto = nombre + " " + apellido

console.log(nombrecompleto)

console.log(`${nombre} ${apellido}`)

function getSaludo(nombre){
    return `Hola ${nombre}`
}

console.log( `Este es un texto: ${getSaludo(nombre)}`)