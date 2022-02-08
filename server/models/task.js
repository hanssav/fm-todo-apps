'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        task.belongsTo(models.user, {
            as: 'user',
            foreignKey: {
                name: 'idUser'
            }
        });

        task.hasMany(models.taskList, {
            as: 'taskList',
            foreignKey: {
                name: 'idTask'
            }
        });

        task.hasMany(models.taskcategory, {
            as: 'taskcategory',
            foreignKey: {
                name: 'idTask'
            }
        });

        task.belongsToMany(models.category, {
            as: 'Category',
            through: {
                model: 'Taskcategory',
                as: 'taskCategory'
            },
            foreignKey: 'idCategory'
        })

    }
  };
  task.init({
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    idUser: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'task',
  });
  return task;
};