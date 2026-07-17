// DOM Helpers
//
// Functions for reading from and writing to the DOM.
// These functions should NOT make any fetch() calls.

// renderRecipes(recipes) — clears the recipe list and renders a card for
// each recipe showing its image, name, cuisine + difficulty, and rating.
// Also updates the recipe count display.
//
// After this function runs, #recipes-list should contain one <li> per recipe:
//
//   <ul id="recipes-list">
//     <li>
//       <img src="https://..." alt="Margherita Pizza">
//       <h3>Margherita Pizza</h3>
//       <p>Italian · Easy</p>
//       <p>★ 4.6</p>
//     </li>
//     <!-- one <li> per recipe -->
//   </ul>
//
// What you'll need: document.querySelector, element.innerHTML, element.textContent,
// document.createElement, element.setAttribute, element.append, array iteration.
export const renderRecipes = (recipes) => {
  const recipe = document.querySelector("#recipes")
};

function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)

  const movieTitleAndYear = clickedLi.querySelector('h3').textContent;

  const newRecipe = document.createElement('h3');
  console.log(newRecipe);
}

const container = document.querySelector('#container');
container.append(newRecipe);

// renderError(message) — shows an error message on the page when something
// goes wrong, or hides it when the message is cleared.
//
// The #error-message element starts with the .hidden class in index.html.
// A truthy message should make it visible; a falsy message should hide it again.
//
// What you'll need: document.querySelector, element.textContent,
// element.classList.add, element.classList.remove.
export const renderError = (message) => {

  export const renderRecipes = (recipes) => {
    const recipe = document.querySelector("#error-message")
  };
  counter = count
  element.innerHTML = `count is ${counter}`
}
element.addEventListener('click', () => setCounter(counter + 1))
setCounter(0)

const movieTitleAndYear = clickedLi.querySelector('h3').textContent;

('h3').classList.add
  ('h3').classlist.remove

