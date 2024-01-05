import React from "react";
import './Signup.css';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import signin from "../Images/signup.svg"

async function loginUser(credentials) {
  
    return fetch('http://localhost:8000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json() )
      .then(response=> response)
   }

const Signup=()=>{
    const [username, setUserName] = React.useState();
    const [password, setPassword] = React.useState();
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        await loginUser({
          username,
          password
        });
        navigate('/')
        console.log('yes')
      }

    return(
      <div className="container">

        <div className="row">
          <div className="col-sm-6">
            <motion.div className="login-wrapper" >
                <img src={signin}/>
                <h1>Please Sign up</h1>
            </motion.div>
          </div>
       

        <div className="col-sm-6"> 
            <div className="container">
        <form onSubmit={handleSubmit}> 
            <label>
                <p>Username</p>
                <input type="text" onChange={(e)=>{setUserName(e.target.value)}}/>
            </label>
            <br></br>
            <label>
                <p>Password</p>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            </label>
            <div>
                <button  type="submit" onClick={handleSubmit}>Sign Up</button>
            </div>
        </form>
        </div>
        </div>
        </div>

      </div>
        
    )
}
export default Signup;