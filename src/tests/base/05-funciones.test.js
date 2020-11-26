import  '@testing-library/jest-dom';

import {getUser, getUsuarioActivo} from '../../base/05-funciones'

describe('Pruebas del archivo 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        
        const user = getUser();
        expect(user).toEqual(userTest);
    });

    test('getActiveUser debe de retornar un objeto', () => {
        
        const name = 'Darwin';
        const userTest = {
            uid: 'ABC567',
            username: name
        }
        
        const user = getUsuarioActivo(name);
        expect(user).toEqual(userTest);
    });
});
