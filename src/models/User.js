const User = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: DataTypes.INTEGER,
      display_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,      
    });
      return User;
  };

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
     { foreignKey: 'user_id', as: 'blogPost' });
 };
  
  module.exports = User;
