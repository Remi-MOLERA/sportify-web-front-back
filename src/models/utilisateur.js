const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('../database/sqlite.db');
const utilisateur = sequelize.define('utilisateur', {
    id_Utilisateur: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.CHAR(60),
        allowNull: false
    },
    id_role: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'utilisateur',
    timestamps: false
});

module.exports = utilisateur