require('dotenv').config({path:'settings.env'});
const Cargo = require('../models/Cargos');
const Setor = require('../models/Setores');
const Usuario = require('../models/Usuarios');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET

module.exports = {
  async criarUsuario(req, res){
    const { 
      registro_usuario,
      nome_usuario,
      senha_usuario,
      email_usuario,
      celular_usuario,
      setor_usuario,
      cargo_usuario,
      status, 
    } = req.body;

    try{
      const setor = await Setor.findByPk(setor_usuario)
    }catch(err){
      return res.status(400).json({ error: 'Setor não Encontrado' });
    }

    try{
      const cargo = await Cargo.findByPk(cargo_usuario)
    }catch(err){
      return res.status(400).json({ error: 'Cargo não Encontrado' });
    }  
    
    try{
      const usuario = await Usuario.create({
        registro_usuario,
        nome_usuario,
        senha_usuario,
        email_usuario,
        celular_usuario,
        setor_usuario,
        cargo_usuario,
        status,
      });
  
      return res.status(200).json(usuario);
    }catch(error){
      return res.status(500).json({ error: "Erro no Cadastro"});
    }
  },

  async buscarTodos(req, res){
    try{
      const usuarios = await Usuario.findAll();
      return res.status(200).json(usuarios);
    }catch(error){
      return res.status(500).json({ error: "Erro de Conexão"});
    }   
  },


  async buscarUmUsuario(req, res){
    const { registro_usuario } = req.params;
    if(!registro_usuario){
      return res.status(422).json({ error: "Necessario Registro do Usuario para Pesquisa"});
    }

    try{
      const usuario = await Usuario.findOne({ where: { registro_usuario: registro_usuario}});
      return res.status(200).json(usuario);
    }catch(error){
      return res.status(400).json({ error: "Usuario não Encontrado"});
    } 
  }
  
}