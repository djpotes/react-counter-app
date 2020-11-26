import  '@testing-library/jest-dom';

import {getHeroeByIdAsync} from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {

    test('getHeroeByIdAsync debe de retornar un heroe axync', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
        .then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        })
    });

    test('Debe de obtener un error si el Heroe por id no existe', (done) => {
        const id = 9;
        getHeroeByIdAsync(id)
        .catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        })
    });
   
});