/**
 * funciones
 */

//En react ya no debemos de usar este tipo de funciones por que son muy
//suceptibles a que sutitullamos la funcion con una valirable
//ejemplo
function saludar(nombre){
    return `Hola, ${nombre}`
}

//inicializamos saludar con un valor
saludar = 3
console.log(saludar) //mostrar el 3 de la asignacion anterior pero la funcion se elimino
/**
 * NOTA IMPORTANTE: Este tipo de error puede pasar por que si no tenemos cuidado con las declaraciones
 * de variables y funciones podemos sustituir accidentalmente y es muy dificil
 * encontrar los errores
 */


/**
 * formas corresctas de declarar una funcion
 * 
 * la forma correcta es declarando una variables de tipo constante y despues especificar
 * que esa variable sera una funcion, ejemplo
 */
/**
 * funcion anonima
 */
const saludar2 = function(nombre){
    return `Hola, ${nombre}`
}

/** funcion flecha */
const saludar3 = (nombre) => `Hola, ${nombre}`

//saludar2 = 3

 
console.log(saludar3("goku"))

//Tarea
/**
 * 1. Transformaen a una funcion flecha
 * 2. tiene que retornanr un objeto implicito
 * 3. pruebas
 */
function getUsuarioActivo(nombre){
    return {
        uid:'ASD567',
        username: nombre
    }
}

const getUsuario = (nombre)=>({uid:'ASD567', username: nombre})

const usuarioActivo = getUsuarioActivo('frnacisco');
const activeuser = getUsuario("natonio")
console.table(activeuser)