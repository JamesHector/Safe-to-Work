import React, { Component } from 'react';



import './App.css';
import Output from './UserIO/Output'
import Input from './UserIO/Input'
import Api from './Api/Api'




class App extends Component {
  state = {
    person: 
      {
        name: 'Firstname  Lastname',
        date: '17/05/2020',
        temperature: false,
        cough: false,
        smell: false,
        symptons: false,
        livingWith: false
      },
    otherState: 'some other value'
  };

  
  inputNameHandler = (newName) => {
       this.setState({
      person: 
      // set date somewhere here!! It's disappearing from the string setting
        { name: newName }
    });
    //Api(this.state.person.name); doesnt work
    Api(newName);
  };

  nameChangeHandler = (event) => {
    this.setState({
      person: 
        { name: event.target.value}
    });
  };



  render() {
    return (
      <div className="App">
        <ol>
        
        </ol>
        
        
        
        <Input changed={this.nameChangeHandler}
        currentName={this.state.person.name}
        ></Input>
        <Output name={this.state.person.name}
        click={this.inputNameHandler.bind(this, 'name changed')}
        date = {this.state.person.date}
        otherstate={this.testAPI}
        />
        <button
        onClick={this.inputNameHandler.bind(this, this.state.person.name)}
        >Press to submit
        </button>
      </div>
    );
  }
}

export default App;
