const verifier = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    const message = 'Some required fields are missing';
    const checker = [title, content, categoryIds].some((a) => !a);
    console.log(checker);
    if (checker) {
        return res.status(400).json({ message });
    }
    next();
  };
  
  module.exports = {
    verifier,
  };
