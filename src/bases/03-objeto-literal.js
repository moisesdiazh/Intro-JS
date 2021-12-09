//realizamos el objeto

const persona = {

    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: { //se puede meter una cadena dentro de un objeto
        zip: 512312312,
        lat: 14.3212,
        lng: 34.421312
    }
};

const persona2 = {...persona}; //los 3 puntos se usa para copiar todo el objeto
persona2.nombre = 'Peter'; //aqui reemplazamos el nombre

console.log(persona);
console.log(persona2);