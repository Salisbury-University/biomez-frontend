import "./Footer.css";
import React from "react";

function Footer () { 
    return (

        <footer className="foot">
        <p className="foot-text"> © {new Date().getFullYear()} Salisbury University BioPsychoSocial Biome-z website  <br></br> <br></br><p className = "footer-titles"> Contacts <p className = "The-S.U-Github  " > </p> < a className = "Con-link-1" href = "https://github.com/nlautieri1" > Nick Lautieri-Github  </a> <br></br> <a className = "Con-link-2 " herf = "https://github.com/Ewhite9">Ethan White-Github </a> <br></br> <a className = "Con-link-3" herf = " https://github.com/sgnahouidavid1" >Samuel Gnahoui-David-Github </a> <br></br> <a className = "Con-link-4 " herf = "https://github.com/SBlaxberg1" > Rachamim Blaxberg-Github </a> </p></p>
        </footer>

    );
}
 
export default Footer;
