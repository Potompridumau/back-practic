const deleteGame = async (req, res) => {

	res.send({
		games: req.games,
		updated: req.game,
	});
};

module.exports = deleteGame;
