import "./Footer.css";
import React from "react";

function Footer () { 
    return (

        <footer className="foot">
        <p className="foot-text"> © {new Date().getFullYear()} Salisbury University </p>
        </footer>

    );
}
 
export default Footer;
