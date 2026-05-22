import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {recipe.strMeal}
        </h2>

        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Category:</span>{" "}
          {recipe.strCategory}
        </p>

        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Area:</span>{" "}
          {recipe.strArea}
        </p>

        <Link
          to={`/recipe-detail/${recipe.idMeal}`}
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;