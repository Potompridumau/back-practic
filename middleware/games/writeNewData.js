const { writeData } = require('../../utils/data');

const writeNewData = async (req, _, next) => {
	await writeData('./data/games.json', req.games);
    next()
};

module.exports = writeNewData;
