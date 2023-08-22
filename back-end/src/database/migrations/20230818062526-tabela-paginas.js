'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('paginas',{
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      
      id_pagina:{
        type: Sequelize.INTEGER,
        allowNull: false
      },

      path:{
        type: Sequelize.STRING,
        allowNull: false
      },

      title:{
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('paginas');
  }
};
