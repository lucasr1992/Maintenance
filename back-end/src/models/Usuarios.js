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
    this.belongsTo(models.Setores, { foreignKey: 'setor_usuario', as: 'setor' });
    this.belongsTo(models.Cargos, { foreignKey: 'cargo_usuario', as: 'cargo' });
  }
}

module.exports = Usuarios;