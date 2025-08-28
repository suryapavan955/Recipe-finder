
import { Link } from "react-router-dom";
import logo from "./images/logos.jpg";
import './navbar.css';

function NavButton(){
  return(
    <div >
      <button className="w-30 h-10 bg-red-400 ">Browse Recipe</button>
    </div>
  )
}

export function Navbar(){
  return(
      <div  className="nav" >
              <div  className="logo"> 
                <img src={logo} alt="logo" className="w-20 h-20 rounded-[96px]"></img>
                  <h2 className=" ">Healty Recipe Finder</h2>
                </div>
            
              <ul className="list">
                    <li><Link to="/">Home</Link></li>
                    <li>About</li>
                    <li><Link to="/recipe" >Recipe</Link></li> 
              </ul>
    
            <NavButton/>
      </div>

    )
  }