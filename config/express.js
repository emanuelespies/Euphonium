'use strict'

let express = require('express'); //modulo do express
let app = express(); //instancia do express
let consign =require('consign'); //modulo que realiza require automaticamente das pastas setadas, facilita pois não será necessário fazer require individual de cada rota do express
let bodyParser = require('body-parser'); //middleware que vai fazer json popular o body das requisicoes

//configurações do express
//static é middleware - filtros para lidar com requisições
app.use(express.static('./public'));
app.use(bodyParser.json()); //ativa o body-parser

consign({ cwd: 'app'}) //current work directory - indicará para o consign qual diretório buscar pelos módulos
	.include('models')
	.then('api') 
	.then ('routes')// vai requerer rotas do express
	.into(app);//é necessário dizer para o consign que cada um dos modulos carregados deverao obter uma instancia do express que já está configurada (app)

//tornar a instância do express pública
module.exports = app;