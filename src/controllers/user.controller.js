const userService = require('../services/user.services');

const postUser = async (req, res) => {
  const feedback = await userService.postUser(req.body);
  if (typeof (feedback) !== 'string') return res.status(409).json(feedback);
  return res.status(201).json({ token: feedback });
};

const getUsers = async (req, res) => {
    const token = req.header('Authorization');
    const { authorization } = req.headers;
    console.log(authorization);

    const feedback = await userService.getUsers(token);
    if (!token) return res.status(401).json(feedback);
    if (feedback.message) return res.status(401).json(feedback);
    return res.status(200).json({ feedback });
  };

module.exports = {
    postUser,
    getUsers,
};