import getComments from './getComments.js';
import displayComments from './displayComments.js';
import createCommentForm from './createCommentForm.js';
import submitComment from "./submitComment.js";

/**
 * Create a meal popup with meal information.
 */

const createMealPopup = async (meal) => {
  // Create the popup container
  const popupwrapper = document.createElement('section');
  const popup = document.createElement('div');
  popup.id = 'meal-popup';
  popupwrapper.classList.add('pop-up-wrapper');

  // Create the close button
  const closeButton = document.createElement('div');
  closeButton.id = 'close-button';
  closeButton.innerHTML = '<i class="fa-solid fa-circle-xmark fa-2x"></i>';
  closeButton.addEventListener('click', () => {
    // Remove the popup when the close button is clicked
    popupwrapper.remove();
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
  tags.innerText = `ID: ${meal.idMeal}`;
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

  // Create the comments section

  const appId = 'T2kz2KuAi806f4P5EDsm';
  // const itemId = meal.idMeal;
  const comments = await getComments(appId, '52771');

  const commentsSection = displayComments(comments);
  popup.appendChild(commentsSection);

  // Create comment form

  const commentForm = createCommentForm();
  const submitButton = commentForm.querySelector('button');

  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const nameInput = commentForm.querySelector('input');
    const messageTextArea = commentForm.querySelector('textarea');
    submitComment(appId, '52771', nameInput.value, messageTextArea.value);
  });

  popup.appendChild(commentForm);

  // Add the popup to the body
  popupwrapper.appendChild(popup);
  document.body.appendChild(popupwrapper);
};

export default createMealPopup;