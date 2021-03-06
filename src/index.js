import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import MyCalc from './MyCalc';
import './MyCalc.css';
import Button from './Button';
import './Button.css';
import Input from './Input';
import './Input.css';
import Erase from './Erase';
import './Erase.css';

ReactDOM.render(<MyCalc />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*
  PARA EL BUTON PARA PONERLE COLOR

  isOperator = val => {
        return !isNaN(val) || val === "." || val === "=";
    }



{`button ${this.isOperator
            (this.props.children) ? "" : "operator"}`}




*/
