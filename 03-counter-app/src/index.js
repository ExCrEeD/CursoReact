import React from 'react'
import reactDom from 'react-dom';
//import PrimeraAPP from './PrimerAPP';
import CounterApp from './CounterAPP';
import './index.css'


const divroot = document.querySelector('#root');
reactDom.render(
     //<PrimeraAPP saludo="Hola soy goku" />,
    <CounterApp />,
    divroot
);
