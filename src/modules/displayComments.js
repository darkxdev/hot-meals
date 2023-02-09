const displayComments = (comments) => {
  const commentsSection = document.createElement('div');
  commentsSection.id = 'comments-section';
  const header = document.createElement('h2');
  header.textContent = 'Comments';
  commentsSection.appendChild(header);

  const list = document.createElement('ul');
  comments.forEach((comment) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
    list.appendChild(listItem);
  });
  commentsSection.appendChild(list);
  // popup.appendChild(commentsSection);

  return commentsSection;
};

export default displayComments;