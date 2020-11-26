import CounterApp from '../../CounterApp';
import {shallow} from 'enzyme';

describe('Pruebas CounterApp component', () => {
    let wrapper = shallow(<CounterApp />);

    beforeEach( () => {
        wrapper = shallow(<CounterApp />);
    });

    test('Debe de mostrar <CounterApp/> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar valor por defecto de 100', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={value}/>);
        const textoValue = wrapper.find('h2').text();
        expect(textoValue).toBe(value.toString());
    });

    test('Debe de incrementar con el boton +1', () => {
        const value = "11";
        wrapper.find("button").at(0).simulate('click');
        const textoValue = wrapper.find('h2').text();
        expect(textoValue).toBe(value);
    });

    test('Debe de decrementar con el boton -1', () => {
        const value = "9";
        wrapper.find("button").at(2).simulate('click');
        const textoValue = wrapper.find('h2').text();
        expect(textoValue).toBe(value);
    });

    test('Debe de colocar el valor por defecto con el boton reset', () => {
        const value = 105;
        const wrapper = shallow(<CounterApp value={value}/>);
        wrapper.find("button").at(0).simulate('click');
        wrapper.find("button").at(1).simulate('click');
        const textoValue = wrapper.find('h2').text();
        expect(textoValue).toBe("105");
    });
});