import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import axios from 'axios';
import {setCurrentUser} from '../../actions'


class Reset extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          updated: false,
          err: false,
          errors: {},
          resetToken: this.props.match.params.token,
          success: false
        };
        //console.log(this.props.match.params.token);
      }

      async componentDidMount() {
        //console.log(this.props.match.params.token);
        await axios.post(`${URL}/verify/token`, {
          resetToken:this.props.match.params.token
        },{
          headers:{"Content-Type": "application/json"}
        })
        .then(response => {
            //console.log(response);
            if (response.data.message === 'all ok'){
                this.setState({
                    email: response.data.email,
                    updated: false,
                    isLoading: false,
                    err: false,
                }); 
            } else{
                this.setState({
                    updated: false,
                    err: true,
                });
                alert('INVALID LINK!!!!');
                this.props.history.push('/forgot')
            }
        }).catch(err => {
            //console.log(err.response.data);
            alert('INVALID LINK!!!!');
            this.props.history.push('/forgot')
        });
    }
      handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
      };
      
      updatePassword = e => {
        e.preventDefault();
          axios.put(`${URL}/reset/change`, {
            email: this.state.email,
            password: this.state.password
          }, {
            headers:{"Content-Type": "application/json"}
          })
          .then(response => {
            //console.log(response.data);
            if(response.data.message === "updated"){
              this.setState({
                updated: true,
                err: false
              });
              alert('password changed successfully!!!');
              this.props.history.push('/login')

            } else{
              this.setState({
                updated: false,
                err: true
              });
              alert('INVALID LINK!!!!');
              this.props.history.push('/forgot')
            }
          })
          .catch(err => {
            //console.log(err.data)
            alert('INVALID LINK!!!!');
            this.props.history.push('/forgot')
          })
      }

    render(){
        const { errors, success, updated } = this.state;
        return(
            <div className="container">
                <div style={{ marginTop: "4rem" }} className="row forms">
                <div className="">
                    
                    <div className="col s12">
                        <h4>
                            Reset <b>Password</b>
                        </h4>
                    </div>
                    <form noValidate onSubmit={this.updatePassword}>
                        <div className="input-field col s12">
                            <input
                            onChange={ this.handleChange }
                            id="password"
                            type="password"
                            />
                            <label htmlFor="password">Password</label>
                            <span style={{color:"green",display:updated?"block":"none"}}>Password changed successfully</span>
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