const { Model, DataTypes } = require('sequelize');

class Usuarios extends Model{
  static init(sequelize){
    super.init({
      registro_usuario: DataTypes.STRING,
      nome_usuario: DataTypes.STRING,
      senha_usuario: DataTypes.STRING,
      email_usuario: DataTypes.STRING,
      celular_usuario: DataTypes.STRING,
      setor_usuario: DataTypes.INTEGER,
      cargo_usuario: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN
    }, {
      sequelize
    });
  }
  static associate(models) {
    this.belongsTo(models.Setores, { foreignKey: 'id', as: 'Setores' });
    this.belongsTo(models.Cargos, { foreignKey: 'id', as: 'Cargos' });
  }
}

module.exports = Usuarios;