const { User } = require('../models');
const { tokenCreation, tokenValidation } = require('../auth/operationsJWT');

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

  const getUsers = async (token) => {
    if (!token) {
        return { message: 'Token not found' };
      }
    const { message } = tokenValidation(token);
    if (message) return { message };
    const users = await User.findAll();
    return users;
    // console.log(user);
    // if (user) {
    //     return { message: 'User already registered' };
    //   } 
    // await User.create(req);
    // const token = tokenCreation({ email });
    // return token;
  };

  module.exports = {
    postUser,
    getUsers,
};
