const loginService = require('../services/category.services');

const postCategory = async (req, res) => {
  const token = req.header('Authorization');
  const { body } = req;
  const feedback = await loginService.postCategory(token, body);
  console.log(feedback);
  if (feedback.message) return res.status(401).json(feedback);
  return res.status(201).json(feedback);
};

const getCategories = async (req, res) => {
  const token = req.header('Authorization');
  const feedback = await loginService.getCategories(token);
  if (feedback.message) return res.status(401).json(feedback);
  return res.status(200).json(feedback);
};

module.exports = {
    postCategory,
    getCategories,
};