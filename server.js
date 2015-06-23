var express = require('express')
	, app = express()
	, bodyParser = require('body-parser')
	, mongoose = require("mongoose")
	, cfg = require("./config.json");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var apiRoutes = require('./api/routes/api.js');
app.use('/api', apiRoutes);

app.listen(port);
console.log('Api rodando na porta ', port);

mongoose.connect(cfg.development.db);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão ao DB!!!'));
db.once('open', function callback () {console.log('Conectado ao mongodb.');});