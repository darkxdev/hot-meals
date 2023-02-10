import { getMealsByCategory } from './modules/getMeal.js';
import logo from './img/hot-meals.png';
import renderMeals from './modules/renderMeals.js';
import { getLikes } from './modules/likes.js';

const logoImg = document.querySelector('#logo');

logoImg.src = logo;

window.addEventListener('load', async () => {
  const data = await getMealsByCategory('seafood');
  const likes = await getLikes();
  renderMeals(data, likes);
});