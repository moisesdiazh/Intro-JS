import { getHeroeById } from "./bases/8-IMPORT-EXPORT";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {

//     //tarea
//     const heroe = getHeroeById(2);
//     resolve(heroe);   //con el resolve mandamos los valores al then
//     // reject('No se pudo encontrar el heroe'); PARA LOS WARNINGS
//   }, 2000);
// });

// promesa.then((heroe) => {

//   console.log('heroe', heroe)
// })
// .catch(err => console.warn(err));

//si necesitas realizar una promesa mandandole el argumento del heroe que quieres buscar
const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //tarea
      const heroe = getHeroeById(id);
      if (heroe) { //verificando que existe el heroe

        resolve(heroe); //con el resolve mandamos los valores al then
      } else { //si no existe nos lanza al reject

        reject("No se pudo encontrar el heroe"); //PARA LOS WARNINGS
      }
    }, 2000);
  });
};

//una forma de colocarlo
// getHeroeByIdAsync(10)
//   .then((heroe) => console.log("Heroe", heroe))
//   .catch(err => console.warn(err));

//2da forma de colocarlo
getHeroeByIdAsync(2)
 .then(console.log)
 .catch(console.warn);