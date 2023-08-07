require('dotenv').config({path:'settings.env'});
const LANG = process.env.LANGUAGE;
const SECRET = process.env.SECRET;
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next){
  const token = req.headers['x-access-token'];
  jwt.verify(token, SECRET, (err, decoded) => {
    if(err){
      switch (LANG){
        case 'PT':
          return res.status(401).json({ error: "Erro de Autenticação"}).end();
        case 'EN':
          return res.status(401).json({ error: "Authentication Error"}).end();
        case 'ES':
          return res.status(401).json({ error: "Error de Autenticación"}).end();
        case 'IT':
          return res.status(401).json({ error: "Errore di Autenticazione"}).end();
      }   
    }
    next();
  })
}

module.exports= verifyToken;