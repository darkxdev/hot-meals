/**
 * Get meal information by name using the MealDB API.
 */

const baseMealByNameURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const getMealByName = async (mealName) => {
  // Fetch meal information from the API
  const response = await fetch(`${baseMealByNameURL}${mealName}`);
  const data = await response.json();

  // Return the first meal from the API response
  return data.meals[0];
};

export default getMealByName;