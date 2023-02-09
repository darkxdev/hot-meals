const getComments = async (appId, itemId) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${itemId}`);
    const comments = await response.json();
    return Array.isArray(comments) ? comments : [];
  } catch (error) {
    return [];
  }
};

export default getComments;