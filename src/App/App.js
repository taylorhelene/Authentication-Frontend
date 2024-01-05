import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import Signup from '../Signup/Signup';

function setToken(userToken) {
  sessionStorage.setItem("token",JSON.stringify(userToken))
  console.log(userToken)
}

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  if(tokenString!== "undefined"){
    var userToken = JSON.parse(tokenString);
    console.log(userToken)
    return userToken
  }
  
  
}

function App() {
  const token = getToken();
  

  
  
  return (
    <div className="wrapper container">
      <h1>Authentication application</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>} > </Route>
          <Route path="/preferences" element={<Preferences />} > </Route>
          <Route path="/logout" element={<Logout />} > </Route>
          <Route path="/signup" element={<Signup />} > </Route>
          <Route path="/"  index element={<Login setToken={setToken} />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );

  
}

export default App;