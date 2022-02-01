'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class buyer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  buyer.init({
    noOfCus: DataTypes.INTEGER,
    NoOfBooks: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'buyer',
  });
  return buyer;
};