const { Category, BlogPost, User, PostCategory } = require('../models');
const { tokenValidation } = require('../auth/operationsJWT');

const postBlogPost = async (req, token) => {
    const { title, content, categoryIds } = req;
    if (!token) return { message: 'Token not found' };
    const { message, decoded } = tokenValidation(token);
    if (message) return { message };
    const { email } = decoded;
    const categories = await Category.findAll();
    const categoriesIdValidation = (categoryIds.every((id, k) => categories[k].id === id));
    if (!categoriesIdValidation) return { message1: 'one or more "categoryIds" not found' };
        const user = await User.findOne({ where: { email } });
    await BlogPost.create({ title, content, userId: user.id }); 
    const postedBlogPost = await BlogPost.findOne({ where: { content } });
    const postedCategories = categoryIds
    .map((categoryId) => ({ categoryId, postId: postedBlogPost.id }));
    await PostCategory.bulkCreate(postedCategories);
    return postedBlogPost;
};

// const getUsers = async (token) => {
//     if (!token) {
//         return { message: 'Token not found' };
//     }
//     const { message } = tokenValidation(token);
//     if (message) return { message };
//     const users = await User.findAll();
//     const mappedUsers = users
//     .map(({ id, displayName, email, image }) => ({ id, displayName, email, image }));
//     console.log(mappedUsers.displayName);
//     return mappedUsers;
// };

// const getUserById = async (token, id) => {
//     if (!token) {
//         return { message: 'Token not found' };
//     }
//     const { message } = tokenValidation(token);
//     if (message) return { message1: message };
//     const userById = await User.findOne({ where: { id } });
//     if (!userById) return { message: 'User does not exist' };
//     const { displayName, email, image } = userById;
//     if (userById) {
//         return { id: parseInt(id, 10), displayName, email, image };
//     }
// };

// const deleteUser = async (token) => {
//     if (!token) {
//         return { message: 'Token not found' };
//     }
//     const { message, decoded } = tokenValidation(token);
//     if (message) return { message };
//     const { email } = decoded;
//     console.log(email);
//     const deleted = await User.findOne({ where: { email } });
//     const { id } = deleted;
//     await User.destroy({ where: { id } });
//     return 'deleted';
// };

module.exports = {
    postBlogPost,
};
