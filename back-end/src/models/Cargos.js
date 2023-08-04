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
    this.hasMany(models.Usuarios, { foreignKey: 'id', as: 'registro_usuario' });
  }
}

module.exports = Cargos;