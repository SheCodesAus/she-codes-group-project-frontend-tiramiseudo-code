import React, { useState, useEffect } from "react";
import LoginForm from "../../components/LoginForm/Login";
import "./index.css";

function HomePage() {

    return (
        <div className="homepage-container">
            <div className="left-side-home">
            <h2 className="home-h2">Are you ready to be an ally?</h2>
            <p className="home-p">Our members and supporters share a passion for science and technology and appreciate the unique challenges professional women face. Whether you are starting your career, mid-career and looking to advance, or in senior leadership, you will find your niche with us.</p>
            <h3 className="home-h3">Sign in to your account</h3>
            <LoginForm />
            <p className="p-style-2">Don't have an account?<a className="intext-link" href="/"> Join now</a></p>
            </div>
            {/* <div className="login-form"> */}
               
            {/* </div> */}
            <div className="image-container">
                <img className="home-image" src={'./connect-square.png'} alt="Lots of circle images connected with dotted lines"/>
            </div>
        </div>
    )
}

export default HomePage;