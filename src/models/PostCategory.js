const PostCategory = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.STRING,
    }, {
      timestamps: false, 
      underscored: true,
    });
      return PostCategory;
  };

//   User.associate = (models) => {
//     Employee.hasMany(models.Blogs_posts,
//      { foreignKey: 'employeeId', as: 'addresses' });
//  };
  
  module.exports = PostCategory;
  