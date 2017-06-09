'use strict'

angular.module('tabarato', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
	.config(function($routeProvider, $locationProvider) {

		$routeProvider.when('/produtos', {
			templateUrl: 'partials/principal.html',
			controller: 'ProdutosController'
		});

		$routeProvider.when('/produtos/new', {
			templateUrl: 'partials/produto.html',
			controller: 'ProdutoController'
		});

		$routeProvider.when('/produtos/edit/:produtoId', {
			templateUrl: 'partials/produto.html',
			controller: 'ProdutoController'
		});

		$routeProvider.when('/produtos/:produtoId', {
			templateUrl: 'partials/produto-view.html',
			controller: 'ProdutoController'
		});

		$routeProvider.otherwise({redirectTo: '/produtos'});

	});