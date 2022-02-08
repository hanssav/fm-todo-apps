'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('tasks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.STRING
            },
            idUser: {
                type: Sequelize.INTEGER,
                references: {
                    model: "users",
                    key: "id"
                }
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
        }
    )},
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tasks');
  }
};