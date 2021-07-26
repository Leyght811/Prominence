import React, { useState } from "react";
import "../../../assets/styles/Navbar.css";
import { Link } from "react-router-dom";

export default function NavbarButton(props) {

    console.log(window.location.pathname);
    const pathName = window.location.pathname;
    if(pathName == props.url){
        return(
            <div className="selectedLink">{props.text}</div>
        )
    } else {
        return (
            <Link to={props.url}>{props.text}</Link>
        
        )
    }
    
}