import React from "react";
import './navbar.css';
export default function Navbar(){
    return (
        <nav className="nav-bar">
            <ul className="nav-element">
            <li><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}