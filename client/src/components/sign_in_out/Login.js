import React, { Component } from "react";
import { Link,Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import axios from 'axios';
import {setCurrentUser} from '../../actions'
import propTypes from 'prop-types';


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
  componentWillReceiveProps(nextProps) {
    //console.log(nextProps);
  }
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
      //console.log(res);
      if(res.data.success){
        //console.log(token);
        this.setState({
          email:"",
          password:""
        })
        localStorage.setItem('token',res.data.token);
        localStorage.setItem('user',JSON.stringify(res.data.user));
        //console.log(res.data.user);
        //console.log(localStorage.getItem('user'));
        this.props.setCurrentUser(res.data.user,res.data.token);
        //console.log(this.props);
        this.props.history.push('/dashboard');//redirect to home page
      }

    })
    .catch(err => {
      //console.log(err.response.data);
      this.setState({
        errors:err.response.data
      })
      //console.log(this.state.errors);
    })
    
  };
  render() {
    if(this.props.isAuthenticated) return <Redirect to='/dashboard'/>
    const { errors } = this.state;
    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row forms">
          <div className="">
            
            <div className="col s12">
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
              <div className="col s12">
              <p className="grey-text text-darken-1">
                <Link to="/forgot">Forgot password?</Link>
              </p>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    marginBottom: "1rem"
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


Login.propTypes = {
  setCurrentUser:propTypes.func.isRequired,
  user:propTypes.object.isRequired,
  isAuthenticated:propTypes.object.isRequired
}


function mapStateToProps(state){
  const {user,isAuthenticated} = state;  
  //console.log(user);
  return {user,isAuthenticated};
}

function mapDispatchToProps(dispatch){
  return {
    setCurrentUser:(user,token) => dispatch(setCurrentUser(user,token))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);