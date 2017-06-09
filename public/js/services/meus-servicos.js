'use strict'

angular.module('meusServicos', ['ngResource'])
	.factory('recursoProduto', function($resource) {

		return $resource('/r1/produtos/:produtoId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	})
	.factory("cadastroDeProdutos", function(recursoProduto, $q) {
		let service = {};
		service.cadastrar = function(produto) {
			return $q(function(resolve, reject) {

				if(produto._id) {
					recursoProduto.update({produtoId: produto._id}, produto, function() {
						resolve({
							mensagem: 'Produto ' + produto.titulo + ' atualizado com sucesso',
							inclusao: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar o produto ' + produto.titulo
						});
					});

				} else {
					recursoProduto.save(produto, function() {
						resolve({
							mensagem: 'Produto ' + produto.titulo + ' incluído com sucesso',
							inclusao: true
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível incluir o produto ' + produto.titulo
						});
					});
				}
			});
		};
		return service;
    });