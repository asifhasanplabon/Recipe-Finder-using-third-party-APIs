const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// Search recipes by name
export const searchRecipes = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search.php?s=${query}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch recipes");
    }

    const data = await response.json();

    return data.meals || [];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get recipe details by ID
export const getRecipeById = async (id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/lookup.php?i=${id}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch recipe details");
    }

    const data = await response.json();

    return data.meals?.[0] || null;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get random recipe
export const getRandomRecipe = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/random.php`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch random recipe");
    }

    const data = await response.json();

    console.log("API Response:", data);
    return data.meals?.[0] || null;
  } catch (error) {
    console.error(error);
    throw error;
  }
 
};