const { Model, DataTypes } = require('sequelize');

class Cargos extends Model{
  static init(sequelize){
    super.init({
      nome_cargo: DataTypes.STRING,
      status: DataTypes.BOOLEAN
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.hasMany(models.Usuarios, { foreignKey: 'cargo_usuario', as: 'cargos' });
    this.hasMany(models.Permissoes, { foreignKey: 'id_cargo', as: 'cargo_permissao' });
  }
}

module.exports = Cargos;