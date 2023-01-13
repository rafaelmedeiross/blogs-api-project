const Category = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },      
      name: DataTypes.STRING,
    });
      return Category;
  };

//   Category.associate = (models) => {
//     Category.hasOne(models.PostCategory,
//      { foreignKey: 'category_id', as: 'postcategory' });
//  };
  
  module.exports = Category;
  