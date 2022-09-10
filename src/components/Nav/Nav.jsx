import React from "react";
import { Link } from "react-router-dom";
import {useState} from 'react';
import "./Nav.css";

function Nav() {

//const hamburger = document.querySelector(".hamburger-menu");
//const navMenu = document.querySelector(".left-bar-left")
//console.log(hamburger)
//hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }

//const navLink = document.querySelectorAll(".nav-link");

//navLink.forEach(n => n.addEventListener("click", closeMenu));

// function closeMenu() {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }

// const [isActive, setIsActive] = useState(false);

const handleClick = event => {
    // setIsActive(current => !current);
    event.currentTarget.classList.toggle('hamburger-menu');
    // event.currentTarget.classList.add('hamburger-menu');
    event.currentTarget.classList.remove('hamburger-menu');

    
};

    return (
        <div>
            <nav className="nav-bar">
                <div className="nav-logo">
                    <Link className="nav-link" to="/">
                        <img className="logo" src={'./allyLab_inline.png'} alt="AllyLab logo"/>
                    </Link>
                </div>
                <div className="nav-bar-left">
                    <Link className="nav-link" to="/">heading one</Link>
                    <Link className="nav-link" to="/">heading two</Link>
                    <Link className="nav-link" to="/">heading three</Link>
                </div>
                <div className="nav-bar-right">
                <Link to="/" ><button className="join-btn" type="submit">Join now</button></Link>
                <Link to="/" ><button className="login-btn" type="submit">Sign in</button></Link>
                </div>
                <div className="hamburger-menu" onClick={handleClick}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </div>
    )
}



export default Nav;
