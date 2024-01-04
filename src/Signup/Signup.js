import React from "react";
import './Signup.css';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
      <div>
        <motion.div className="login-wrapper" animate={{scale:1.2}} transition={{ repeat:Infinity }}>
            <h1>Please Sign up</h1>
        </motion.div>
        <form onSubmit={handleSubmit}> 
            <label>
                <p>Username</p>
                <input type="text" onChange={(e)=>{setUserName(e.target.value)}}/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            </label>
            <div>
                <button  type="submit" onClick={handleSubmit}>Sign Up</button>
            </div>
        </form>
      </div>
        
    )
}
export default Signup;