const findGameById = (req, _, next) => {
    const id = Number(req.params.id);
	req.game = req.games.find((item) => item.id === id);
	const index = req.games.findIndex((item) => item.id === req.game.id);
	req.games.splice(index, 1);
    next()
}
module.exports = findGameById