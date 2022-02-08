'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
      static associate(models) {

        category.belongsToMany(models.task, {
            as: "task",
            through: {
                model: 'taskcategory',
                as: 'taskcategory'
            },
            foreignKey: 'idTask'
        });

        category.hasMany(models.taskcategory, {
            as: 'taskcategory',
            foreignKey: {
                name: 'idCategory'
            }
        });

    }
  };
  category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};