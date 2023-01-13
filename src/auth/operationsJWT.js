const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

const tokenCreation = (payload) => jwt.sign(payload, secret, jwtConfig);

module.exports = {
    tokenCreation, 
};
