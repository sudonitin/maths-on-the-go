import React from "react";
import axios from 'axios';
import Loader from '../loader/Loader';
import emailjs from 'emailjs-com';


class Forgot extends React.Component{

    constructor() {
        super();
        this.state = {
          email: "",
          errors: {},
          success: false,
          loading:false
        };
      }
    
    
    onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
    e.preventDefault();
    const userData = {
        email: this.state.email,
    };
    this.setState({
        loading:true,
        email:""
    })
    // console.log(userData);
    axios.post(`${URL}/forgot/check`,userData,{
        headers:{"Content-Type": "application/json"}
    })
    .then(res => { 
        // console.log(res);
        emailjs.send('gmail', 'secret-id', res.data, 'secret-id')
        .then((result) => {
        //   console.log(res.data);
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        this.setState({success:true,loading:false});
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
        const { success,errors,loading } = this.state;
        return(
            <div className="container">
                <div style={{ marginTop: "4rem" }} className="row forms">
                <div className="">
                    
                    <div className="col s12">
                        <h4>
                            Forgot <b>Password</b>
                        </h4>
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
                            {
                                loading ? <Loader /> : null
                            }
                            <span style={{color:"green",display:success?"block":"none"}}>Email sent to your registered account</span>
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

export default Forgot;