'use strict'

let mongoose = require('mongoose');//o node nao carrega novamente este modulo, ele só trás as infos na memoria da primeira vez que foi carregado no database.js

let api = {}; //criei o objeto api sem propridade
let model = mongoose.model('Produto');

//adicionado dinamicamente a propridade lista que é uma função
api.lista = function (req, res) {

	model //usando promise no model Produto
		.find({}) //find de objeto vazio procura em toda a collection
		.then(function(produtos){
			res.json(produtos);
		}, function(error){
			console.log(error);
			res.status(500).json(error);
		});
};

api.buscaPorId = function(req, res){
	
	model
		.findById(req.params.id)
		.then(function(produto) {
			//é preciso testar se produto existe
			if(!produto) throw Error('produto não encontrada');//!se produto é undefined, manda a mensagem e nao executa a linha seguinte
		res.json(produto);//senao, envia produto encontrado
		
		}, function(error){
			console.log(error);
			res.status(404).json(error);
		});

};

api.removePorId = function(req, res){

	model
		.remove({_id:req.params.id}) //a funcao remove precisa de um criterio para responder
		.then(function(produto) {
			res.sendStatus(204); //retorna operação concluida com sucesso mas nenhum dado será devolvido
		
		}, function(error){
			console.log(error);
			res.status(500).json(error);
		});
};

api.adiciona = function(req, res){

    model
    	.create(req.body)//req.body acesso ao que veio na requisicao que o angular mandou
    	.then(function(produto){//da acesso o produto criada no banco
    		res.json(produto);//retornar o produto criada para o angular, caso precise desta informação, por exemplo do id da produto nova
    	}, function(error){
			console.log(error);
			res.status(500).json(error);
    	});
};

api.atualiza = function(req, res){

	 model
    	.findByIdAndUpdate(req.params.id, req.body)//req.body acesso ao que veio na requisicao que o angular mandou
    	.then(function(produto){//da acesso ao produto criado no banco
    		res.json(produto);//retornar produto criado para o angular, caso precise desta informação, por exemplo do id da produto nova
    	}, function(error){
			console.log(error);
			res.status(500).json(error);
    	});
};

module.exports = api; //vai retornar um objeto com funcoes de listar, deletar, atualizar nas propriedades