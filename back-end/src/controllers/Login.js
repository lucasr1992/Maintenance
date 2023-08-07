require('dotenv').config({path:'settings.env'});
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
      const auth = await Usuario.findOne({ where: { 
        registro_usuario: registro_usuario, 
        senha_usuario: senha_usuario
      }});
      const token = jwt.sign({userId: registro_usuario}, SECRET, { expiresIn: 180});
      return res.status(200).json({auth: true, token});
    }catch(error){
      return res.status(400).json({ error: "Registro ou Senha Incorretos"});
    }
  }
}