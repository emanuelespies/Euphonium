'use strict'

let api = {};

api.lista = function(req, res){
	var grupos = [
		{
			_id:1,
			nome: 'Eletrodoméstico'
		},
		{
			_id:2,
			nome: 'Informática'
		},
		{
			_id:3,
			nome: 'Livros'
		}
	];
	res.json(grupos);
};

module.exports = api;