require('dotenv').config({path:'settings.env'});

module.exports = {
  dialect: process.env.TYPE_DB,
  host: process.env.HOST_DB,
  username: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATA_BASE,
  define: {
    timestamps: false,
    underscored: true,
  },
};