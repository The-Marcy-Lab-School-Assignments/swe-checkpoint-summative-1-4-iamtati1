/**
 * Fetch Helpers
 *
 * Pure async functions for fetching recipe data from the DummyJSON API.
 * These functions should ONLY fetch data — no DOM manipulation here.
 *
 * API Base URL: https://dummyjson.com/recipes
 *
 * Useful endpoints:
 *   GET /recipes?limit=30          → { recipes: [...], total, skip, limit }
 *   GET /recipes/search?q={query}  → { recipes: [...], total, skip, limit }
 *
 * All functions should return { data, error } to separate success/failure:
 *   - On success: { data: <result>, error: null }
 *   - On failure: { data: null, error: <error message string> }
 */

// getAllRecipes() — fetches all recipes from the API.
// On success, data should be an array of recipe objects.
// On failure, data should be null and error should be a message string.
export const getAllRecipes = async () => {
  const response = await fetch(`https://dummyjson.com/recipes?limit=30`);
  const data = await response.json();
  return data;
  const handleResolvedOrRejectedPromise = (promise) => {
    return promise
      .then((message) => {
        console.log(message);
        return message.toUpperCase();
      })
      .catch((error) => {
        console.error(`There is an error ${error.message}`);
        return null;
      });
  };
  console.log(getAllRecipes);


  // searchRecipes(query) — fetches recipes matching the search query.
  // On success, data should be an array of matching recipe objects.
  // On failure, data should be null and error should be a message string.
  export const searchRecipes = async (query) => {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`); // or :id
    const data = await response.json();
    return data;
    const handleResolvedOrRejectedPromise = (promise) => {
      return promise
        .then((message) => {
          console.log(message);
          return message.toUpperCase();
        })
        .catch((error) => {
          console.error(`There is an error ${error.message}`);
          return null;
        });
    };
    console.log(searchRecipes);
  }
};
// Allows for searching recipes
export const searchRecipes = async (query) => {
  const response = await fetch(`https://dummyjson.com/recipes/search?q=:query`);
  const data = await response.json();
  return data;
  const handleResolvedOrRejectedPromise = (promise) => {
    return promise
      .then((message) => {
        console.log(message);
        return message.toUpperCase();
      })
      .catch((error) => {
        console.error(`There is an error ${error.message}`);
        return null;
      });
  };
  console.log(searchRecipes);
};

