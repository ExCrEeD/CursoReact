const nombre = 'daniel';
const apellido = 'melo';
// const nombreCompleto = nombre+ ' '+apellido; 
const nombreCompleto = `${nombre} ${apellido}`; 
console.log(nombreCompleto);

function getSaludo(nombre){
    return `Hola ${nombre}`;
}

console.log(`este es un texto: ${getSaludo(nombre)}`);