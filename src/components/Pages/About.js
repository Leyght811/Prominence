import React, { useState } from "react";
import "../../assets/styles/Style.css";
import "../../assets/styles/About.css"

export default function About() {
    return(
        <div className="container aboutContainer">
            <div className="row aboutRow">
                <div id="AboutLeft" className="col">
                    <span className="Header Header2">About Us</span>
                    <br />
                    <br />
                    Prominence Curtains and Blinds has been a leading retailer of window treatments in Whanganui since 2007. Our wide selection of affordable home decor products and accessories provide the perfect ways to personalize any home. We make it easy for our customers to add their own unique styles to their living spaces.
                    <br />
                    We take pride in using our expert eye for creativity to help our customers hone theirs.  We have 30 years experience in the world of blinds and curtains and are committed to finding the right products to meet any decorating vision.
                    <br />
                    Prominence Curtains and Blinds is a mobile service, based in Whanganui, and will come to you for an obligation-free measure and quote.
                    <br />
                    Get In Touch
                </div>
                <div id="AboutRight" className="col">
                </div>
            </div>
        </div>
    )
}