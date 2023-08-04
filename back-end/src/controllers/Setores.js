const Setores = require('../models/Setores');

module.exports={
  async buscarTodos(req, res){
    const setores = await Setores.findAll();
    return res.json(setores);
  },

  async criarSetor(req, res){
    const { nome_setor, status } = req.body;
    const setor = await Setores.create({ nome_setor, status });
    return res.json(setor);
  },

  async buscarUmSetor(req, res){
    const { id_setor } = req.params;
    const setor = await Setores.findOne({ where: { id: id_setor}})
    return res.json(setor);
  }
}