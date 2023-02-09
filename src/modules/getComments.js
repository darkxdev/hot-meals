const getComments = async (appId, itemId) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${itemId}`);
  const comments = await response.json();
  return comments;
};

export default getComments;