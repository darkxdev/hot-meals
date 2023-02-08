const displayComments = comments => {
  const commentsSection = document.createElement('div');
  const header = document.createElement('h2');
  header.textContent = 'Comments';
  commentsSection.appendChild(header);

  const list = document.createElement('ul');
  comments.forEach(comment => {
    const listItem = document.createElement('li');
    listItem.textContent = `${comment.username}: ${comment.comment}`;
    list.appendChild(listItem);
  });
  commentsSection.appendChild(list);
  popup.appendChild(commentsSection);
};

export default displayComments;