var express = require('express');
var router = express.Router();

var BookModel = require('../model/BookModel')


//get all books
router.get('/', function(req, res, next){
    BookModel.find(function(err, book){
        if (err) return next(err);
        res.json(book);
    });
   
});

//get a book by id
router.get('/:id', function(req, res, next){
    BookModel.findById(req.params.id, function(err, book){
        if (err) return next(err);
        res.json(book);
    });
   
});

//post new book
router.post('/', function(req, res, next){
    BookModel.create(req.body, function(err, book){
        if (err) return next(err);
        res.json(book);
    });
});

//update book details
router.put('/:id', function(req, res, next){
    BookModel.findByIdAndUpdate(req.params.id ,req.body, function(err, book){
        if (err) return next(err);
        res.json(book);
    });
});

//delete a book
//post new book
router.delete('/:id', function(req, res, next){
    BookModel.findByIdAndRemove(req.params.id, req.body, function(err, book){
        if (err) return next(err);
        res.json(book);
    });
});

module.exports =router;