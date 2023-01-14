const { Category } = require('../models');
const { tokenValidation } = require('../auth/operationsJWT');

const postCategory = async (token, body) => {
    // const category = await User.findOne({ where: { name } });
    // console.log(user);
    const { name } = body;
    if (!token) {
        return { message: 'Token not found' };
    }
    const { message } = tokenValidation(token);
    if (message) return { message };
    await Category.create(body);
    const category = await Category.findOne({ where: { name } });
    return category;
};

module.exports = {
    postCategory,
};
