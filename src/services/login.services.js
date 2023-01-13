const { User } = require('../models');
const { tokenCreation } = require('../auth/operationsJWT');

const loginUser = async (email) => {
    const user = await User.findOne({ where: { email } });
    if (user) {
        const token = tokenCreation({ email });
        return token;
    }
    return { message: 'Invalid fields' };
};

module.exports = {
    loginUser,
};
