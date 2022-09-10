import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./Login.css"; 
//import mockdata from "./mockdata.js";
// const mockup=require('./mockdata.json')
//console.log(mockdata)

function LoginForm() {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
    
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials({...credentials, [id]: value })
  };

  const postData = async () =>{
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}api-token-auth/`, {
      method: "post",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(credentials),
    })
    return response.json();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then(response => {
        window.localStorage.setItem('token', response.token)
        navigate('/')
      })
    }
  };

  return (
    <form className="login-form-display">
      <div className="input-container">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" placeholder="" onChange={handleChange} />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="" onChange={handleChange}/>
      </div>
      {/* <div className="button-container"> */}
      <button className="button-login" type="submit" onClick={handleSubmit}>Login</button>
      {/* </div> */}
    </form>
  );
}

export default LoginForm;