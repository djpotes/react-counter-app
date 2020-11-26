import PrimerApp from '../../PrimeraApp';
//import {render} from '@testing-library/react';
import {shallow} from 'enzyme';

describe('Pruebas con PrimeraApp component', () => {

    /*test('Debe de mostrar el mensaje "Hola, Soy Goku" ', () => {
        const saludo = "Hola, Soy Goku";
        const {getByText} = render(<PrimerApp saludo = {saludo}/>);
        expect(getByText(saludo)).toBeInTheDocument(); 
    });*/

    test('Debe de mostrar <PrimerApp/> correctamente" ', () => {
        const saludo = "Hola, Soy Goku";
        const wrapper = shallow(<PrimerApp saludo={saludo}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const saludo = "Hola, Soy Goku";
        const subtitulo = "Soy un subtitulo";
        const wrapper = shallow(<PrimerApp saludo={saludo} subtitulo={subtitulo} />);
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);
    });
});