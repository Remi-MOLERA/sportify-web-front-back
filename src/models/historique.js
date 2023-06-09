const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('./sqlite.db');
const historique = sequelize.define('historique', {
    id_utilisateur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_entrainement: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Entrainment_Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'historique',
    timestamps: false,
    /*
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
    */
  });

module.exports = historique
