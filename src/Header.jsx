import carrrot from './images/7522574.png'
import './header.css'
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

export default Header;