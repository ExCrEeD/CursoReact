import React,{useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value = 10}) =>{
    
    const [counter,setCounter] = useState(value);
    //handleAdd
    const  handleAdd = () =>setCounter((c)=> c+1);
    const  handleSubstract = () => setCounter((c)=> c-1);
    const  handleReset = () => setCounter(value);
    

    return (
            <>
                <h1>CounterAPP</h1>
                <h2>{counter}</h2>
                <button onClick={ handleAdd } >+1</button>
                <button onClick={ handleSubstract } >-1</button>
                <button onClick={ handleReset } >Reset</button>
            </>
         );
}


CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;
