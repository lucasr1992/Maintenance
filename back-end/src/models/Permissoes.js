const { Model, DataTypes } = require('sequelize');

class Permissoes extends Model{
  static init(sequelize){
    super.init({
      id_pagina: DataTypes.INTEGER,
      id_cargo: DataTypes.INTEGER,
      id_setor: DataTypes.INTEGER,
      leitura: DataTypes.BOOLEAN,
      escrita: DataTypes.BOOLEAN,
      edit_status: DataTypes.BOOLEAN
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.belongsTo(models.Paginas, { foreignKey: 'id_pagina', as: 'paginas' });
    this.belongsTo(models.Setores, { foreignKey: 'id_setor', as: 'setor_permissao' });
    this.belongsTo(models.Cargos, { foreignKey: 'id_cargo', as: 'cargo_permissao' });
  }
}

module.exports = Permissoes;