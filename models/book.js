'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BOOK extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BOOK.init({
    name: DataTypes.STRING,
    auother: DataTypes.STRING,
    pages: DataTypes.INTEGER,
    publishedon: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BOOK',
  });
  return BOOK;
};