var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send({
        id: req.query.id,
        title: req.query.title
    })
})


module.exports = router;