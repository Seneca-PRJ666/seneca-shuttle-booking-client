import React,{Component} from 'react';

export class Login extends Component {

render(){
  return ( 
    <div className="Logingin">
        <form>

            <div>
            <label>ID * </label>
            <input type="text" id = "ID"></input>
            </div>

            <div>
            <label>password * </label>
            <input type="password" id = "password"></input>
            </div>

            <a href= "public/forgotpassword.html">Forgot your password?</a>
            <br></br>
            <a>New Account</a>

        </form>
    </div>
  )
}
}