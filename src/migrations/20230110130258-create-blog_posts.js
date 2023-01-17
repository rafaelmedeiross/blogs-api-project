'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      user_id: {
        // allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      published: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: '2011-08-01 19:58:00',
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: '2011-08-01 19:58:00',
      },
    }); 
   },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('blog_posts');
  }
};
