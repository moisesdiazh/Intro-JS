const personajes = ["Goku", "Vegeta", "Trunks"];

const [, , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

//tarea
//1. el primer valor del arreglo se llamara nombre
//2. el segundo setNombre
const setState = (valor) => {

  return [valor, () => { console.log('Hola Moises')}];
};

const [nombre, setNombre] = setState('Goku');
console.log(nombre);
setNombre();
