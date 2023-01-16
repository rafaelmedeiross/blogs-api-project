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
    // Category.hasMany(models.PostCategory, { 
    //   foreignKey: 'category_id', as: 'postCategory' 
    // });
    // Category.hasMany(models.BlogPost, {
    // as: 'BlogPost', foreignKey: 'userId',
    // });
 };
  
  module.exports = Category;
  