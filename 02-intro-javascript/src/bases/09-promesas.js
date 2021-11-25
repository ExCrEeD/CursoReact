import { getHeroeById,getHeroesByOwner } from "./bases/08-imp-ex";
/* 
const promesa = new Promise((resolve,reject)=>{
    setTimeout(() => {
        //console.log('2 segundos despues')
        const heroe = getHeroeById(2);
        //resolve(heroe);
        reject('No se puedo encontrar el heroe');
    }, 2000);

});

promesa.then((heroe)=>{
    console.log('heroe',heroe);
}).catch( err=> console.warn(err));
 */

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        //console.log('2 segundos despues')
        const heroe = getHeroeById(id);
        if(heroe)
            resolve(heroe);
        else
            reject('No se puedo encontrar el heroe');
    }, 2000);
});
};

getHeroeByIdAsync(4).then(console.log).catch(console.warn);