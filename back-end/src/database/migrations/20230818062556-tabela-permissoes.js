'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('permissoes',{
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },

      id_pagina:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{ model:'paginas', key: 'id'},
        onUpdate:'CASCADE',
        onDelete:'RESTRICT'
      },

      id_cargo:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{ model:'cargos', key: 'id'},
        onUpdate:'CASCADE',
        onDelete:'RESTRICT'
      },

      id_setor:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{ model:'setores', key: 'id'},
        onUpdate:'CASCADE',
        onDelete:'RESTRICT'
      },

      leitura:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      
      escrita:{
        type: Sequelize.BOOLEAN,
        allowNull: false
      },

      edit_status:{
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('permissoes');
  }
};
