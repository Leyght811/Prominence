import React, { useState } from "react";
import "../../assets/styles/Navbar.css";
import "../../assets/styles/Style.css";
import NavbarButton from "./Buttons/NavbarButton";

export default function Navbar() {
    const [expanded, setExpanded] = useState(false);

    
    return (
        <div id="Navbar-Main">
            <div className="row">
                <h1 id="Navbar-Title" className="col Header">
                Prominence
                </h1>
            </div>
             
             <div className="row">
                <h5 id="Navbar-Subtitle" className="col">
                    Curtains and Blinds
                </h5>
             </div>
            
            <ul id="Navbar-Links" className="row Navbar-Buttons Header">
                <li className="col"><NavbarButton url="/" text="Home" /></li>
                <li className="col"><NavbarButton url="/about" text="About Us" /></li>
                <li className="col"><NavbarButton url="/products" text="Products" /></li>
                <li className="col"><NavbarButton url="/opening" text="Opening Hours" /></li>
                <li className="col"><NavbarButton url="/contact" text="Contact" /></li>
            </ul>
            {expanded ? 
            <div id="Navbar-Collapse" className="row">
                <div className="col">
                <ul className="Navbar-Buttons">
                    <li><NavbarButton url="/" text="Home" /></li>
                    <li><NavbarButton url="/about" text="About Us" /></li>
                    <li><NavbarButton url="/products" text="Products" /></li>
                    <li><NavbarButton url="/opening" text="Opening Hours" /></li>
                    <li><NavbarButton url="/contact" text="Contact" /></li>
                    <li><i class="fas fa-chevron-up" onClick={() => setExpanded(false)}></i></li>
                </ul>
                </div>
            </div>
             :
             <div id="Navbar-Expand" className="row">
                <div className="col">
                    <i class="fas fa-chevron-down" onClick={() => setExpanded(true)}></i>
                </div>
            </div>}
        </div>
    )
}