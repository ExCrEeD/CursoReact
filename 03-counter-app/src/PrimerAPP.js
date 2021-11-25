import React from 'react'
import PropTypes from 'prop-types'
const PrimeraAPP = ({saludo,subtitulo}) =>{
    


    return (
            <>
                <h1>{saludo}</h1>
                {/* <pre>{JSON.stringify(obj,null,3)}</pre> */}
                <p>{subtitulo}</p>
            </>
         );
}

PrimeraAPP.defaultProps ={
    subtitulo:'Soy un subtitulo'
}

PrimeraAPP.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraAPP;