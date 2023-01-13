const loginService = require('../services/user.services');

const postUser = async (req, res) => {
  const feedback = await loginService.postUser(req.body);
  if (typeof (feedback) !== 'string') return res.status(409).json(feedback);
  return res.status(201).json({ token: feedback });
};

module.exports = {
    postUser,
};