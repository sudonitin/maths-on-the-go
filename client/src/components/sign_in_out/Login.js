import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import axios from 'axios';
import {setCurrentUser} from '../../actions'

import URL from '../../url';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  // componentDidMount(){
  //   console.log(this.props.user);
  // }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    //console.log(userData);
    axios.post(`${URL}/api/login`,userData,{
      headers:{"Content-Type": "application/json"}
    })
    .then(res => { 
      console.log(res);
      if(res.data.success){
        const token = res.data.token
        //console.log(token);
        localStorage.setItem('token',token);
        localStorage.setItem('email',res.data.user.email);
        //console.log(res.data.user);
        this.props.setCurrentUser(res.data.user);
        console.log(this.props);
        this.props.history.push('/dashboard');//redirect to home page
      }

    })
    .catch(err => {
      //console.log(err.response.data);
      this.setState({
        errors:err.response.data
      })
      console.log(this.state.errors);
    })
    
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b>
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
                <span style={{color:"red"}}>{errors.email}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
                <span style={{color:"red"}}>{errors.password}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  const {user} = state;  
  //console.log(user);
  return {user};
}

function mapDispatchToProps(dispatch){
  return {
    setCurrentUser:(user) => dispatch(setCurrentUser(user))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);