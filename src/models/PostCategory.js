const PostCategory = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      post_id: DataTypes.INTEGER,
      category_id: DataTypes.STRING,
    });
      return PostCategory;
  };

//   User.associate = (models) => {
//     Employee.hasMany(models.Blogs_posts,
//      { foreignKey: 'employeeId', as: 'addresses' });
//  };
  
  module.exports = PostCategory;
  