const Cargos = require('../models/Cargos');

module.exports={
  async buscarTodos(req, res){
    const cargos = await Cargos.findAll();
    return res.json(cargos);
  },

  async criarCargo(req, res){
    const { nome_cargo, status } = req.body;
    const cargo = await Cargos.create({ nome_cargo, status });
    return res.json(cargo);
  },

  async buscarUmCargo(req, res){
    const { id_cargo } = req.params;
    const cargo = await Cargos.findAll({ where: { id: id_cargo}})
    return res.json(cargo);
  }
}