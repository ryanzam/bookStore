var express = require('express');
var router = express.Router();

router.get('/book', function(req, res, next){
    res.send(" book api")
});

module.exports = router;