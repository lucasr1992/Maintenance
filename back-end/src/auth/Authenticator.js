require('dotenv').config({path:'settings.env'});
const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next){
  const token = req.headers['x-access-token'];
  jwt.verify(token, SECRET, (err, decoded) => {
    if(err){
      return res.status(401).json({ error: "Erro de Autenticação"}).end();
    }
    next();
  })
}

module.exports= verifyToken;