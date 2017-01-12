var page = require('../../src/pages/hero.page');
var data = require('../../src/data/hero.data');

module.exports = function() {

  this.World = require("../support/world").World

  this.When(/^clicar no botão ([^"]*)$/, function (button_name, done) {
    page.clicarBotao(button_name);
    done();
  });

  this.When(/^eu acessar o ([^"]*)$/, function (link_name, done) {
    page.clicarLink(link_name);
    done();
  });

  this.When(/^acessar ([^"]*)$/, function (link_name, done) {
    page.clicarLink(link_name);
    done();
  });  

  this.When(/^eu acessar o ([^"]*)$/, function (link_name, done) {
    page.clicarLink(link_name);
    done();
  });  

}
/**
Cenário:
      Dado que eu esteja logado como um administrador válido
      Quando eu acessar o Dashboard
      Então devo ver os tops herois

    Cenário:
      Dado que eu esteja logado como um administrador válido
      Quando eu acessar o Heroes
      E preencher as informações de um novo heroi
      E clicar no botão Add
      Então deve ser exibido o novo heroi na lista de herois cadastrados

          @top   
    Cenário:
     Dado que eu esteja logado como um administrador válido
     Quando acessar Dashboard
     Então devo ver os tops herois
**/      