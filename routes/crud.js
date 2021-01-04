const express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.send({
    id: req.query.id, 
    title: req.query.title 
    });
});

module.exports = router;

