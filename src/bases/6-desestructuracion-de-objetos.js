//Desestructuración de objetos

const persona = {
  nombre: "Moises",
  edad: 45,
  clave: "Supermoi",
};

const setContext = ({ clave, nombre, edad, rango = "Capitan" }) => {
  // console.log(nombre, edad, rango);

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
        lat: 14.12132,
        lng: -12.3242,
    }
  };
};

//la destructuracion de los objetos
const {nombreClave, anios, latlng} = setContext(persona);

console.log(nombreClave, anios);
console.log(latlng);
