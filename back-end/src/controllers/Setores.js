require('dotenv').config({path:'settings.env'});
const LANG = process.env.LANGUAGE;

const { stat } = require('fs');
const Setores = require('../models/Setores');

module.exports={
  async buscarTodos(req, res){
    try{
      const setores = await Setores.findAll();
      return res.json(setores);
    }catch(error){
      switch (LANG){
        case 'PT':
          return res.status(400).json({ error: "Setores não Encontrados"}).end();
        case 'EN':
          return res.status(400).json({ error: "Sectors not Found"}).end();
        case 'ES':
          return res.status(400).json({ error: "Sectores no Encontrados"}).end();
        case 'IT':
          return res.status(400).json({ error: "Settori non Trovati"}).end();
      }   
    }
  },

  async criarSetor(req, res){
    const { nome_setor, status } = req.body;
    if(!nome_setor || !status){
      switch (LANG){
        case 'PT':
          return res.status(400).json({ error: "Necessário ID e Setor"}).end();
        case 'EN':
          return res.status(400).json({ error: "ID and Sector Required"}).end();
        case 'ES':
          return res.status(400).json({ error: "ID y Sector Requerido"}).end();
        case 'IT':
          return res.status(400).json({ error: "ID e Settore Richiesto"}).end();
      }
    }

    try{
      const setor = await Setores.create({ nome_setor, status });
      return res.json(setor);
    }catch(error){
      switch (LANG){
        case 'PT':
          return res.status(500).json({ error: "Erro ao Cadastrar o Setor"}).end();
        case 'EN':
          return res.status(500).json({ error: "Error when Registering the Sector"}).end();
        case 'ES':
          return res.status(500).json({ error: "Error al Registrar el Sector"}).end();
        case 'IT':
          return res.status(500).json({ 
            error: "Errore Durante la Registrazione della Settore"
          }).end();          
      }
    }
  },

  async buscarUmSetor(req, res){
    const { id_setor } = req.params;
    if(!id_setor){
      switch (LANG){
        case 'PT':
          return res.status(400).json({ error: "Necessário ID do Setor"}).end();
        case 'EN':
          return res.status(400).json({ error: "Sector ID Required"}).end();
        case 'ES':
          return res.status(400).json({ error: "ID de Sector Requerido"}).end();
        case 'IT':
          return res.status(400).json({ error: "ID Settore Richiesto"}).end();
      }
    }

    try{
      const setor = await Setores.findOne({ where: { id: id_setor}})
      return res.json(setor);
    }catch(error){
      switch (LANG){
        case 'PT':
          return res.status(400).json({ error: "Setor não Encontrados"}).end();
        case 'EN':
          return res.status(400).json({ error: "Sector not Found"}).end();
        case 'ES':
          return res.status(400).json({ error: "Sector no Encontrado"}).end();
        case 'IT':
          return res.status(400).json({ error: "Settore non Trovato"}).end();
      }  
    }
    
  }
}