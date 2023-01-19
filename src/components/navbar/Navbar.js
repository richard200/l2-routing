import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'


export default function Navbar(){

    return(
        <div className="topNavBar">
            <Link className="active" to ="/">Home</Link>.
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/user/richard">Richard</Link>
        </div>
    )

}