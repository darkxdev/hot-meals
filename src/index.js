/**
 * Import necessary modules.
 */

import getMealByName, { getMealsByCategory } from './modules/getMeal.js';
import createMealPopup from './modules/createMealPopup.js';
import logo from './img/hot-meals.png';
import renderMeals from './modules/renderMeals.js';

const logoImg = document.querySelector('#logo');

logoImg.src = logo;

/**
 * Fetch meal data by name from the API and displays it in a meal popup.
 */

const btnTest = document.querySelector('#btn-test');
btnTest.addEventListener('click', () => {
  getMealByName('Arrabiata').then((meal) => {
    createMealPopup(meal);
  });
});

window.addEventListener('load', async () => {
  const data = await getMealsByCategory('seafood');
  renderMeals(data);
});
