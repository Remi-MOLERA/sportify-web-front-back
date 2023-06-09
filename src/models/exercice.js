const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('./sqlite.db');
const exercice = sequelize.define('exercice', {
    id_entrainement: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Nom: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    LienGIF: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'exercice',
    timestamps: false
  });

module.exports = exercice