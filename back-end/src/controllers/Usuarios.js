require('dotenv').config({path:'settings.env'});
const LANG = process.env.LANGUAGE;

const Cargos = require('../models/Cargos');
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

    if(!registro_usuario || !nome_usuario || !senha_usuario || !status){
      switch (LANG){
        case 'PT':
          return res.status(401).json({ error: "Registro, Nome, Senha e Status Necessários"}).end();
        case 'EN':
          return res.status(401).json({ error: "Registration, Name, Password and Status Required"}).end();
        case 'ES':
          return res.status(401).json({ error: "Registro, Nombre, Contraseña y Estado Requerido"}).end();
        case 'IT':
          return res.status(401).json({ error: "Registrazione, Nome, Password e Stato Richiesti"}).end();
      }
    }

    try{
      const setor = await Setor.findByPk(setor_usuario)
      const cargo = await Cargo.findByPk(cargo_usuario)
    }catch(err){
      switch (LANG){
        case 'PT':
          return res.status(400).json({ error: "Cargo ou Setor não Encontrado"}).end();
        case 'EN':
          return res.status(400).json({ error: "Job Title or Sector not Found"}).end();
        case 'ES':
          return res.status(400).json({ error: "Título Profesional o Sectore no Encontrado"}).end();
        case 'IT':
          return res.status(400).json({ error: "Titolo di Lavoro o Settori non Trovato"}).end();
      }
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
      switch (LANG){
        case 'PT':
          return res.status(500).json({ error: "Erro ao Cadastrar Usuário"}).end();
        case 'EN':
          return res.status(500).json({ error: "Error Registering User"}).end();
        case 'ES':
          return res.status(500).json({ error: "Error al Registrar Usuario"}).end();
        case 'IT':
          return res.status(500).json({ 
            error: "Errore Durante la Registrazione dell'utente"
          }).end();          
      }
    }
  },

  async buscarTodos(req, res){
    try{
      const usuarios = await Usuario.findAll({
        include: [
          { association: 'setor'},
          { association: 'cargo'}
        ]
      });
      return res.status(200).json(usuarios);
    }catch(error){
      switch (LANG){
        case 'PT':
          return res.status(400).json({ error: "Usuários não Encontrados"}).end();
        case 'EN':
          return res.status(400).json({ error: "Users Not Found"}).end();
        case 'ES':
          return res.status(400).json({ error: "Usuarios no Encontrados"}).end();
        case 'IT':
          return res.status(400).json({ error: "Utenti non Trovati"}).end();
      }   
    }   
  },


  async buscarUmUsuario(req, res){
    const { registro_usuario } = req.params;
    if(!registro_usuario){
      switch (LANG){
        case 'PT':
          return res.status(400).json({ error: "Registro Necessários"}).end();
        case 'EN':
          return res.status(400).json({ error: "Registration Required"}).end();
        case 'ES':
          return res.status(400).json({ error: "Se Requiere Registro"}).end();
        case 'IT':
          return res.status(400).json({ error: "Registrazione Richiesta"}).end();
      } 
    }

    try{
      const usuario = await Usuario.findOne({ 
        where: { registro_usuario: registro_usuario},
        include: [
          { association: 'setor'},
          { association: 'cargo'}
        ]
      });
      return res.status(200).json(usuario);
    }catch(error){
      switch (LANG){
        case 'PT':
          return res.status(400).json({ error: "Usuario não Encontrado"}).end();
        case 'EN':
          return res.status(400).json({ error: "User not Found"}).end();
        case 'ES':
          return res.status(400).json({ error: "Usuario no Encontrado"}).end();
        case 'IT':
          return res.status(400).json({ error: "Utente non Trovato"}).end();
      } 
    } 
  }
  
}