import './App.css';
import Navbar from "./Components/Navbar";
import AboutPage from "./pages/About"
import HomePage from "./pages/Home"
import ExplorePage from "./pages/Explore"
import { Route, Routes } from "react-router-dom"
export default function App()
{
  // localhost:3000/

  return(
    
    <div  className="divScroll" >
      <Navbar />
      
      <div className="Navbar"> </div>
      
      <div className="container">
      <Routes>
          <Route path="/Home" element={<HomePage />}/>
          <Route path="/About" element={<AboutPage />}/>
          <Route path="/Explore" element={<ExplorePage />}/>
      </Routes>
   
      </div>
    </div>
  );  
}
