const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('./sqlite.db');
const favori = sequelize.define('favori', {
    id_utilisateur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_entrainement: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'favori',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_utilisateur" },
          { name: "id_entrainement" },
        ]
      },
    ]
  });

module.exports = favori
