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
          <li> Create One new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (= the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (= an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
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
