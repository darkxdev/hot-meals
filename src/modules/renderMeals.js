import getMealByName from './getMeal.js';
import createMealPopup from './createMealPopup.js';
import { postLike } from './likes.js';

const renderMeals = (data = [], likes = []) => {
  const main = document.querySelector('main');
  const section = document.createElement('section');
  section.classList.add('main-section');

  const mapped = data.map((meal) => {
    const like = likes.find((like) => like.item_id === meal.idMeal);

    return (
      `
        <article class="meal-card">
          <figure>
            <img src="${meal?.strMealThumb}" alt="${meal?.strMeal}" class="card-img" />
          </figure>
          <div class="card-meta">
            <span class="title">${meal?.strMeal}</span>
            <div class="likes"><i class="fa-solid fa-heart" id="likes"></i><span>${like ? like.likes : 0} ${like?.likes > 1 ? 'Likes' : 'Like'}</span></div>
          </div>
          <button type="button" class="btn btn-comments">Comments</button>
          <button type="button" class="btn btn-reservations">Reservations</button>
        </article>
      `
    );
  });

  section.innerHTML = mapped.join(' ');

  // Add event listener to every button with the class "btn-comments"
  const btnComments = section.querySelectorAll('.btn-comments');
  btnComments.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      getMealByName(data[index].strMeal).then((meal) => {
        createMealPopup(meal);
      });
    });
  });

  const iconLike = section.querySelectorAll('#likes');
  iconLike.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      postLike(data[index].idMeal).then(() => {
        const { nextElementSibling } = icon;
        const likesNumber = nextElementSibling.textContent.split(' ')[0];
        const newLikesNumber = Number(likesNumber) + 1;

        nextElementSibling.textContent = `${newLikesNumber} Likes`;
      });
    });
  });

  main.appendChild(section);
};

export default renderMeals;