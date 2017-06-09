'use strict'

angular.module('tabarato').controller('ProdutosController', function($scope, recursoProduto) {
	
	$scope.produtos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	recursoProduto.query(function(produtos) {
		$scope.produtos = produtos;
	}, function(erro) {
		console.log(erro);
	});

	$scope.remover = function(produto) {

		recursoProduto.delete({produtoId: produto._id}, function() {
			let indiceDoProduto = $scope.produtos.indexOf(produto);
			$scope.produtos.splice(indiceDoProduto, 1);
			$scope.mensagem = 'Produto ' + produto.titulo + ' removida com sucesso!';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar o produto ' + produto.titulo;
		});
	};

});