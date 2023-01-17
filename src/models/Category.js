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
      modelName: 'categories',
    });
      return Category;
  };
  
  module.exports = Category;
  