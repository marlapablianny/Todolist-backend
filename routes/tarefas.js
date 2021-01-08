const express = require('express');
var knex = require( '../database');
var router = express.Router();

const TarefasController = require('../controllers/TarefasController.js')

router.get('/', TarefasController.index);
router.post('/', TarefasController.create);
router.delete('/:id', TarefasController.delete)
router.put('/:id', TarefasController.update)



/*router.get('/', function (req, res, ){
    return knex.select('id','descricao','concluida').from('tarefas').then(
        function(resultado){
            res.send(resultado)
            
        }
    )
    
})*/
module.exports = router;

