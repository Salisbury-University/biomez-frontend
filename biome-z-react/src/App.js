import './App.css';
import Navbar from "./Components/Navbar";
import AboutPage from "./pages/About"
import HomePage from "./pages/Home"
import ExplorePage from "./pages/Explore"
import SearchPage from "./pages/Search"
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom"
export default function App()
{

  return(
    
    <div  className="divScroll" >
      <Navbar />
      <div className="Navbar"> </div>
      
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/Home" element={<HomePage />}/>
          <Route path="/About" element={<AboutPage />}/>
          <Route path="/Explore" element={<ExplorePage />}/>
          <Route path="/Search" element={<SearchPage />}/>
        </Routes>
      </div>

     <div className="footer">
          <Footer />
     </div>
    </div>
    );  
}
