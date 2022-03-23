import React,{ useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value})=>{
    //Hoocks
    let [counter, setCounter] = useState(value)
    
    //handleAdd
    const aumentar = (e)=>{
        /*Dos formas de realizar la operacion */
        setCounter(counter + 1 );
        //setCounter((c) => c + 1 );
    }

    const reset = ()=>{
        setCounter(value);
    }

    const disminuir = ()=>{
        setCounter(counter - 1)
    }
    return (
        <>
            <h1>CouterApp</h1>
            <h2>{counter}</h2>

            <button onClick={aumentar}>+1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={disminuir}>-1</button>

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
