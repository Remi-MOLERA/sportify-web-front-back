const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('./sqlite.db');
const contient = sequelize.define('contient', {
    id_entrainement: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_exercice: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'contient',
    timestamps: false
  });

module.exports = contient
