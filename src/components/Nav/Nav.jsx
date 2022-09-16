import React from "react";
import { Link, useLocation } from "react-router-dom";
import {useState} from 'react';
import "./Nav.css"

// function Nav() {
    const Nav = () => {
        const location = useLocation()
        const [loggedIn, setLoggedIn] = useState(!!window.localStorage.getItem('token'));
        const logOut = () => {
            window.localStorage.removeItem("token");
                setLoggedIn(false)
        }
    
    
        React.useEffect(() => {
            setLoggedIn(window.localStorage.getItem('token'))
        }, [window.localStorage, location]
        
        )
        

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
                {!loggedIn ?   
                <Link to="/signup" ><button className="join-btn" type="submit">Join now</button></Link>:null}
                {loggedIn ? (<Link to = "/" onClick={logOut}><button className="logout-btn" type="submit">Sign out</button></Link>) :
                <Link to="/login" ><button className="login-btn" type="submit">Sign in</button></Link>}
                </div>
            </nav>
        </div>
    )
};



export default Nav;