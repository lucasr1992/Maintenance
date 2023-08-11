const express = require('express');

const Cargos = require('./controllers/Cargo');
const Setores = require('./controllers/Setores');
const Usuarios = require('./controllers/Usuarios');
const Login = require('./controllers/Login');
const Token = require('./auth/Authenticator');

const routes = express.Router();

routes.get('/cargos', Token, Cargos.buscarTodos);
routes.get('/cargos/:id_cargo', Token, Cargos.buscarUmCargo);
routes.post('/cargos', Token, Cargos.criarCargo);

routes.get('/setores', Token, Setores.buscarTodos);
routes.get('/setores/:id_setor', Token, Setores.buscarUmSetor);
routes.post('/setores', Token, Setores.criarSetor);

routes.get('/usuarios', Token, Usuarios.buscarTodos);
routes.get('/usuarios/:registro_usuario', Token, Usuarios.buscarUmUsuario);
routes.post('/usuarios', Token, Usuarios.criarUsuario);

routes.post('/auth', Login.login);
routes.post('/validation', Login.validationUser);

module.exports= routes;