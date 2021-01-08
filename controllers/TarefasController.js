const express = require('express');
var knex = require( '../database');
var router = express.Router();


module.exports = {
    async index(req, res, ){
        const resultado = await knex.select('id','descricao', 'concluida').from('tarefas');          
        
        return res.send(resultado)
    },
    async create(req, res){
        try {
            const {descricao, concluida} = req.body
            
            await knex('tarefas').insert({
                descricao,
                concluida: false,
            })

            return res.status(201).send()
        } catch (error) {
            next (error)
        }
    },
    async delete(req, res,) {
        try {
            const { id } = req.params

            await knex('tarefas')
            .where({ id })
            .del()

            return res.send()
        } catch (error) {
            next(error)
        }
    },
    async update(req, res,next){
        try {
            const { id } = req.params

            const tarefa = await knex('tarefas').where('id', id).first()

            await knex('tarefas')
            .where('id', id)
            .update({ concluida: !tarefa.concluida })

            return res.send()
        } catch (error) {
            next(error)
        }
    },


}