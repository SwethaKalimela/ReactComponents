import React, { Component } from 'react';
import './App.css';
import Users from './Users/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserList />  {/*Non-Functional UserList-child component of App Component*/}
      </div>
    );
  }
}

{/*Creating the state object with users and their respective age as keys*/}
class UserList extends Component { 
  state = {    
    users: ["Sachin","Som","Suraj","Saurav","Rohan"],
    age: [10,20,30,40,50]
  }

  render() {
    return(
      <div>
        <h1>Users List</h1>
        <Users name={this.state.users[0]} age={this.state.age[0]}/> {/*Here Users child component is functional component, check ./Users/Users*/}
        <Users name={this.state.users[1]} age={this.state.age[1]}/>
        <Users name={this.state.users[2]} age={this.state.age[2]}/>
        <Users name={this.state.users[3]} age={this.state.age[3]}/>
        <Users name={this.state.users[4]} age={this.state.age[4]}/>
      </div>
    );
  }
}

export default App;
