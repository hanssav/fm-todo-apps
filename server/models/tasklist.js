'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class taskList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
      static associate(models) {

          taskList.belongsTo(models.task, {
              as: 'task',
              foreignKey: {
                  name: 'idTask'
              }
          })
    }
  };
  taskList.init({
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    idTask: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'taskList',
  });
  return taskList;
};