const renderMeals = (data = []) => {
  const main = document.querySelector('main');
  const section = document.createElement('section');
  section.classList.add('main-section');
  const mapped = data.map((data) => (
    `
      <article class="meal-card">
        <figure>
          <img src="${data?.strMealThumb}/preview" alt="${data?.strMeal}" class="card-img" />
        </figure>
        <div class="card-meta">
          <span class="title">${data?.strMeal}</span>
          <div class="likes"><i class="fa-solid fa-heart"></i><span>5 Likes</span></div>
        </div>
        <button type="button" class="btn btn-comments">Comments</button>
        <button type="button" class="btn btn-reservations">Reservations</button>
      </article>
    `
  ));

  section.innerHTML = mapped.join(' ');
  main.appendChild(section);
};

export default renderMeals;