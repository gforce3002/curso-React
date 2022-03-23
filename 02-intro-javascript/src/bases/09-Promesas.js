import { getHeroeById, getHeroeByOwner } from '08-import-export'

/* const promesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
        //console.log("dos segundos despues");
        const heroe = getHeroeById(2)
        resolve(heroe)
        //reject("Error no se encontro el heroe")
    }, 2000);
});

promesa.then((e)=>{
    console.log(e)
})
.catch(err => console.warn(err)) */

const getHeroeByIdAsinc = (id)=> {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const heroe = getHeroeById(id)
            if(heroe){
                resolve(heroe)
            }else{
                reject("Error no se encontro el heroe")
            }    
        }, 2000);
    })
}

getHeroeByIdAsinc(5)
.then(console.table)
.catch(console.warn)