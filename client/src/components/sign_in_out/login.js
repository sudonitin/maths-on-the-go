import React,{ Component } from 'react';

class Login extends Component{
  render(){
    return(
      
      <section class="section container scrollspy" id="contact">
        <div class="row">
          <div class="col s12 l5">
            
            
          </div>
          <div class="col s12 l5 offset-l2">
            <form>
              <div class="input-field">
                <i class="material-icons prefix">email</i>
                <input type="email" id="email" />
                <label for="email">Your Email</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">message</i>
                <textarea id="message" class="materialize-textarea" cols="20" rows="20"></textarea>
                <label for="message">Password</label>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Login;