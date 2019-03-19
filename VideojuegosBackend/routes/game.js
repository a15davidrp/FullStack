'use strict'
var express = require('express')
var GameController = require('../controllers/game')
var api = express.Router();

api.get('/prueba/:nombre?', GameController.prueba);
api.get('/game/:id', GameController.getGame);
api.get('/games/', GameController.getGames);
api.post('/game/', GameController.saveGame);
api.put('/game/:id', GameController.updateGame);
api.delete('/game/:id', GameController.deleteGame);


module.exports = api
