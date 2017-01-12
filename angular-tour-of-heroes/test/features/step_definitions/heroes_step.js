var page = require('../../src/pages/hero.page');
var data = require('../../src/data/hero.data');

module.exports = function() {

  this.World = require("../support/world").World

  this.setDefaultTimeout(60000);
  
  this.When(/^eu informar o nome do ([^"]*)$/, function (name, done) {
    dados = data.get[name];
    page.preencher().usuario(dados);
    done();
  });

  this.Then(/^devo ver o ([^"]*) na lista de herois$/, {timeout: 60*1000}, function (name, done) {
    dados = data.get[name];
    //browser.driver.sleep(3000);
    this.expect(page.sucesso(dados.name).getText()).to.eventually.equal(dados.name).and.notify(done);
  });

  this.Then(/^devo ver os tops herois$/, function (done) {
    page.verificar().top().heroes();
    done();
  });

  this.When(/^preencher as informações de um novo heroi$/, function (dados) {
    dados = data.default;
    page.preencher(dados);
  });

  this.Then(/^deve ser exibido o novo heroi na lista de herois cadastrados$/, function (done) {
    this.expect(page.sucesso(hero.name).getText()).to.eventually.equal(hero.n).and.notify(done);
  });

}