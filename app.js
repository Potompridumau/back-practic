require('dotenv').config();

const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');

const mainRoute = require('./routes/main/main');
const gamesRouter = require('./routes/game/games');
const cors = require('./middleware/cors');

const PORT = process.env.PORT || 4004;

const app = express();


app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    mainRoute,
    gamesRouter
); 

app.listen(PORT, () => {
	console.log(`The project was launched on  ${PORT}`);
});
