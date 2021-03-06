import React, {Component} from 'react';


class Erase extends Component {
    render() {
        return (
            <div className="erase"  onClick={ ()=> this.props.handleClear()}>
                {this.props.children}

               
            </div>
        )
    }
}





export default Erase