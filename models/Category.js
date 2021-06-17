// Import Important Parts of Sequelize Library
const { Model, DataTypes } = require('sequelize');
// Import Database connection 
const sequelize = require('../config/connection.js');
// Initialize Category Model (table) by extending off Sequelize's Model class
class Category extends Model {}
// Fields and Rules for Category Model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
