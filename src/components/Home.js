import React, {Component} from "react";
import Change from './Change';
import Member from './Member';
import Forms from './Forms';
import './App.css';

class Home extends Component{
    state={
        person :[
          {id:1, name:'Azedine', age:33, count:3},
          {id:2, name:'Ilham', age:30, count:4},
          {id:3, name:'Safoune', age:4, count:1},
          {id:4, name:'Chahd', age:2, count:2},
        ]
      }
      
        render() {
          return (
            <div className="App">
                <h1>Home</h1>
              <h2>event</h2>
              <Change />
              <h2>Map + condition (if count large than 1)</h2>
              <Member pers={this.state.person}/>
              <h2>Forms</h2>
              <Forms />
            </div>
          );
        }
      }

export default Home