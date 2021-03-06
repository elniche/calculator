import React, {Component} from 'react';
import Button from './Button';
import './Button.css';
import Input from './Input';
import './Input.css';
import Erase from './Erase';
import './Erase.css';


/// DEJASTE EN 37:33     busca que significa parsrInt()

class MyCalc extends Component {

   constructor(props) {
        super(props);
        
        this.state = {
            input: "",
            previousnumber: "",
            currentnumber: "",
            operator:""
        }
      }

              ParaElInput = val => {
          this.setState({ input: this.state.input + val})
        } 

        ZeroInput = val => {
            // if is not empty
            if(this.state.input !== "") {
                 this.setState({ input: this.state.input + val})   
            }
        }

        paraEldecimal = val => {
            //if there is no decimal
            if(this.state.input.indexOf(".") === -1) {
              this.setState({ input: this.state.input + val})   
            }
        }

        clearInfo = () => {
            //para el buton clear
            this.setState({input: "" });
        }

        Poner = () => {
            this.state.previousnumber = this.state.input;
            this.setState({input:""});
            this.state.operator = "plus";
        }

        Menos = () => {
            this.state.previousnumber = this.state.input;
            this.setState({input:""});
            this.state.operator = "subtract";
        }


        Multiplicar = () => {
             this.state.previousnumber = this.state.input;
             this.setState({input:""});
             this.state.operator = "multiply";
        }

        Divide = () => {
            this.state.previousnumber = this.state.input;
            this.setState({input:""});
            this.state.operator = "divide";
        }

        LoMismo = () => {
            this.state.currentnumber = this.state.input;

            if(this.state.operator == 'plus') {
                      this.setState({
        input: parseInt(this.state.previousnumber)  +
        parseInt(this.state.currentnumber)
                      });
            }  

            else if(this.state.operator == "substract") {
                this.setState({
                    input:  parseInt(this.state.previousnumber) - 
                            parseInt(this.state.currentnumber)
                });
            }

            else if(this.state.operator == "multiply") {
                this.setState({
                    input:  parseInt(this.state.previousnumber) * 
                            parseInt(this.state.currentnumber)
                });
            }

            else if(this.state.operator == "divide") {
                this.setState({
                    input:  parseInt(this.state.previousnumber) / 
                            parseInt(this.state.currentnumber)
                });
            }
     
        };

     

    
    render() {
        return (
            <div className="Calc">
                
            <div className="WrapPaper">
            
            <div className="row">
            <Input>{this.state.input}</Input>
            </div>

            <div className="row">
            
             <Button handleClick={this.ParaElInput}>7</Button>
             <Button handleClick={this.ParaElInput}>8</Button>
             <Button handleClick={this.ParaElInput}>9</Button>
             <Button handleClick={this.Divide}>/</Button>
            </div>

             <div className="row">
             <Button handleClick={this.ParaElInput}>6</Button>
             <Button handleClick={this.ParaElInput}>5</Button>
             <Button handleClick={this.ParaElInput}>4</Button>
             <Button handleClick={this.Multiplicar}>*</Button>
            </div>

             <div className="row">
             <Button handleClick={this.ParaElInput}>3</Button>
             <Button handleClick={this.ParaElInput}>2</Button>
             <Button handleClick={this.ParaElInput}>1</Button>
             <Button handleClick={this.Poner} >+</Button>
            </div>

             <div id="Host" className="row">
             <Button handleClick={this.paraEldecimal}>.</Button>
             <Button handleClick={this.ZeroInput}>0</Button>
             <Button handleClick={this.LoMismo}>=</Button>
             <Button handleClick={this.Menos}>-</Button>
             
            </div>

            <div id="toca" className="row">
             <Erase handleClear={this.clearInfo}>Wipe Out!</Erase>
            </div>
            
            
            
            
            
            
            
            
            
            
            
            </div>

            </div>
        )
    }
}











export default MyCalc