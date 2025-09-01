
// import { Link } from "react-router-dom";
// import logo from "./images/logos.jpg";
// import './navbar.css';

// function NavButton(){
//   return(
//     <div >
//       <button className="w-30 h-10 bg-red-400 rounded-xs">Browse Recipe</button>
//     </div>
//   )
// }

// export function Navbar(){
//   return(
//       <div  className="nav " >
//               <div  className="logo "> 
//                 <img src={logo} alt="logo" className="w-20 h-20 rounded-[96px]"></img>
//                   <h2 className=" ">Healty Recipe Finder</h2>
//                 </div>
            
//               <ul className="list">
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/recipe" >Recipe</Link></li> 
//               </ul>
    
//             <NavButton/>
//       </div>

//     )
//   }



import { Link } from "react-router-dom";
import logo from "./images/logos.jpg";
import "./navbar.css";

function NavButton() {
  return (
    <button className="nav-btn">
      Browse Recipes
    </button>
  );
}

export function Navbar() {
  return (
    <nav className="nav">
      {/* Logo & Title */}
      <div className="logo">
        <img src={logo} alt="logo" className="logo-img" />
        <h2 className="logo-text">Healthy Recipe Finder</h2>
      </div>

      {/* Navigation Links */}
      <ul className="list">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/recipe" className="nav-link">Recipes</Link>
        </li>
      </ul>

      {/* Right Button */}
      <NavButton />
    </nav>
  );
}
