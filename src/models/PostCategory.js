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
        foreignKey: 'categoryId', // se refere ao id de Book na tabela de `users_books`
        otherKey: 'postId', // se refere a outra chave de `users_books`
      });
      models.BlogPost.belongsToMany(models.Category, {
        as: 'Category',
        through: PostCategory,
        foreignKey: 'postId', // se refere ao id de Book na tabela de `users_books`
        otherKey: 'categoryId', // se refere a outra chave de `users_books`
      });
   };
      return PostCategory;
  };
 
  module.exports = PostCategory;
  