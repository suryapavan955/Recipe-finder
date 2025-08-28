import './App.css'
import {Recipe} from './Recipe.jsx'
import { Navbar } from './Navbar.jsx'
import { Routes, Route} from "react-router-dom"
import Header from './Header.jsx'
import Footer from './Footer.jsx'



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
