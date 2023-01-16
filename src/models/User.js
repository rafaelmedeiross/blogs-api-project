const User = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },      
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,      
    }, {
      timestamps: false, 
      tablename: 'users',
      underscored: true,
      // modelName: 'User',
    });
    User.associate = (models) => {
      User.hasMany(models.BlogPost, {
       as: 'BlogPost', foreignKey: 'userId',
      });
     } 
  
      return User;
  };

  
  module.exports = User;
