const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('./sqlite.db');
const entrainment = sequelize.define('favori', {
    id_entrainement: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Difficulte: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    GroupeMusculaire: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'entrainement',
    timestamps: false
  });

module.exports = entrainment
