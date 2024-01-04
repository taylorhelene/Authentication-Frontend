import React from "react";
import { useNavigate  } from "react-router-dom";


const Logout =()=>{

    const navigate=useNavigate();
    const clear=()=>{
        sessionStorage.clear();
        navigate('/')

    }
    return(
        <div>
            <h1>Are you sure you want to logout</h1>
            <button onClick={()=> clear()}>Logout</button>
        </div>
    )
}

export default Logout;