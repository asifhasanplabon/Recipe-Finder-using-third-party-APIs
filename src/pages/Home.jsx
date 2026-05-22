import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import { searchRecipes } from "../services/recipeApi";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError("Please enter a recipe name.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await searchRecipes(searchTerm);

      if (data.length === 0) {
        setError("No recipes found.");
      }

      setRecipes(data);
    } catch (err) {
      setError("Failed to fetch recipes.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />

        {loading && (
          <div className="text-center mt-10">
            <p className="text-lg font-medium text-gray-600">
              Loading recipes...
            </p>
          </div>
        )}

        {error && (
          <div className="text-center mt-6">
            <p className="text-red-500 font-medium">{error}</p>
          </div>
        )}

        {!loading && recipes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
              />
            ))}
          </div>
        )}

        {!loading &&
          !error &&
          recipes.length === 0 && (
            <div className="text-center mt-16">
              <h2 className="text-2xl font-semibold text-gray-700">
                Search Your Favorite Recipe 🍽️
              </h2>

              <p className="text-gray-500 mt-2">
                Enter a recipe name above and start exploring delicious meals.
              </p>
            </div>
          )}
      </main>
    </>
  );
};

export default Home;