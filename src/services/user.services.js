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
    const mappedUsers = users
    .map(({ id, displayName, email, image }) => ({ id, displayName, email, image }));
    console.log(mappedUsers.displayName);
    return mappedUsers;
};

const getUserById = async (token, id) => {
    if (!token) {
        return { message: 'Token not found' };
    }
    const { message } = tokenValidation(token);
    if (message) return { message1: message };
    const userById = await User.findOne({ where: { id } });
    if (!userById) return { message: 'User does not exist' };
    const { displayName, email, image } = userById;
    if (userById) {
        return { id: parseInt(id, 10), displayName, email, image };
    }
};

const deleteUser = async (token) => {
    if (!token) {
        return { message: 'Token not found' };
    }
    const { message, decoded } = tokenValidation(token);
    if (message) return { message };
    const { email } = decoded;
    console.log(email);
    const deleted = await User.findOne({ where: { email } });
    const { id } = deleted;
    await User.destroy({ where: { id } });
    return 'deleted';
};

module.exports = {
    postUser,
    getUsers,
    getUserById,
    deleteUser,
};
