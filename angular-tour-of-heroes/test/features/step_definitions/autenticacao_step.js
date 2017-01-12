var page = require('../../src/pages/hero.page');
var data = require('../../src/data/hero.data');

module.exports = function() {

  this.World = require("../support/world").World

  this.Given(/^que eu esteja logado como um administrador ([^"]*)$/, function (situacao, done) {
    page.entrar().no().site('/');
    done();
  });


}