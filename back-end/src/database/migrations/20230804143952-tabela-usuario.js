'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios',{
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },

      registro_usuario:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      
      nome_usuario:{
        type: Sequelize.STRING,
        allowNull: false
      },

      senha_usuario:{
        type: Sequelize.STRING,
        allowNull: false
      },

      email_usuario:{
        type: Sequelize.STRING,
        allowNull: true
      },

      celular_usuario:{
        type: Sequelize.STRING,
        allowNull: true
      },

      setor_usuario:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{ model:'setores', key: 'id'},
        onUpdate:'CASCADE',
        onDelete:'RESTRICT'
      },

      cargo_usuario:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{ model:'cargos', key: 'id'},
        onUpdate:'CASCADE',
        onDelete:'RESTRICT'
      },

      status:{
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};
