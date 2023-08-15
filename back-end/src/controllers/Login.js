require('dotenv').config({path:'settings.env'});
const jwt_decode = require('jwt-decode');
const LANG = process.env.LANGUAGE;
const Usuario = require('../models/Usuarios');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET

module.exports = {
  async login(req, res){
    const { 
      registro_usuario,
      senha_usuario,
    } = req.body;

    try{
      const auth = await Usuario.findOne({ 
        where: { 
          registro_usuario: registro_usuario, 
          senha_usuario: senha_usuario
        },
        include: [
          { association: 'setor'},
          { association: 'cargo'}
        ]
      });
      
      if(auth === null){
        switch (LANG){
          case 'PT':
            return res.status(401).json({ error: "Registro ou Senha Incorretos"});
          case 'EN':
            return res.status(401).json({ error: "Incorrect Registration or Password"}).end();
          case 'ES':
            return res.status(401).json({ error: "Registro o contraseña incorrectos"}).end();
          case 'IT':
            return res.status(401).json({ error: "Registrazione o Password Errate"}).end();
        }
      } 
      const token = jwt.sign({userId: registro_usuario}, SECRET, { expiresIn: 60 * 30}); //3600
      const dados = JSON.parse(`{"setor":${auth.setor.id}, "cargo":${auth.cargo.id}, "token":"${token}"}`)
      return res.status(200).json(dados);
    }catch(error){
      switch (LANG){
        case 'PT':
          return res.status(500).json({ error: "Falha na Busca"});
        case 'EN':
          return res.status(500).json({ error: "Search Failed"}).end();
        case 'ES':
          return res.status(500).json({ error: "Búsqueda fallida"}).end();
        case 'IT':
          return res.status(500).json({ error: "Ricerca fallita"}).end();
      }
    }
  },

  async validationUser(req, res){
    const {token} = req.body
    try{
      jwt.verify(token, SECRET)
    }catch(error){
      switch (LANG){
        case 'PT':
          return res.status(401).json({ error: "Erro de Autenticação"}).end();
        case 'EN':
          return res.status(401).json({ error: "Authentication Error"}).end();
        case 'ES':
          return res.status(401).json({ error: "Error de Autenticación"}).end();
        case 'IT':
          return res.status(401).json({ error: "Errore di Autenticazione"}).end();
      }   
    }
    const decoded = jwt_decode(token);
    const id = decoded.userId

    try{
      const auth = await Usuario.findOne({ 
        where: { registro_usuario: id}
      });
      
      if(auth === null){
        switch (LANG){
          case 'PT':
            return res.status(401).json({ error: "Registro ou Senha Incorretos"});
          case 'EN':
            return res.status(401).json({ error: "Incorrect Registration or Password"}).end();
          case 'ES':
            return res.status(401).json({ error: "Registro o contraseña incorrectos"}).end();
          case 'IT':
            return res.status(401).json({ error: "Registrazione o Password Errate"}).end();
        }
      } 
      const dados = JSON.parse(`{"setor":${auth.setor_usuario}, "cargo":${auth.cargo_usuario}, "token":"${token}"}`)
      return res.status(200).json(dados);
    }catch(error){
      switch (LANG){
        case 'PT':
          return res.status(500).json({ error: "Falha na Busca"});
        case 'EN':
          return res.status(500).json({ error: "Search Failed"}).end();
        case 'ES':
          return res.status(500).json({ error: "Búsqueda fallida"}).end();
        case 'IT':
          return res.status(500).json({ error: "Ricerca fallita"}).end();
      }
    }
  }  
}