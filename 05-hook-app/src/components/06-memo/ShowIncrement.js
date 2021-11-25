import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
    return (
        <button onClick={()=>{
            increment(5);}
            
            }>
            incrementar
        </button>
    )
})
