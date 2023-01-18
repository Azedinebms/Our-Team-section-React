import React, {Component} from 'react';
import './App.css';

class Change extends Component {

  state ={
    name : 'Azedine',
    age : 33
  }

  change = () => {
    this.setState({
      name : 'Safouane',
    age : 4
    })
  }

 render(){
  return (
    <div className="App">
        <button onClick={this.change}>change</button>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
    </div>
  );
}
}

export default Change;
