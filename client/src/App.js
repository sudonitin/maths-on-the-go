import React,{ Component } from 'react';
import './App.css';
import { Router,Switch,Route } from 'react-router-dom';
import Navbar from '../src/components/layout/Navbar';

class App extends Component {
  render(){
    return(
      
      <div className="app">
        <Navbar />
        
      </div>
      
    )
  }
}

export default App;
