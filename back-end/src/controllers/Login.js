require('dotenv').config({path:'settings.env'});
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
      const token = jwt.sign({userId: registro_usuario}, SECRET, { expiresIn: 3600});
      return res.status(200).json({setor: auth.setor.nome_setor, cargo:auth.cargo.nome_cargo, token});
    }catch(error){
      switch (LANG){
        case 'PT':
          return res.status(400).json({ error: "Registro ou Senha Incorretos"});
        case 'EN':
          return res.status(400).json({ error: "Incorrect Registration or Password"}).end();
        case 'ES':
          return res.status(400).json({ error: "Registro o contraseña incorrectos"}).end();
        case 'IT':
          return res.status(400).json({ error: "Registrazione o Password Errate"}).end();
      }
      
    }
  }
}