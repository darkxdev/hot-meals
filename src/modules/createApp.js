const createApp = async () => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/`, {
    method: 'POST'
  });
  const appId = await response.text();
  return appId;
};

export default createApp;