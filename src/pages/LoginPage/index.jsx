import React from 'react'
import LoginForm from '../../components/LoginForm/Login'
import "./index.css"


function LoginPage(){
    return(    
        <div className="login-container">
       
            <div className="login-text-container">
                <h2 className="login-h2">Thank you for being an Ally</h2>
                <p className="login-p">Our members and supporters share a passion for science and technology and appreciate the unique challenges professional women face. Whether you are starting your career, mid-career and looking to advance, or in senior leadership, you will find your niche with us.</p>
    <img className="login-image" src={'./womenHugging.jpg'} alt="women hugging"/>

            </div>


<div className="left-side-login">
    <h2 className="login-h2">Welcome back, sign in to your account.</h2>
    <LoginForm />
    <p className="login-style-2">Don't have an account?<a className="login-link" href="/signup"> Join now</a></p>
</div>
        </div>    
    );
}

export default LoginPage