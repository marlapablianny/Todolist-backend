const express = require('express');
var knex = require( '../database');
var router = express.Router();



router.get('/', function (req, res, ){
    return knex.select('id','descricao','concluida').from('tarefas').then(
        function(resultado){
            res.send(resultado)
            
        }
    )
    
})
module.exports = router;

