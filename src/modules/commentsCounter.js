const commentsCounter = (commentsSection) => {
  const commentsItems = Array.from(commentsSection);
  return commentsItems.length;
}

export default commentsCounter;