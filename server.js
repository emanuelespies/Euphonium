'use strict'

let http = require('http');
let app = require('./config/express'); //este app vai lidar com req e res
require('./config/database')('mongodb://localhost/s2b'); //carregar a configuracao da conexao do mongoose e manda a uri para o databse.js

http.createServer(app).listen(3000, function(){
	console.log('Servidor rodando na porta 3000')
});