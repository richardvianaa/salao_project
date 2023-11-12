'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('servico', {
      id_servico: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true,
        allowNull: false
      },
      nome_service: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
    }
     });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('servico')
  } 
};
