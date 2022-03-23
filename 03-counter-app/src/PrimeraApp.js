import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional components
*/

const PrimeraApp = ({saludo, subtitulo})=>{
    
    /* if(!saludo){
        throw new Error("el saludo es necesario")
    } */

    return(
        <>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo,null,3)}</pre> */}
            <p>{subtitulo}</p>
        </>)    
}

PrimeraApp.propTypes = {
    saludo:PropTypes.string.isRequired,
    otra: PropTypes.number
}

PrimeraApp.defaultProps = {
    subtitulo:"soy un subtitulo"
}
export default PrimeraApp;