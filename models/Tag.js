// Import Important Parts of Sequelize Library
const { Model, DataTypes } = require('sequelize');
// Import Database connection 
const sequelize = require('../config/connection.js');

// Initialize Tag Model (table) by extending off Sequelize's Model class
class Tag extends Model {}

// Fields and Rules for Tag Model
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
