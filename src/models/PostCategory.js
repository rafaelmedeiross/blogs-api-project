const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
        'PostCategory',
        {
          postId: DataTypes.INTEGER,
          categoryId: DataTypes.STRING,
        },
        {
          timestamps: false,
          underscored: true,
          tableName: 'posts_categories',
        },
  );
    PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, {
        as: 'BlogPost',
        through: PostCategory,
        foreignKey: 'categoryId', 
        otherKey: 'postId', 
      });
      models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'postId', 
        otherKey: 'categoryId',
      });
   };
      return PostCategory;
  };
 
  module.exports = PostCategory;
  