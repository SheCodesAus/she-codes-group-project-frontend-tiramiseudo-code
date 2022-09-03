import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <div>
            <nav className="nav-bar">
                <div className="nav-logo">
                    <Link to="/">
                        <img src={'./allyLab_inline.png'} alt="AllyLab logo"/>
                    </Link>
                </div>
                <div className="nav-bar-left">
                    <Link to="/">heading one</Link>
                    <Link to="/">heading two</Link>
                    <Link to="/">heading three</Link>
                </div>
                <div className="nav-bar-right">
                <button className="join-btn" type="submit" onClick={<Link to="/" ></Link>}>Join now </button> 
                <button className="login-btn" type="submit" onClick={<Link to="/" ></Link>}>Sign in </button> 
                </div>
            </nav>
        </div>
    )
}

export default Nav;
