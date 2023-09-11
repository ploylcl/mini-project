import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";
export default function Navbar(){
    return (
        <nav className="nav-bar">
            <ul className="nav-element">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/singupPage">Sing up</Link></li>
                <li><Link to="/loginPage">Login</Link></li>
            </ul>
        </nav>
    )
}