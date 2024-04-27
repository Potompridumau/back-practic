const gamesRouter = require('express').Router();
const {sandAllGames, deleteGame, addGameController} = require('../../controllers/game')
const {getAllGames, newGame, writeNewData, findGameById} = require('../../middleware/games')

gamesRouter.get('/games', getAllGames, sandAllGames);
gamesRouter.delete('/games/:id', getAllGames, findGameById, writeNewData,  deleteGame);
gamesRouter.post("/games", getAllGames, newGame, writeNewData,  addGameController)

module.exports = gamesRouter;
