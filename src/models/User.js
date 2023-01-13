const User = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },      
      display_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,      
    }, {
      timestamps: false, 
      tablename: 'users',
      underscored: true,
    });
      return User;
  };

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
     { foreignKey: 'user_id', as: 'blogPost' });
 };
  
  module.exports = User;
