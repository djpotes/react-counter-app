import  '@testing-library/jest-dom';

import {getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp';

import heroes from '../../data/heroes';

describe('Pruebas en funciones de heroes', () => {
    test('Debe retornar un herore por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id == id);
        expect(heroe).toEqual(heroeData);
    });

    test('Debe retornar undefined si heroe no existe', () => {
        const id = 6;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });

    test('Debe retornar unn arreglo con los owners de DC', () => {
        const owner = 'DC';
        const heroesByOwner = getHeroesByOwner(owner);
        const heroeData = heroes.filter(h => h.owner == owner);
        expect(heroesByOwner).toEqual(heroeData);
    });

    test('Debe retornar unn arreglo con los owners de Marvel', () => {
        const owner = 'Marvel';
        const heroesByOwner = getHeroesByOwner(owner);
        expect(heroesByOwner.length).toBe(2);
    });
});