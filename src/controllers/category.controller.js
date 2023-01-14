const loginService = require('../services/category.services');

const postCategory = async (req, res) => {
  const token = req.header('Authorization');
  const { body } = req;
  const feedback = await loginService.postCategory(token, body);
  console.log(feedback);
  if (feedback.message) return res.status(401).json(feedback);
  return res.status(201).json(feedback);
};

module.exports = {
    postCategory,
};