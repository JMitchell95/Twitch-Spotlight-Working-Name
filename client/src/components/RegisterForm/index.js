import React, {useState} from "react";
import API from "../../utils/API";





function SignupLogin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginEmail, setLoginEmail] = useState();
  const [loginPassword, setLoginPassword] = useState();


  // function validateregister(){
  //   return(
  //     email.length > 0 && password.length > 0 &&
  //     loginEmail.length > 0 && loginPassword.length > 0
  //   );
    
  // }



    const handleRegister = e => {
        e.preventDefault();
        API.loginuser
    };


  
return (
  <div>
  <div className= "mt-4">
    <h3> Sign Up</h3>
  </div>
    <form className="form-group mt-5 mb-5" onSubmit={handleRegister}>
      <input className="form-control mb-5" required 
      placeholder="Email" 
      name="email"
      value= {email}
      onChange={e => setEmail(e.target.value)}/>


      <input className="form-control mb-5" required 
      placeholder="Password" 
      name="password"
      value={password}
      onChange={e => setPassword(e.target.value)}/>

      
      <button className="btn btn-success mt-3 mb-5" type="submit" >
          Sign Up
        </button>
      </form>

      <div className= "mt-4">
    <h3> Login</h3>
  </div>
    <form className="form-group mt-5 mb-5" onSubmit={handleRegister}>
      <input className="form-control mb-5" required 
      placeholder="Email" 
      name="loginemail"
      value={loginEmail}
      onChange={e => setLoginEmail(e.target.value)}/>


      <input className="form-control mb-5" required 
      placeholder="Password" 
      name="loginpassword"
      value={loginPassword}
      onChange={e => setLoginPassword(e.target.value)}/>

      
      <button className="btn btn-success mt-3 mb-5" type="submit" >
          Login
        </button>
      </form>

      </div> 
    );

      
};

export default SignupLogin;