import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import "../02-useEffect/effects.css"

export const MemoHook = () => {
    const {counter,increment} =useCounter(5000);
    const [show, setShow] = useState(false);

    const procesoPesado = (iteraciones) =>{
        for (let index = 0; index < iteraciones; index++) {
            console.log('...');
        } 
        return `${iteraciones} iteraciones realizadas..`
    }
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>Memohook</h1>
            <hr/>
            <h3>Counter {counter}</h3>
            <p>{memoProcesoPesado}</p>
            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={()=>setShow(!show)}
            >
                show/hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
