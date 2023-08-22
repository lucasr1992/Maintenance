const { Model, DataTypes } = require('sequelize');

class Paginas extends Model{
  static init(sequelize){
    super.init({
      id_pagina: DataTypes.INTEGER,
      path: DataTypes.STRING,
      title: DataTypes.STRING
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.hasMany(models.Permissoes, { foreignKey: 'id_pagina', as: 'paginas' });
  }
}

module.exports = Paginas;