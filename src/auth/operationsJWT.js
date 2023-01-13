const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

const tokenCreation = (payload) => jwt.sign(payload, secret, jwtConfig);

const tokenValidation = (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    return { decoded };
  } catch (error) {
    return { message: 'Expired or invalid token' };
  }
};
 
module.exports = {
    tokenCreation, 
    tokenValidation,
};
