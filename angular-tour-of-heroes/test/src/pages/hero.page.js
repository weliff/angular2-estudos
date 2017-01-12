'use strict';

const util = require('util');
const Page = require('./page');

let HeroPage = new class extends Page {

    constructor() {
        super();
        this.result = {
        	exec: function(nome) {
        		element.all(by.cssContainingText('label', nome));
        	}
        }
        
    }

    login(dados) {
        this.preencher().username(dados.username);
        this.preencher().password(dados.password);
        super.clicarBotao('Login');
    }

    usuario(dados) {
        super.preencherByPlaceholder('Name', dados.name);
    }

    senha(pass) {
        super.preencherByPlaceholder('Password', dado);
    }

    dados(dados) {
        this.preencher().nome(dados.nome);
    }

    nome(dado) {
        super.preencherByPlaceholder('Nome', dado);
    }

    salvar() {
        super.clicarBotao('Save');
    }

    novo() {
        return {usuario: () => super.clicarBotao('Add')};
    }

    sucesso(nome) {
    	return super.buscarTextoByCSS('span', nome)
    }

    painel(nome) {
        super.buscarByXpath(`//span[text()='${nome}']`).click();
    }

    quantidadeHerois() {
        super.buscarByXpath(`//span[text()='${nome}']`);
        // div.module.hero
    }

}

module.exports = HeroPage;