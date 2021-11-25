import React from 'react';
import { render } from "@testing-library/react";
import PrimeraAPP from "../PrimerAPP";
import {shallow} from 'enzyme'

describe('pruebas en primeraAPP', () => {

    // test('debe de mostar el mensaje "Hola soy goku" ', () => {
    //     const saludo = 'Hola soy goku';
    //     const {getByText} = render(<PrimeraAPP saludo = {saludo}/>);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // });
    
    // test('debe de mostar primeraAPP correctamente ', () => {
    //     const saludo = 'Hola soy goku'; 
    //     const wrapper = shallow(<PrimeraAPP saludo= {saludo}/>)
    //     expect(wrapper).toMatchSnapshot();
    // });
    

    // test('debe de mostar el subitutlo enviado por props ', () => {
    //     const saludo = 'Hola soy goku'; 
    //     const sub = 'Subtulo'
    //     const wrapper = shallow(
    //     <PrimeraAPP 
    //         saludo= {saludo}
    //         subtitulo = {sub}
            
    //     />)
    //     const textoParrafo = wrapper.find('p').text();
    //     expect(textoParrafo).toBe(sub);
    // });


});
