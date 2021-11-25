const personajes = ['goku','vegeta','Trunks'];
const [,,p3] = personajes;

console.log(p3);
/* 
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]); */

const retornaArreglo = () =>{
    return ['ABC',123];
}

const [letras,numeros] = retornaArreglo(); 
console.log(letras,numeros);

const state = (valor) =>{
    return [valor,()=>{console.log('hola mundo')}]
} 
const [nombre,saludo] = state('goku');
//arr[1]();
console.log(nombre)
saludo();