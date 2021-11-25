import heroes from '../data/heroes'

//console.log(owners);

export const getHeroeById = (id) => heroes.find(x=>x.id === id);

//console.log(getHeroeById(2))

export const getHeroesByOwner = (owner) => heroes.filter(x=>x.owner ===owner);

//console.log(getHeroesByOwner('DC'))