require('dotenv').config();

function cors(req, res, next) {
	const { origin } = req.headers;
	if (process.env.ALLOWEDCORS.includes(origin)) {
		// Если это наш друг
		res.header('Access-Control-Allow-Origin', origin);
	}
	next();
}
module.exports = cors
