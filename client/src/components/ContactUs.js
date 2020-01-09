import React,{Component} from 'react';
import './homePage.css'
import emailjs from 'emailjs-com';


export default function ContactUs() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'secret-id-', e.target, 'secret-id-')
        .then((result) => {
            alert("Thank you for contacting us!");
            window.location.href = "/";
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
  
    return (
        <div className="container">
            <div className="row forms">
                <div className="col s8">
                    <form className="contact-form" onSubmit={sendEmail}>
                        <div className="input-field col s12">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="input-field col s12" id="name" name="from_name" required/>
                        </div>
                        <div className="input-field col s12">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="from_email" required/>
                        </div>
                        <div className="input-field col s12">
                            <label htmlFor="message">Message</label>
                            <input type="text" name="message_html" id="message" required/>
                        </div>
                        <div className="col s12">
                            <button 
                            type="submit" value="Send"
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  }
  