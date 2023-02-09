const commentsCounter = (commentsSection) => {

  const commentsItems = commentsSection.querySelectorAll('li');
  return commentsItems.length;
}

export default commentsCounter;