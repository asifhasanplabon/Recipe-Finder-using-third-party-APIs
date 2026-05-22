import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getRecipeById } from "../services/recipeApi";

const RecipeDetails = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getRecipeById(id);

        if (!data) {
          setError("Recipe not found.");
          return;
        }

        setRecipe(data);
      } catch (err) {
        setError("Failed to fetch recipe details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  const ingredients = [];

  if (recipe) {
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];

      if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-xl font-semibold">
          Loading recipe...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center gap-4">
        <p className="text-red-500 text-xl">{error}</p>

        <Link
          to="/"
          className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600"
        >
          Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Link
        to="/"
        className="inline-block mb-6 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
      >
        ← Back
      </Link>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full max-w-md object-cover rounded-xl shadow-md"
        />

        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">
            {recipe.strMeal}
          </h1>

          <div className="flex flex-wrap gap-4 mb-6">
            <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full">
              {recipe.strCategory}
            </span>

            <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full">
              {recipe.strArea}
            </span>
          </div>

          <h2 className="text-2xl font-semibold mb-3">
            Ingredients
          </h2>

          <ul className="list-disc pl-6 mb-8 space-y-2">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-3">
            Instructions
          </h2>

          <p className="text-gray-700 leading-8 whitespace-pre-line">
            {recipe.strInstructions}
          </p>

          {recipe.strYoutube && (
            <div className="mt-8">
              <a
                href={recipe.strYoutube}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-600"
              >
                Watch on YouTube
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;