'use strict'

//rotas relacionadas aos grupos
module.exports = function(app){

	let api = app.api.apiGrupo;

	app.get('/r1/grupos', api.lista);
	
};