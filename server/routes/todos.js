/**
 * Created by bar on 01/07/17.
 */

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://bar:bar@ds141242.mlab.com:41242/meantodosapp', ['todos']);

//Get All Todos
// /api/todos
router.get('/', function (req, res, next) {
  db.todos.find(function (err, todos) {
    if (err) {
      res.send(err);
    } else {
      res.json(todos);
    }
  });
});

//Get Single Todo
// /api/todos/id
router.get('/:id', function (req, res, next) {
  db.todos.findOne({
    _id: mongojs.ObjectId(req.params.id)
  }, function (err, todo) {
    if (err) {
      res.send(err);
    } else {
      res.json(todo);
    }
  });
});

//Save Todo
// /api/todos
router.post('/', function (req, res, next) {
  console.log(req);
  var todo = req.body;
  if (!todo.text || !(todo.isCompleted + '')) {
    res.status(400);
    res.json({
      "error": "Invalid Data"
    });
  } else {
    db.todos.save(todo, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        console.log('');
        res.json(result);
      }
    });
  }
});

//update Todo
// /api/todos/id
router.put('/:id', function (req, res, next) {
  var todo = req.body;
  var updObj = {};

  if (todo.isCompleted) {
    updObj.isCompleted = todo.isCompleted;
  }

  if (todo.text) {
    updObj.text = todo.text;
  }

  if (!updObj) {
    res.status(400);
    res.json({
      "error": "Invalid Data"
    });
  } else {
    db.todos.update({
      _id: mongojs.ObjectId(req.params.id)
    }, updObj, {}, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  }
});

//Delete Todo
// /api/todos/id
router.delete('/:id', function (req, res, next) {
  db.todos.remove({
    _id: mongojs.ObjectId(req.params.id)
  }, '', function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
