import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Header branding="Contact Manager"/>
        <Contact name="john doe" email="joe@gmail.com" phone="555-555-5555" />
        <Contact name="jaden smith" email="jaden@gmail.com" phone="444-444-5555" />
      </div>
    );
  }
}

export default App;
