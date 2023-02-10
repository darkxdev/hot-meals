const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'T2kz2KuAi806f4P5EDsm';

const postLike = async (itemID) => {
  const requestBody = {
    item_id: itemID,
  };

  const response = await fetch(`${baseURL}${appID}/likes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody),
  });
  const data = await response.text();

  return data;
};

const getLikes = async () => {
  try {
    const response = await fetch(`${baseURL}${appID}/likes`);
    const data = await response.json();

    return data;
  } catch (error) {
    return [];
  }
};

export { getLikes, postLike };