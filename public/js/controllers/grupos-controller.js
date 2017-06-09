'use strict'

angular.module('tabarato')
	.controller('GruposController', function($scope, $http) {
		$http.get('/r1/grupos')
			.success(function(grupos) {
			$scope.grupos = grupos;
		})
		.error(function(erro) {
			console.log(erro);
		});
	});