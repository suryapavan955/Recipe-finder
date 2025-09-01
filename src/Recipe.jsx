
import './recipe.css'
import { useEffect, useState } from "react";

export function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");


   const [loading, setLoading] = useState(false); // ✅ loading state
    const [error, setError] = useState(null);

  // Function to fetch recipes by ingredient
  const fetchRecipes = async (ingredient = "chicken") => {
    try {

       setLoading(true);  // ✅ show loader
      setError(null);


      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await res.json();

      if (data.meals) {
        // Add fake prep times for sorting demo
        const mealsWithPrep = data.meals.map((meal) => ({
          ...meal,
          prepTime: Math.floor(Math.random() * 60) + 10, // 10–70 mins
        }));
        setRecipes(mealsWithPrep);
      } else {
        setRecipes([]);
      }
    } catch (err) {
      console.error("Error fetching recipes:", err);
       setError("Failed to load recipes.");
    }
     finally {
      setLoading(false); // ✅ hide loader
    }
  };

  // Default load
  useEffect(() => {
    fetchRecipes(); // loads chicken recipes by default
  }, []);

// Watch for clearing input → reload default
  useEffect(() => {
    if (searchTerm.trim() === "") {
      fetchRecipes(); // back to default when input is cleared
    }
  }, [searchTerm]);


  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      fetchRecipes(searchTerm);
    }
  };

  // Sort recipes
  const sortedRecipes = [...recipes].sort((a, b) => {
    if (sortOption === "low-high") {
      return a.prepTime - b.prepTime;
    }
    if (sortOption === "high-low") {
      return b.prepTime - a.prepTime;
    }
    return 0; // default, no sort
  });

  return (
    <div className="recipe-page">
      {/* Intro Section */}
      <section className="intro">
        <h1 className="intro-title"><span>Explore</span> our simple, healthy recipes</h1>
        <p className="intro-text">
          Discover quick, whole-food dishes that fit real-life schedules and
          taste amazing.<hr></hr> Use the search bar to find a recipe by ingredient, or
          simply scroll the list and let something delicious catch your eye.
        </p>
      </section>

      {/* Search + Filters */}
      <section className="search-bar">
        <form onSubmit={handleSearch} style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            placeholder="Enter an ingredient"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        {/* Dropdown for Sorting */}
        <select
          className="dropdown"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="default">Sort by Prep Time</option>
          <option value="low-high">Low → High</option>
          <option value="high-low">High → Low</option>
        </select>
      </section>

      {/* Recipes Grid */}
      <section className="recipes-grid">
        {loading && <div className="loader"></div>} {/* ✅ Spinner */}
        {error && <p className="error">{error}</p>}
        { !loading && !error && sortedRecipes.length > 0 ? (
          sortedRecipes.map((recipe) => (
            <div key={recipe.idMeal} className="recipe-card">
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="recipe-img"
              />
              <h3 className="recipe-title">{recipe.strMeal}</h3>
              <p className="prep-time">Prep Time: {recipe.prepTime} mins</p>
              <button className="view-btn">View Details</button>
            </div>
          ))
        ) : (
          // <p>No recipes found. Try another ingredient.</p>
           !loading && !error && <p>No recipes found. Try another ingredient.</p>
        )}
      </section>
    </div>
  );
}
