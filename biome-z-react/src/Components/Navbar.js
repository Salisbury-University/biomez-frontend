import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyles.css';
import websiteIcon from '../Images/BIOMEZ ICON (White).png';

function Navbar() {
    const [query, setQuery] = useState('');

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            window.location.href = `/Search?q=${query}`;
        }
    };

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <div className="webIcon">
                        <img src={websiteIcon} alt="Icon" style={{ position: 'absolute', top: -6, left: 10, width: 120, height: 120 }} />
                    </div>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        HOME
          </Link>
                </li>
                <li className="nav-item">
                    <Link to="/explore" className="nav-link">
                        EXPLORE
          </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Search" className="nav-link">
                        DATABASE
          </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">
                        ABOUT
          </Link>
                </li>
                <li className="nav-item">
                    <input type="text" placeholder="  Search the database" value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={handleSearch} />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
