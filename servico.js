const Sequelize = require('sequelize');

const database = require('./db');

const Servico = database.define('Servico', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Descrição: {
        type : Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Servico;