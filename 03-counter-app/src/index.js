import React from 'react'
import ReactDOM  from 'react-dom'
import PrimeraApp from './PrimeraApp'
import CounterApp from './CouterApp'
import './index.css'






const divroot = document.querySelector("#root")
ReactDOM.render(<CounterApp value={200}/>, divroot)

