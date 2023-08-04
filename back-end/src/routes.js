const express = require('express');

const Cargos = require('./controllers/Cargo');
const Setores = require('./controllers/Setores');
const Usuarios = require('./controllers/Usuarios');
const Login = require('./controllers/Login');
const Token = require('./auth/Authenticator');

const routes = express.Router();

routes.get('/cargos', Token, Cargos.buscarTodos);
routes.get('/cargos/:id_cargo', Cargos.buscarUmCargo);
routes.post('/cargos', Cargos.criarCargo);

routes.get('/setores', Setores.buscarTodos);
routes.get('/setores/:id_setor', Setores.buscarUmSetor);
routes.post('/setores', Setores.criarSetor);

routes.get('/usuarios', Usuarios.buscarTodos);
routes.get('/usuarios/:registro_usuario', Usuarios.buscarUmUsuario);
routes.post('/usuarios', Usuarios.criarUsuario);

routes.post('/auth', Login.login);

module.exports= routes;