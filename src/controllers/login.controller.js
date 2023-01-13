const loginService = require('../services/login.services');

const loginUser = async (req, res) => {
  const feedback = await loginService.loginUser(req.body.email);
  console.log(feedback);
  if (typeof (feedback) !== 'string') return res.status(400).json(feedback);
  return res.status(200).json({ token: feedback });
};

module.exports = {
    loginUser,
};