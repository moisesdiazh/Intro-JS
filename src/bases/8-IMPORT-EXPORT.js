import  heroes, {owners} from '../data/heroes';
        //exportacion por default (heroes) y exportacion independiente (owners)

// console.log(owners);

export const getHeroeById = (id) => {

  return heroes.find((heroe) => heroe.id === id);
};

// console.log(getHeroeById(2));


// tarea
// usar filter
export const getHeroeByOwner = (owner) => {

  return heroes.filter((heroe) => heroe.owner === owner);
};

// console.log(getHeroeByOwner('Marvel'));

