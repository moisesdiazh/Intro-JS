// Funciones en js

const saludar2 = (nombre) => {
  //arrow function

  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`; //arrow function

const saludar4 = () => `Hola mundo`; //arrow function

console.log(saludar2("Moises")); //console log para ver
console.log(saludar3("Gabo"));
console.log(saludar4());

const getUser = () => ({
  uid: "ABC123",
  username: "El_papi1232",
});

const user = getUser();
console.log(user);

//tarea
//1. Transformar a funcion de flecha
//2. Retornar un objeto implicito
//3. Pruebas
function getUsuarioActivo(nombre) {
  return {
    uid: "ABC3456",
    username: nombre,
  };
}

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);

//respuesta
const getUsuarioActivo2 = (nombre) => ({
  uid: "ABC3456",
  username: nombre,
});

const usuarioActivo2 = getUsuarioActivo2("Jonathan Diaz");
console.log(usuarioActivo2);
