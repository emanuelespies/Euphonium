'use strict'

angular.module('minhasDiretivas', [])
	.directive('meuPainel', function() {

		let ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;


		ddo.scope = {
            titulo: '@'
        };

        ddo.templateUrl = 'js/directives/meu-painel.html';

		return ddo;
	})
    .directive('meuProduto', function() {

        let ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@',
            url: '@'
        };

        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';           
        
        return ddo;
    })
    .directive('botaoExcluir', function() {
        let ddo = {};
        
        ddo.restrict = "E";
        
        ddo.scope = {
            nome: '@',
            acao : '&'
        }
        
        ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

        return ddo;
    });