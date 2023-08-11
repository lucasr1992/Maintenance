const { Model, DataTypes } = require('sequelize');

class Setores extends Model{
  static init(sequelize){
    super.init({
      nome_setor: DataTypes.STRING,
      status: DataTypes.BOOLEAN
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.hasMany(models.Usuarios, { foreignKey: 'setor_usuario', as: 'setores' });
  }
}

module.exports = Setores;