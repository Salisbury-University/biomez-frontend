import React from 'react';
import './NavbarStyles.css';
import websiteIcon from '../Images/BIOMEZ ICON (White).png';
import { Link } from "react-router-dom"

function Navbar() {
    return (

        <nav className="navbar">

            <div className="webIcon">
                <img src={websiteIcon} alt="Icon" style={{ position: 'absolute', top: -6, left: 10, width: 120, height: 120}} />
            </div>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="Home" className="nav-link">
                        HOME
          </a>
                </li>
                <li className="nav-item">
                    <a href="Explore" className="nav-link">
                        EXPLORE
          </a>
                </li>
                <li className="nav-item">
                    <a href="AboutUs" className="nav-link">
                        ABOUT
          </a>
                </li>
                <li className="nav-item">
                    <Link className="search" to="Search" >
                        <form>
                            <input type="text" placeholder="  Search the database" />
                        </form>

                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;