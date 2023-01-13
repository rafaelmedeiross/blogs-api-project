const verifier = (req, res, next) => {
    const { email, password } = req.body;
    const message1 = 'Some required fields are missing';
    if (!email || !password) return res.status(400).json({ message: message1 });
    next();
  };
  
  module.exports = {
    verifier,
  };
