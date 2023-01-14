const verifier = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    const message1 = 'Some required fields are missing';
    // const message2 = 'one or more "categoryIds" not found';
    const checker = [title, content, categoryIds].some((a) => a === undefined);
    if (checker) {
        return res.status(400).json({ message: message1 });
    }
    next();
  };
  
  module.exports = {
    verifier,
  };
