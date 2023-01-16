const BlogPost = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },  
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      published: DataTypes.DATE, 
      updated: DataTypes.DATE,    
    }, {
      timestamps: false, 
      underscored: true,
    });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as: 'User', foreignKey: 'userId'
    })
  };
      return BlogPost;
  };


  module.exports = BlogPost;
  