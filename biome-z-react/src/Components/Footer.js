import "./Footer.css";
import React from "react";

function Footer () { 
    return (

        <div className="foot">
            <p className="foot-text"> © {new Date().getFullYear()} Salisbury University </p>
        </div>

    );
}
 
export default Footer;
