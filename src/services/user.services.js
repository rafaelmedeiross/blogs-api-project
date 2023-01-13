const { User } = require('../models');
const { tokenCreation } = require('../auth/operationsJWT');

const postUser = async (req) => {
    const { email } = req;
    const user = await User.findOne({ where: { email } });
    // console.log(user);
    if (user) {
        return { message: 'User already registered' };
      } 
    await User.create(req);
    const token = tokenCreation({ email });
    return token;
  };

  module.exports = {
    postUser,
};
