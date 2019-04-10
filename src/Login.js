import React, { Component } from 'react';
import Menu from './Menu';


class Login extends Component {
   onLogin(){
      window.location(['/customer']);
   }
   render() {
      return (
         <div>
            <h2>Login</h2>
            <Menu/>
            <input type="text" placeholder="Username"></input><br/>
            <input type="password" placeholder="Password"></input><br/>
            <input type="button" value="Sign In" onClick={()=>this.onLogin()}></input>

         </div>
         
      );
   }
}
export default Login;