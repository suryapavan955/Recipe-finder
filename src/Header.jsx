
import carrrot from "./images/7522574.png";
import "./header.css";
import { Link } from "react-router-dom";

function Headercards() {
  return (
    <div className="features">
      <div className="card">
        <div className="cardlogos">
          <img src={carrrot} alt="carrotlogo" />
        </div>
        <h5 className="cardheading">Whole Food-Recipe</h5>
        <p>Each dish uses everyday, unprocessed ingredients.</p>
      </div>

      <div className="card">
        <div className="cardlogos">
          <img src="https://images.vexels.com/media/users/3/128895/isolated/preview/f9298b663ad1e671680cad2ed70b20c3-timer-reload-flat-icon.png" alt="carrotlogo" />
        </div>
        <h5 className="cardheading">Minimum fuss</h5>
        <p>All recipes are designed to make eating healthy quick and easy.</p>
      </div>

      <div className="card">
        <div className="cardlogos">
          <img src="https://www.freeiconspng.com/uploads/filter-icon-32.png" alt="carrotlogo" />
        </div>
        <h5 className="cardheading">Search in seconds</h5>
        <p>
          Filter by name or ingredient and jump straight to the recipe you need.
        </p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h1 className="heading">
            <b>
              <span>Healthy</span> meals, Zero fuss
            </b>
          </h1>
          <p>
            Discover eight quick, whole-food recipes you can cook tonight —
            <br /> no processed junk, no guesswork.
          </p>
          <Link to="/recipe">
            <button className="headerbutton">Start Exploring</button>
          </Link>
        </div>

        <div className="hero-image">
          <img
            className="headerimage"
            src="https://thumbs.dreamstime.com/b/aspiring-chefs-training-professional-cooking-class-chef-institute-kitchen-learning-culinary-skills-fresh-ingredients-393943457.jpg"
            alt="cookingimage"
          />
        </div>
      </div>

      {/* Features Section */}
      <section className="featurelist">
        <h1 className="cardtitle">What you'll get</h1>
        <Headercards />
      </section>
    </div>
  );
}

export default Header;
