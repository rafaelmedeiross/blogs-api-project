const verifier = (req, res, next) => {
    const { displayName, email, password } = req.body;
    const message1 = '"email" must be a valid email';
    const message2 = '"displayName" length must be at least 8 characters long';
    const message3 = '"password" length must be at least 6 characters long';
 
    const emailValidation = () => {
        const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return emailPattern.test(email); 
    };

    console.log(emailValidation);
    if (!emailValidation()) return res.status(400).json({ message: message1 });
    if (displayName.length < 8) return res.status(400).json({ message: message2 });
    if (password.length < 6) return res.status(400).json({ message: message3 });

    next();
  };
  
  module.exports = {
    verifier,
  };
