/**
 * Create a meal popup with meal information.
 */

const createMealPopup = (meal) => {
  // Create the popup container
  const popup = document.createElement('div');
  popup.id = 'meal-popup';

  // Create the close button
  const closeButton = document.createElement('div');
  closeButton.id = 'close-button';
  closeButton.innerHTML = '<i class="fa-solid fa-circle-xmark fa-2x"></i>';
  closeButton.addEventListener('click', () => {
    // Remove the popup when the close button is clicked
    popup.remove();
  });
  popup.appendChild(closeButton);

  // Create the thumbnail
  const thumbnail = document.createElement('img');
  thumbnail.src = meal.strMealThumb;
  popup.appendChild(thumbnail);

  // Create the title
  const title = document.createElement('h2');
  title.innerText = meal.strMeal;
  popup.appendChild(title);

  // Create the info container
  const infoContainer = document.createElement('ul');
  infoContainer.id = 'info-container';
  popup.appendChild(infoContainer);

  // Create the category item
  const category = document.createElement('li');
  category.innerText = `Category: ${meal.strCategory}`;
  infoContainer.appendChild(category);

  // Create the area item
  const area = document.createElement('li');
  area.innerText = `Area: ${meal.strArea}`;
  infoContainer.appendChild(area);

  // Create the tags item
  const tags = document.createElement('li');
  tags.innerText = `Tags: ${meal.strTags}`;
  infoContainer.appendChild(tags);

  // Create the video item
  const video = document.createElement('li');
  infoContainer.appendChild(video);

  // Create the video link
  const videoLink = document.createElement('a');
  videoLink.innerText = 'View video recipe';
  videoLink.href = meal.strYoutube;
  videoLink.target = '_blank';
  video.appendChild(videoLink);

  // Add the popup to the body
  document.body.appendChild(popup);
};

export default createMealPopup;