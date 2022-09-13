import React from 'react'
import LoginForm from '../../components/LoginForm/Login'
import "./index.css"


function LoginPage(){
    return(    
        <div className="login-container">
            <div className="left-side-login">
                <h2 className="login-h2">Sign in to your account</h2>
                <LoginForm />
                <p className="login-style-2">Don't have an account?<a className="login-link" href="/signup"> Join now</a></p>
            </div>
       
            <div className="login-text-container">
                <h3 className="login-h3">Are you ready to be an ally?</h3>
                <p className="login-p">Our members and supporters share a passion for science and technology and appreciate the unique challenges professional women face. Whether you are starting your career, mid-career and looking to advance, or in senior leadership, you will find your niche with us.</p>
            </div>
        </div>    
    );
}

export default LoginPage