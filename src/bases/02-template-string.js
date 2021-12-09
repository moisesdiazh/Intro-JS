const nombre = "Moises";
const apellido = "Diaz";

//es lo mismo que const nombreCompleto = nombre + '' + apellido;
const nombreCompleto = `${nombre} ${apellido}`; //template strings

console.log(nombreCompleto);

function getSaludo(nombre) {
  return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);
