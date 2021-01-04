
exports.up = function(knex) {
    return knex.schema.createTable('tarefas', function(table){
        table.increments();
        table.string('descricao');
        table.boolean('concluida');
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('tarefas')
  
};
