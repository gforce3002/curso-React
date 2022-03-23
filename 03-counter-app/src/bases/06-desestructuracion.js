/**
 * Desestructuracion 
 * Asignacion desestructurante
 */

const persona = {
    nombre:'tony',
    edad:45,
    clave:'Ironman'
}

//Lo comun para poder obtener los valores de un objeto
//se aplica la siguiente forma Objecto.atributo, ejemplo

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.clave)

/**
 * con la desesctructuracion es comun realizar la siguiente operacion
 */

const {edad, nombre} = persona;

/**
 * con las llaves indicamos o escribimos que propiedades requerimos del objeto
 */

console.log(edad);
console.log(nombre);

const retornaPersona = ({clave, nombre, edad})=>{
    return {
        nombreClabe: clave,
        anios: edad,
        latlng:{
            lat:12.4578,
            lng:-124.2554
        }

    }
}
//Desestructuramos el valor retordado
const {nombreClabe, anios, latlng:{lat, lng}} = retornaPersona(persona);
console.log(nombreClabe, anios, lat, lng)
