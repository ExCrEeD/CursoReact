import React, { useState } from 'react'
import "../02-useEffect/effects.css"
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'
export const ExampleRef = () => {
     const [show, setShow] = useState(false);
    return (
        <div>
            <h1>Example ref</h1>
            <hr/>
            {show && <MultipleCustomHooks/>}
            <button 
                className="btn btn-outline-primary mt-5"
                onClick={()=>setShow(!show)}
            >
                Show/hide
            </button>
        </div>
    )
}
