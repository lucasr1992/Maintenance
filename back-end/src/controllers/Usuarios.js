const Cargo = require('../models/Cargos');
const Setor = require('../models/Setores');
const Usuario = require('../models/Usuarios');

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
  },

  async buscarTodos(req, res){
    const usuarios = await Usuario.findAll({
      include:{
        association: 'setores',
        association: 'cargos'
      }
    });
    return res.status(200).json(usuarios);
  },


  async buscarUmUsuario(req, res){
    const { registro_usuario } = req.params;
    
    const usuario = await Usuario.findByPk(registro_usuario, {
      include:{
        association: 'setores',
        association: 'cargos'
      }
    });
    return res.status(200).json(usuario);
  }

  
}