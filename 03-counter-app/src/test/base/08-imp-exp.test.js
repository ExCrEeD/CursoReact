import { getHeroeById,getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('pruebas en funciones de heroes', () => {
   
    test('debe de retornar un heroe por id ', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heoreData = heroes.find(h=>h.id === id);
        expect(heroe).toEqual(heoreData);
    });
    
    test('debe de retornar undefined si heroe no existe ', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });

    test('debe de retornar heroes DC ', () => {
        const owner = 'DC';
        const heroesOwner = getHeroesByOwner(owner);
        const dataHeores = heroes.filter(heroe=>heroe.owner === owner);
        expect(heroesOwner).toEqual(dataHeores);
    });

    test('debe de retornar heroes Marvel ', () => {
        const owner = 'Marvel';
        const heroesOwner = getHeroesByOwner(owner);
        expect(heroesOwner.length).toBe(2);
    });

})
