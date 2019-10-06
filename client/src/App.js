import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/HomePage';

import Navbar from "./components/layout/Navbar";
import Register from "./components/sign_in_out/Register";
import Login from "./components/sign_in_out/Login";
import Graph from "./components/layout/Graph";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/score" component={Graph} />
        </div>
      </Router>
    );
  }
}export default App;