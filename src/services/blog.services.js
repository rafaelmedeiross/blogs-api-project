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

const getBlogPosts = async (token) => {
    if (!token) return { message: 'Token not found' };
    const { message } = tokenValidation(token);
    if (message) return { message };
    const blogPosts = await BlogPost.findAll({
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
        { model: Category, as: 'categories', through: { attributes: [] },
        }],
    });
     // console.log(blogPosts);
    return blogPosts;
};

const getBlogPostById = async (token, id) => {
    if (!token) return { message: 'Token not found' };
    const { message } = tokenValidation(token);
    if (message) return { message1: message };
    const blogPostById = await BlogPost.findOne({ 
        where: { id },
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
        { model: Category, as: 'categories', through: { attributes: [] },
        }],
    });
    if (!blogPostById) return { message: 'Post does not exist' };
    return blogPostById;
    };

module.exports = {
    postBlogPost,
    getBlogPosts,
    getBlogPostById,
};
