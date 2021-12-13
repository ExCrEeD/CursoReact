import { heroes } from "../data/heroes";

export const getHeroesByName = ( name = '') => heroes.filter(hero=>hero.superhero.toLowerCase().trim().includes(name));
    //heroes.filter(hero=> hero.name.tol);