import  '@testing-library/jest-dom';

import {getSaludo} from '../../base/02-template-string';

describe('Pruebas del archivo 02-template-string.test.js', () => {
    test('getSaludo debe de retornar Hola Darwin!', () => {
       const nombre = "Darwin";
       const saludo = getSaludo(nombre);
       expect(saludo).toBe('Hola ' + nombre + '!');
    });
    test('getSaludo debe de retornar Hola Carlos!', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos!');
     });
});