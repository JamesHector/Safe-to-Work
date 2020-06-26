import React, { Component } from 'react';



import './App.css';
import Output from './UserIO/Output'
import Input from './UserIO/Input'
import Api from './Api/Api'




class App extends Component {
  state = {
    theDate: '26-06-2020',
    person: 
      {
        name: 'Firstname  Lastname',
        calendar: 'new Date().toLocaleString()',
        temperature: false,
        cough: false,
        smell: false,
        symptons: false,
        livingWith: false
      },
    otherState: 'some other value'
  };

  
  inputNameHandler = (newName) => {

    let tempDate = new Date().toLocaleString()
    console.log('Debug tempDate:', tempDate);
     // this is only working on the second call it needs to be moved somewhere else   
      this.setState({theDate : tempDate});
       
    
     // this is only working on the secon call it needs to be moved somewhere else   
      // this.setState({
        
      //   calendar: new Date().toLocaleString()
      // });
      console.log('Debug: Time Branch 2nd commit ',this.state.theDate);
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
        //click={this.inputNameHandler.bind(this, 'name changed')}
        date = {this.state.theDate}
        otherstate={this.testAPI}
        />
        
        <button
        //<a href="#" onClick={() => { func1(); func2();}}>Test Link</a>
        onClick={this.inputNameHandler.bind(this, this.state.person.name)}
        >Press to submit
        </button>
      </div>
    );
  }
}

export default App;
