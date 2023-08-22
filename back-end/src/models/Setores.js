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
    this.hasMany(models.Permissoes, { foreignKey: 'id_setor', as: 'setor_permissao' });
  }
}

module.exports = Setores;