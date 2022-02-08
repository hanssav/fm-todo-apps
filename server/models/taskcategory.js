'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class taskcategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
      static associate(models) {
          taskcategory.belongsTo(models.task, {
              as: 'task',
              foreignKey: {
                  name: 'idTask'
              }
          });

          taskcategory.belongsTo(models.category, {
              as: 'category',
              foreignKey: {
                  name: 'idCategory'
              }
          });
        }
    };

    taskcategory.init({
        idTask: DataTypes.INTEGER,
        idCategory: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'taskcategory',
    });

    return taskcategory;
};