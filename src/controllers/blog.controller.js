const blogService = require('../services/blog.services');

const postBlogPost = async (req, res) => {
  const token = req.header('Authorization');
  const { body } = req;

  const feedback = await blogService.postBlogPost(body, token);
  if (!token) return res.status(401).json(feedback);
  if (feedback.message) return res.status(401).json(feedback);
  if (feedback.message1) return res.status(400).json({ message: feedback.message1 });
  return res.status(201).json(feedback);
};

const getBlogPosts = async (req, res) => {
    const token = req.header('Authorization');
    const feedback = await blogService.getBlogPosts(token);
    if (!token) return res.status(401).json(feedback);
    if (feedback.message) return res.status(401).json(feedback);
    return res.status(200).json(feedback);
  };

const getBlogPostById = async (req, res) => {
    const { id } = req.params;
    const token = req.header('Authorization');
    const feedback = await blogService.getBlogPostById(token, id);
    if (!token) return res.status(401).json(feedback);
    if (feedback.message1) return res.status(401).json({ message: feedback.message1 });
    if (feedback.message) return res.status(404).json(feedback);
    return res.status(200).json(feedback);
  };
 const updateBlogPost = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const token = req.header('Authorization');
  const feedback = await blogService.updateBlogPost(token, body, id);
  if (!token) return res.status(401).json(feedback);
  if (feedback.message) return res.status(401).json(feedback);
  if (feedback.message1) return res.status(401).json({ message: feedback.message1 });
  if (feedback.message2) return res.status(401).json({ message: feedback.message2 });
  return res.status(200).json(feedback);
};

// const deleteUser = async (req, res) => {
//   const token = req.header('Authorization');
//   console.log(token);
//   const feedback = await userService.deleteUser(token);
//   if (!token) return res.status(401).json(feedback);
//   if (feedback.message) return res.status(401).json(feedback);
//   return res.status(204).end();
// };

module.exports = {
    postBlogPost,
    getBlogPosts,
    getBlogPostById,
    updateBlogPost,
};