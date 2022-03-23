/**
 * Asignacion desestructuracion de array
 */

const personajesDBZ = ["Goku", "Vegeta","Trunks"]


/**
 * TIP: en visual code si nos posicionamos en una variable
 * que deseas cambiar en todo el codigo
 * nos posicionamos en la variable y presionamos la tecla
 * F2
 */


const[p1] = personajesDBZ; //obtengo la primer posicion del arrego "goku"
const[,p2] = personajesDBZ; //obtengo la segunda posicion del arrego "vegueta"
const[,,p3] = personajesDBZ; //obtengo la tercera posicion del arrego "trunks"

console.log(p1)
console.log(p2)
console.log(p3) 

//Otra forma de desestructuracion de arreglos

const returaarreglo = ()=>{
    return ["ABC", 123]
}

const[letras, numeros] = returaarreglo()
console.log(letras, numeros)

/**
 * TAREA
 */

const userState = (valor)=>{
    return [valor, ()=>console.log("hola mundo")]
}
 
const [nombre, setnombre] = userState("madona");
console.table(nombre)
setnombre()