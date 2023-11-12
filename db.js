const Sequelize = require('sequelize');

const salaoSequelize = new Sequelize ('dbSalao', 'root', '123456', 
{
    dialect:'mysql', host: 'localhost'
});


module.exports = salaoSequelize;