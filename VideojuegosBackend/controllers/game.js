
var Game = require('../models/game')

function prueba(req, res) {
    if (req.params.nombre) {
        var nombre = req.params.nombre;
    } else {
        var nombre = "SIN NOMBRE";
    }
    // podemos devolver cualquier cosa, lo mejor es devolver un json
    res.status(200).send({ data: [1, 2, 3], message: "hola mundo:" + nombre })
}

function getGame(req, res) {
    let idGame = req.params.id
    Game.findById(idGame).then(
        foundGame => {
            if (!foundGame) {
                res.status(404).send({
                    accion: 'get one',
                    message: 'game not found with this id'
                })
            } else {
                res.status(200).send({
                    accion: 'get one',
                    data: foundGame
                })
            }
        }
    ).catch(
        err => {
            res.status(500).send({
                accion: 'get one',
                message: 'Error trying to find a game ' + err
            })
        }
    )
}

function getGames(req, res) {
    Game.find().sort('-_id').exec() //Busca todos y ordenalos por Id
        .then( //Todo fue bien
            games => {
                if (!games) { // no se encontraron objetos
                    res.status(404).send({
                        accion: 'get all',
                        message: 'No games found'
                    })
                } else {// se econtro al menos un objeto
                    res.status(200).send({
                        accion: 'get all',
                        data: games
                    })
                }
            }
        ).catch(//hubo algun error
            err => {
                res.status(500).send({
                    accion: 'get all',
                    message: 'Error finding pets: ' + err
                })
            }
        )
}

function saveGame(req, res) {
    var params = req.body
    // creamos un objeto del modelo Game
    var game = new Game();
    // rellenamos un el objeto
    game.nombre = params.nombre
    game.precio = params.precio
    // guardamos el favorito
    game.save((err, gameStored) => {
        if (err) { // si hay un error devolvemos un error de tipo servidor 500
            res.status(500).send({ menssage: 'error al guardar el juego' })
        } else {
            res.status(200).send({ accion: "save", game: gameStored })
        }
    })
}

function updateGame(req, res) {
    // obtenemos el id del coche a modificar
    var gameId = req.params.id
    // obtenemos los nuevo datos del juego
    var params = req.body
    // realizamos una consulta de actualización
    Game.findByIdAndUpdate(gameId, params, (err, gameUpdated) => {
        if (err) { // si hay un error en la consulta devolvemos un error de tipo servidor 500
            res.status(500).send({ menssage: 'error al actualizar el juego' })
        } else { // si todo ha ido bien
            res.status(200).send({ accion: "update", game_Updated: gameUpdated })
        }
    })
}

function deleteGame(req, res) {
    // obtenemos el id del coche a borrar
    var gameId = req.params.id
    // buscamos el coche que deseamos borrar
    Game.findById(gameId, (err, gameEncontrado) => {
        if (err) { // si hay un error en la consulta
            res.status(500).send({ accion: "delete", menssage: 'error al devolver el juego' })
        } else if (!gameEncontrado) { // si no se ha encontrado el juego
            res.status(404).send({ accion: "delete", menssage: 'no existe el juego' })
        } else { // ojo usa gameEncontrado y no Game(que borra todo)
            gameEncontrado.remove((err) => {
                if (err) { // si el juego no se ha podido borrar
                    res.status(500).send({ menssage: 'el juego no se ha podidio borrar' })
                } else { // si todo ha ido bien
                    res.status(200).send({ message: "el juego se ha eliminado" })
                }
            })
        }
    })
}



module.exports = { prueba, getGame, getGames, saveGame, updateGame, deleteGame }