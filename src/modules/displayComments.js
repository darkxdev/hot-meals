import commentsCounter from "./commentsCounter.js";

const displayComments = (comments) => {
  const commentsSection = document.createElement('div');
  commentsSection.id = 'comments-section';
  const header = document.createElement('h3');
  commentsSection.appendChild(header);

  const list = document.createElement('ul');
  comments?.forEach((comment) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
    list.appendChild(listItem);
  });
  commentsSection.appendChild(list);

  const commentsNumber = commentsCounter(commentsSection);
  header.textContent = `Comments (${commentsNumber})`;

  return commentsSection;
};

export default displayComments;