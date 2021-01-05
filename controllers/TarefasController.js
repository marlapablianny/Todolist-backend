const express = require('express');
const { isNamedExportBindings } = require('typescript');
var knex = require( '../database');
var router = express.Router();



module.exports = {
    async index(req, res, ){
        const resultado = await knex.select('id','descricao','concluida').from('tarefas');          
        
        return res.send(resultado)
    },
    async create(req, res){
        try {
            const {descricao} = req.body
            
            await knex('tarefas').insert({
                descricao
            })

            return res.status(201).send()
        } catch (error) {
            next (error)
        }
    },
}