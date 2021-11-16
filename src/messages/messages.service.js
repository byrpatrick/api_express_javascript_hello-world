const getPublicMessage = () => {
  return {
    text: "The API doesn't require an access token to share this message.",
  };
};

const getProtectedMessage = () => {
  return {
    text: "The API successfully validated your access token.",
  };
};

const getAdminMessage = () => {
  return {
    text: "The API successfully recognized you as an admin.",
  };
};

module.exports = {
  getPublicMessage,
  getProtectedMessage,
  getAdminMessage,
};
