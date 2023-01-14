const BlogPost = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },  
      user_id: { type: DataTypes.INTEGER, foreignKey: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      published: DataTypes.DATE, 
      updated: DataTypes.DATE,    
    }, {
      timestamps: false, 
      // underscored: true,
    });
      return BlogPost;
  };

//   BlogPost.associate = (models) => {
//     BlogPost.belongsTo(models.User,
//      { foreignKey: 'user_id', as: 'users' });
//  };
  
  module.exports = BlogPost;
  