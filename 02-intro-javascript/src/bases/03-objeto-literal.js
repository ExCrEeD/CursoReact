const persona ={
    nombre:'tony',
    apellido:'Stark',
    edad:45,
    direccion:{
        ciudad:'new york',
        zip:5464,
        lat:45.4321,
        lng:34.4545
    }
};


const persona2 = {...persona};
persona2.nombre = 'el bromas';
console.log(persona);
console.log(persona2);