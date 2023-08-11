require('dotenv').config({path:'settings.env'});
const LANG = process.env.LANGUAGE;

const Cargos = require('../models/Cargos');

module.exports={
  async buscarTodos(req, res){
    try{
      const cargos = await Cargos.findAll();
      return res.json(cargos);
    }catch(error){
      switch (LANG){
        case 'PT':
          return res.status(400).json({ error: "Cargos não Encontrados"}).end();
        case 'EN':
          return res.status(400).json({ error: "Job Titles not Found"}).end();
        case 'ES':
          return res.status(400).json({ error: "Títulos Profesional no Encontrados"}).end();
        case 'IT':
          return res.status(400).json({ error: "Titoli di Lavoro non Trovati"}).end();
      }   
    }
  },

  async criarCargo(req, res){
    const { nome_cargo, status } = req.body;
    if(!nome_cargo || !status){
      switch (LANG){
        case 'PT':
          return res.status(401).json({ error: "Necessário Cargo e Status"}).end();
        case 'EN':
          return res.status(401).json({ error: "Necessary Job Title And Status"}).end();
        case 'ES':
          return res.status(401).json({ error: "Necesario Título Profesional y Estado"}).end();
        case 'IT':
          return res.status(401).json({ 
            error: "Richiesto Titolo di Lavoro e Stato"
          }).end();          
      }
    }

    try{
      const cargo = await Cargos.create({ nome_cargo, status });
      return res.json(cargo);
    }catch(error){
      switch (LANG){
        case 'PT':
          return res.status(500).json({ error: "Erro ao Cadastrar o Cargo"}).end();
        case 'EN':
          return res.status(500).json({ error: "Error when Registering the Job Title"}).end();
        case 'ES':
          return res.status(500).json({ error: "Error al Registrar el Título Profesional"}).end();
        case 'IT':
          return res.status(500).json({ 
            error: "Errore Durante la Registrazione della Titolo di Lavoro"
          }).end();          
      }
    }    
  },

  async buscarUmCargo(req, res){
    const { id_cargo } = req.params;
    if(!id_cargo){
      switch (LANG){
        case 'PT':
          return res.status(400).json({ error: "Id Cargo Necessário"}).end();
        case 'EN':
          return res.status(400).json({ error: "Id Job Title Necessary"}).end();
        case 'ES':
          return res.status(400).json({ error: "Id Título Profesional Necesario"}).end();
        case 'IT':
          return res.status(400).json({ error: "Id Titolo di Lavoro Necessario"}).end();
      }
    }

    try{
      const cargo = await Cargos.findOne({ where: { id: id_cargo}})
      return res.json(cargo);
    }catch(error){
      switch (LANG){
        case 'PT':
          return res.status(400).json({ error: "Cargo não Encontrado"}).end();
        case 'EN':
          return res.status(400).json({ error: "Job Title not Found"}).end();
        case 'ES':
          return res.status(400).json({ error: "Título Profesional no Encontrado"}).end();
        case 'IT':
          return res.status(400).json({ error: "Titolo di Lavoro non Trovato"}).end();
      }
    }
  }
}