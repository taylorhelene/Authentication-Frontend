import React from "react";
import './Login.css';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import search from '../Images/auth.svg'

async function loginUser(credentials) {
  
    return fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json() )
      .then(response=> response)
   }

 

const Login=({setToken})=>{
    const [username, setUserName] = React.useState();
    const [password, setPassword] = React.useState();
    const navigate =  useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        if(token==null){
          alert("enter correct username or password")
        }else {
          setToken(token);
          navigate('/dashboard')
          
        }
        console.log(token)
      }

    return(
      <div className="container">
        
        <div className="row"> 
          <div className="col-sm-6">
            <motion.div className="login-wrapper ">
              <img src={search} className="App-login"/>
              <h1>Please Log In</h1>
            </motion.div>
          </div>

          <div className="col-sm-6"> 
            <form onSubmit={handleSubmit} > 
                <label>
                    <p>Username</p>
                    <input type="text" onChange={(e)=>{setUserName(e.target.value)}}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                </label>
                <div>
                    <button  type="submit">Submit</button>
                </div>
            </form>
          </div>
        
        </div>
        <h2>Don't have an account? <a onClick={()=>navigate('/signup')}>Sign up </a></h2>
      </div>
        
    )
}
export default Login;