const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Cargos = require('../models/Cargos');
const Setores = require('../models/Setores');
const Usuarios = require('../models/Usuarios');

const connection = new Sequelize(dbConfig);

//conexão dos models
Cargos.init(connection);
Setores.init(connection);
Usuarios.init(connection);

//associações
Usuarios.associate(connection.models)
Cargos.associate(connection.models)
Setores.associate(connection.models)

module.exports = connection;