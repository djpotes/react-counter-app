import './index.css';

import CounterApp from './CounterApp';
import PrimeraApp from './PrimeraApp';
import React from "react";
import ReactDOM from "react-dom";

const div = document.querySelector("#root");
//ReactDOM.render(<PrimeraApp  saludo = "Hola"/>, div);
ReactDOM.render(<CounterApp />, div);