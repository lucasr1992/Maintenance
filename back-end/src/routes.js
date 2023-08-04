const express = require('express');

const Cargos = require('./controllers/Cargo');
const Setores = require('./controllers/Setores');
const Usuarios = require('./controllers/Usuarios');


const routes = express.Router();

routes.get('/cargos', Cargos.buscarTodos);
routes.get('/cargos/:id_cargo', Cargos.buscarUmCargo);
routes.post('/cargos', Cargos.criarCargo);

routes.get('/setores', Setores.buscarTodos);
routes.get('/setores/:id_setor', Setores.buscarUmSetor);
routes.post('/setores', Setores.criarSetor);

routes.get('/usuarios', Usuarios.buscarTodos);
routes.get('/usuarios/:registro_usuario', Usuarios.buscarUmUsuario);
routes.post('/usuarios', Usuarios.criarUsuario);

module.exports= routes;