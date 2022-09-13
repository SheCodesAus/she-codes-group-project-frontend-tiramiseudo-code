import React from "react";
import { Link } from "react-router-dom";
import {useState} from 'react';
import "./Nav.css"

function Nav() {

    return (
        <div>
            <nav className="nav-bar">
                <div className="nav-logo">
                    <Link className="nav-link" to="/">
                        <img className="logo" src={'./allyLab_inline.png'} alt="AllyLab logo"/>
                    </Link>
                </div>
                <div className="nav-bar-left">
                     <Link className="nav-link" to="/allProfiles">Profiles</Link>
                </div>
                <div className="nav-bar-right">
                <Link to="/signup" ><button className="join-btn" type="submit">Join now</button></Link>
                <Link to="/login" ><button className="login-btn" type="submit">Sign in</button></Link>
                </div>
            </nav>
        </div>
    )
};



export default Nav;
