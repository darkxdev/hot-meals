const commentsCounter = () => {
  const commentsSection = displayComments();
  const comments = commentsSection.querySelectorAll('li');
  return comments.length;
}

export default commentsCounter;