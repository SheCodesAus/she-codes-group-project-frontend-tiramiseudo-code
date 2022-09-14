import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
 
function LoginForm() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [errormessage, setErrormessage] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials({ ...credentials, [id]: value });
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      }
    );
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData()
        .then((response) => {
          if (response.token) {
            window.localStorage.setItem("token", response.token);
            setErrormessage([]);
            navigate("/");
          } else if (response.non_field_errors) {
            setErrormessage(response.non_field_errors);
            console.log(response.non_field_errors);
          }
        })
        .catch((err) => {
          navigate("/404");
        });
    } else if (credentials.username == "" || credentials.password == "") {
      console.log("empty field");
      setErrormessage(["Empty field"]);
    }
  };

  return (
    <form className="form-display">
      <div className="input-container">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <div>
        {errormessage.map((message, index) => (
          <div>{message}</div>
        ))}
      </div>
      <div className="button-container">
        <button type="submit" className="button-login" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
