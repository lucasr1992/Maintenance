require('dotenv').config({path:'settings.env'});
const LANG = process.env.LANGUAGE;
const Permissoes = require('../models/Permissoes');

module.exports = {
  async buscarPermissao(req, res){
    
    const { 
      id_cargo,
      id_setor 
    } = req.body;
    if(!id_cargo || !id_setor){
      switch (LANG){
        case 'PT':
          return res.status(401).json({ error: "Cargo e Setor Necessarios"}).end();
        case 'EN':
          return res.status(401).json({ error: "Necessary Job Title And Sectors"}).end();
        case 'ES':
          return res.status(401).json({ error: "Necesario Sectores y Título Profesional"}).end();
        case 'IT':
          return res.status(401).json({ error: "Richiesto Settori e Titolo di Lavoro"}).end();
      }
    }
    try{
      
      const permissao = await Permissoes.findAll({ 
        where: { 
          id_cargo: id_cargo,
          id_setor: id_setor
        },
        include: [
          { association: 'paginas'}
        ]
      });
      return res.status(200).json(permissao);
    }catch(err){
      switch (LANG){
        case 'PT':
          return res.status(400).json({ error: "Cargo ou Setor não Encontrado"}).end();
        case 'EN':
          return res.status(400).json({ error: "Job Title or Sector not Found"}).end();
        case 'ES':
          return res.status(400).json({ error: "Título Profesional o Sectore no Encontrado"}).end();
        case 'IT':
          return res.status(400).json({ error: "Titolo di Lavoro o Settori non Trovato"}).end();
      }
    }   
  }  
}