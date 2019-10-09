import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import axios from 'axios';
import {setCurrentUser} from '../../actions'


class Reset extends React.Component{
    constructor() {
        super();
        this.state = {
          email: "",
          errors: {},
          success: false
        };
      }
    
      // componentDidMount(){
      //   console.log(this.props.user);
      // }
    
      async componentDidMount() {
        console.log(this.props.match.params.token);
        await axios.get("http://localhost:3000/reset", {
            params: {
                resetPasswordToken: this.props.match.params.token,
            },
        }).then(response => {
            console.log(response);
            if (response.data.message === 'password reset link a-ok'){
                this.setState({
                    username: response.data.username,
                    update: false,
                    isLoading: false,
                    error: false,
                });
            }else{
                this.setState({
                    update: false,
                    isLoading: false,
                    error: false,
                });
            }
        }).catch(error => {
            console.log(error.data);
        })
    }
      handleChange = e => {
        this.setState({ [name]: e.target.value });
      };
      
      updatePassword = e => {
          e.preventDefault();
          axios.put(`${URL}/reset/change`)
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
        axios.post(`${URL}/forgot/check`,userData,{
          headers:{"Content-Type": "application/json"}
        })
        .then(res => { 
          console.log(res);
          this.setState({success:true});
        })
        .catch(err => {
          //console.log(err.response.data);
          this.setState({success:false});
          this.setState({
            errors:err.response.data
          })
          console.log(this.state.errors);
        })
      };
    render(){
        const { errors } = this.state;
        const { success } = this.state;
        return(
            <div className="container">
                <div style={{ marginTop: "4rem" }} className="row forms">
                <div className="">
                    
                    <div className="col s12">
                        <h4>
                            Reset <b>Password</b>
                        </h4>
                    </div>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="input-field col s12">
                            <input
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            id="password"
                            type="password"
                            />
                            <label htmlFor="password">Password</label>
                            <span style={{color:"green",display:success?"block":"none"}}>Password changed successfully</span>
                            <span style={{color:"red"}}>{errors.email}</span>
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
                            Submit
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reset;