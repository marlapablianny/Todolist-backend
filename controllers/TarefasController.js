const express = require('express');
var knex = require( '../database');
var router = express.Router();



module.exports = {
    async index(req, res, ){
        const resultado = await knex.select('id','descricao','concluida').from('tarefas');          
        
        return res.send(resultado)
    }            
}