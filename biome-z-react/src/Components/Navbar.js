import "./NavbarStyles.css";
import { FaHome } from 'react-icons/fa';
import { ImEarth } from "react-icons/im";
import { CgProfile } from 'react-icons/cg';
import {GiMagnifyingGlass} from 'react-icons/gi';
import { Link } from "react-router-dom"


function Navbar () {
       
        return(
            <nav className = "NavbarItems" > 
                <h1 className = "title1"> BIOME-Z <br></br> DATABASE </h1>  
                
            <ul className = "nav-menu" >
                
                <Link className = "home" to = "Home"> 
                    <FaHome/> Home    
                </Link> 
                <Link className = "explore" to = "Explore"> 
                    <ImEarth /> Explore    
                </Link>        
                <Link className = "aboutus" to = "About"> 
                    <CgProfile/> About US    
                </Link> 
                
            </ul>
               
                <Link className = "search" to = "Search" >
                    <form>
                        
                        <input type ="text" placeholder = "  Search the database" />
                        <i className="Icon"><GiMagnifyingGlass/></i>
                    </form>
                        
                </Link>
               
            </nav>
        );
    }


export default Navbar;


//<SearchBar />