const Category = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },      
      name: DataTypes.STRING,
    },{
      timestamps: false, 
      underscored: true,
    });
      return Category;
  };

  Category.associate = (models) => {
    Category.hasOne(models.PostCategory,
     { foreignKey: 'category_id', as: 'posts_categories' });
 };
  
  module.exports = Category;
  