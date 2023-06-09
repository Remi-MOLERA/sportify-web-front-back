const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('./sqlite.db');
const role = sequelize.define('role', {
    id_role: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Role: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "USER"
    }
  }, {
    sequelize,
    tableName: 'role',
    timestamps: false
  });

module.exports = role

