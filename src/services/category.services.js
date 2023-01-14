const { Category } = require('../models');
const { tokenValidation } = require('../auth/operationsJWT');

const postCategory = async (token, body) => {
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

const getCategories = async (token) => {
    if (!token) {
        return { message: 'Token not found' };
    }
    const { message } = tokenValidation(token);
    if (message) return { message };
    const categories = await Category.findAll();
    return categories;
};

module.exports = {
    postCategory,
    getCategories,
};
