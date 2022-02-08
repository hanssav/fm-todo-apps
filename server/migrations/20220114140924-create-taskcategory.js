'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('taskcategories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            idTask: {
                type: Sequelize.INTEGER,
                references: {
                    model: "tasks",
                    key: "id"
                }
            },
            idCategory: {
                type: Sequelize.INTEGER,
                references: {
                    model: "categories",
                    key: "id"
                },
            },
            createdAt: {
                allowNull: false,
                defaultValue: Sequelize.fn("now"),
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                defaultValue: Sequelize.fn("now"),
                type: Sequelize.DATE
            }
        });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('taskcategories');
  }
};