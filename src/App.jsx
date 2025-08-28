import { useState } from 'react'
import './App.css'
import {Recipe} from './Recipe.jsx'
import { Navbar } from './Navbar.jsx'
import { Routes, Route , Link } from "react-router-dom"
import carrrot from './images/7522574.png'
import './footer.css'

function Headercards(){

  return (
    <div className='features'>


        <div className='card'>
          <div className='cardlogos'>
            <img src={carrrot} alt="carrotlogo"></img>
          </div>
          <h5 className='cardheading'>Whole Food-Recipe</h5>
          <p>Each dish uses everyday,unprocessed ingridents.</p>
        </div>

         <div className='card'>
           <div className='cardlogos'>
            <img src={carrrot} alt="carrotlogo"></img>
          </div>
          <h5 className='cardheading'>Minimum fuss</h5>
          <p>All recipes are designed to make eating healthy quick and easy.</p>
        </div>

         <div className='card'>
           <div className='cardlogos'>
            <img src={carrrot} alt="carrotlogo"></img>
          </div>
          <h5 className='cardheading'>Search in seconds</h5>
          <p>Filter by name or ingrident and jump straight to the recipe you need. </p>
        </div>
    
    </div>
  )
}

function Header(){

  return(
    <div className='header'>

            <div className='headertop'>
              <h1 className='heading'><b><span>Healthy</span> meals, Zero fuss</b></h1>
              <p>Discover eight quick, whole-food recipes that you can cook tonight <hr></hr>--no processed junk, no guesswork.</p>
              <button className='headerbutton'>Start Exploring</button>
            </div>

              <div className='topimage'>
                <img className='headerimage' src="https://thumbs.dreamstime.com/b/aspiring-chefs-training-professional-cooking-class-chef-institute-kitchen-learning-culinary-skills-fresh-ingredients-393943457.jpg"  alt ="cookingimage" ></img>
              </div>

              <section className='featurelist'>
                <h1 className='cardtitle'>What you'll get</h1>
                <Headercards/>
              </section>

    </div>

  )
}



function Footer(){
  return(
    <div className='footersection'>
      <div className='footerbox1'>
        <h1>Ready to cook smarter?</h1>
        <p>Hit the button , pick a recipe, and get a dinner on the table--fast</p>

        <Link to="/recipe">
          <button>Browse recipes</button>
        </Link>
      </div>
      <div className='footerbox2'>
        <p>Made with ❤ and 🍎</p>
        <section className='socialmedia'>
          <ul>
            <li><img src="https://static.vecteezy.com/system/resources/previews/008/385/736/non_2x/instagram-social-media-icon-symbol-element-illustration-free-vector.jpg"></img></li>
            <li><img src="https://cdn-icons-png.flaticon.com/512/20/20673.png"></img></li>
            <li><img  src="https://images.seeklogo.com/logo-png/31/1/twitter-logo-png_seeklogo-318424.png"></img></li>
          </ul>
        </section>
      </div>
    </div>
  )

}

function App() {


  return (
    <>


       <Routes>
        <Route path="/" element={
          <>
          
            
            <Navbar/>
            <Header />
            {/* <Middlecontent /> */}
            <Footer />
          </>
        } />
        <Route path="/recipe" element={
        <>  
          <Recipe />
        </>
          } 
        />
      </Routes>
    </>
  )
}

export default App
