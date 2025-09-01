import './App.css'
import {Recipe} from './Recipe.jsx'
import { Navbar } from './Navbar.jsx'
import { Routes, Route} from "react-router-dom"
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Middlecontent from './Middlecontent.jsx'


function App() {

  return (
    <>


       <Routes>
        <Route path="/" element={
           <div className="page-container">
          <Navbar />
          <div className="maincontent">
            <Header />
            <Middlecontent />
          </div>
          <Footer />
        </div>
        } />
        <Route path="/recipe" element={
         <div className="page-container">
          <Navbar />
          <div className="maincontent">
            <Recipe />
          </div>
          <Footer />
        </div>
          } 
        />
      </Routes>
    </>
  )
}

export default App
