import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log(newUser);
    axios.post(`${URL}/api/register`,newUser,{
      headers:{"Content-Type": "application/json"}
    })
    .then(res => {
      console.log(res);
      if(res.data.success){
        const token = res.data.token
        //console.log(token);
        localStorage.setItem('token',token);
        localStorage.setItem('email',res.data.user.email);
        this.props.history.push('/');//redirect to home page 
      }
    })
    .catch(err => {
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
        <div className="row forms">
          <div className="col s8">
            <div className="col s12">
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                />
                <label htmlFor="name">Name</label>
                <span style={{color:"red"}}>{errors.name}</span>
              </div>
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
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                />
                <label htmlFor="password2">Confirm Password</label>
                <span style={{color:"red"}}>{errors.password2}</span>
              </div>
              <div className="col s12" style={{  }}>
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
                  Sign up
                </button>
                <br/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}export default Register;