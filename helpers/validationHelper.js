const validateResponse = (error) => {
  const errorMessages = error.details.map((detail) =>
    detail.message.replace(/["]/g, "")
  );

  return errorMessages;
};

module.exports = { validateResponse };
