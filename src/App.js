import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import "./App.css";
import "./assets/styles/Style.css";
import "./assets/styles/Coloring.css";
import "./assets/styles/Elements.css";
import "./assets/styles/Containers.css";
import "./assets/styles/Transitions.css";

import Home from "./components/Pages/Home";
import About from "./components/Pages/About";

import Navbar from "./components/Blocks/Navbar"
import Footer from "./components/Blocks/Footer";


export default function App() {
    return (
        <div id="App-Main">
            
            <Router>
                <div id="Main">
                    <Navbar/>
                    <div id="body">
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/about">
                                <About/>
                            </Route>

                            <Route path="/products">
                                <Products/>
                            </Route>
                            <Route path="/opening">
                                <OpeningHours/>
                            </Route>
                            <Route path="/contact">
                                <Contact/>
                            </Route>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
                
            </Router>
        </div>
        
    )
}

function Products() {
    return (
        <div>
            <h1>Products</h1>
        </div>
    )
}

function OpeningHours() {
    return (
        <div>
            <h1>Opening Hours</h1>
        </div>
    )
}

function Contact() {
    return (
        <div>
            <h1>Contact</h1>
        </div>
    )
}
