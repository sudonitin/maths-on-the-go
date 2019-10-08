import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import axios from 'axios';
import {setCurrentUser} from '../../actions'


class Forgot extends React.Component{
    
    render(){
        return(
            <div className="container">
                <div style={{ marginTop: "4rem" }} className="row forms">
                <div className="">
                    
                    <div className="col s12">
                        <h4>
                            Forgot <b>Password</b>
                        </h4>
                    </div>
                    <form noValidate>
                        <div className="input-field col s12">
                            <input
                            id="email"
                            type="email"
                            />
                            <label htmlFor="email">Email</label>
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

export default Forgot;