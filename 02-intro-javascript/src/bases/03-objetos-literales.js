/**
 * Objetos literales
 */

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad:45,
    direccion:{
        ciudad:'Colima',
        zip:28000,
        lat: 14.3232,
        lng: 34.9233321,
    }
}


/**
 * forma correcta de clonar un objeto
 */

const persona2 = {...persona} //esta es la forma correctoa de clonar un objeto
persona2.nombre = 'Peter'
console.table(persona)
console.table(persona2)