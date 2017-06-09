'use strict'

let mongoose = require('mongoose');

//Schema é uma função construtora, por isso começa em letra maiuscula
let schema = mongoose.Schema(
	//deve ser passado um objeto js como parâmetro
	{
		titulo: {//dentro de cada atributo deste objeto serão passados definicoes do tipo de campo, se é obrigatorio, etc 
			type: String,
			require: true
		},
		preco: {
			type: Number,
			require: true
		},
		url: {
			type: String,
			require: true
		},
		descricao: {
			type: String
		},
		grupo: {
			type: Number,
			require: true
		}
	}
); 

mongoose.model('Produto', schema); //('nome-do-model', schema definido anteriormente)