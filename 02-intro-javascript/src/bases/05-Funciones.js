/* const saludar = function (nombre){
    return `hola ${nombre}`;
} */

const saludar2 = (nombre) =>{
    return `hola ${nombre}`;
}


const saludar3 = (nombre) => `hola ${nombre}`;


//console.log(saludar('goku'));
console.log(saludar3('goku'));

const getuser = () =>
    ({
        uid:'23123',
        userName:'Goku777'
    });

console.log(getuser());

const getUsuarioActivo = (nombre) =>
    ( {
        uid:'23123',
        userName:nombre
    });


const usuarioActivo = getUsuarioActivo('Daniel');
console.log(usuarioActivo);