//Asignacion Desestructurante

const persona = {
    nombre:'Tony',
    edad:45,
    clave:'IronMan',
    rango:'Soldado'
}

/* const {nombre,clave,edad} = persona;


console.log(nombre);
console.log(clave);
console.log(edad); */
/* console.log(persona.edad);
console.log(persona.clave); */


const Context = ({nombre,edad,clave,rango = 'Capitan'}) =>{
    //const {nombre,clave,edad} = persona;
    //console.log(nombre,clave,edad,rango);
    return {
        nombreClave:clave,
        anios:edad,
        latlng:{
            lat:14.1231,
            lng:-14.2454,
        }
    }
}

const {nombreClave,anios,latlng:{lat,lng}}  = Context(persona);
console.log(nombreClave,anios,lat,lng);