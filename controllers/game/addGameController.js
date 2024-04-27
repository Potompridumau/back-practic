const addGameController = async (req, res) => {
	res.send({
		games: req.games,
		updated: req.updatedObject,
	});
};

module.exports = addGameController;
