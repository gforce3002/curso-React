import React,{ useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value})=>{
    //Hoocks
    const [counter] = useState(0)
    
    //handleAdd
    const aumentar = (e)=>{
        console.log(e)
    }

    return (
        <>
            <h1>CouterApp</h1>
            <h2>{counter}</h2>

            <button onClick={aumentar}>+1</button>
            <button>-1</button>

        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value:0
}


export default CounterApp
