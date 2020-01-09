import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Footer from "./components/footer/Footer";
import Navbar from "./components/layout/Navbar";
import Register from "./components/sign_in_out/Register";
import Login from "./components/sign_in_out/Login";
import Graph from "./components/dashboard/Graph";
import Forgot from "./components/forgotPassword/forgotPassword";
import Reset from "./components/forgotPassword/resetPassword";
import Questions from './components/Questions/Questions'
import Categories from "./components/Categories/Categories";
import Loader from "./components/loader/Loader";
import Congratulations from "./components/congratulations/Congratulations";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App wrapper">
          <Route path="/" component={Navbar} />
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/contactus" component={ContactUs}/>
          <Route exact path="/aboutus" component={AboutUs}/>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Graph} />
          <Route exact path="/forgot" component={Forgot} />
          <Route exact path="/reset/:token" component={Reset} />
          <Route exact path='/categories' component={Categories} />
          <Route exact path="/questions" component={Questions}/>
          <Route exact path="/loader" component={Loader}/>
          <Route exact path="/congratulations" component={Congratulations}/>
          <Footer />
        </div>
      </Router>
    );
  }
}export default App;