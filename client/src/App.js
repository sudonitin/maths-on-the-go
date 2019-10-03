import React,{ Component } from 'react';
import './App.css';
import { Router,Switch,Route } from 'react-router-dom';
import Navbar from '../src/components/layout/Navbar';
import FormPage from './components/sign_in_out/login';


class App extends Component {
  render(){
    return(
      
      <div className="app">
        <Navbar/>
        <FormPage />
        
      </div>
      
    )
  }
}

export default App;
