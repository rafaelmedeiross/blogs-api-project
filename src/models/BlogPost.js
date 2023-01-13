const BlogPost = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },      
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      published: DataTypes.DATE, 
      updated: DataTypes.DATE,    
    });
      return BlogPost;
  };

//   BlogPost.associate = (models) => {
//     BlogPost.belongsTo(models.User,
//      { foreignKey: 'id', as: 'user' });
//  };
  
  module.exports = BlogPost;
  