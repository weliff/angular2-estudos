'use strict';


var protractor = require('protractor');
var browser    = protractor.browser;


module.exports = class Page {

  constructor() {}

  clicarLink(nome) {
    element(by.linkText(nome)).click();
  }

  preencherByPlaceholder(placeholder, dado) {    
    this.buscarByCSS(`input[placeholder='${placeholder}']`).first().sendKeys(dado);
  }

  clicarBotao(nome) {
  	element.all(by.buttonText(nome)).first().click();	
  }

  buscarByXpath(query) {
  	return element.all(by.xpath(query));
  }

  buscarByCSS(query) {
    return element.all(by.css(query));
  }

  selecionarOption(dado) {
  	element(by.cssContainingText('option', dado)).click();	
  }

  buscarTextoByCSS(tag,dado) {
    return element(by.cssContainingText(tag, dado));    
  }  

  site(url) {
	  browser.get(`${browser.baseUrl}${url}`);
  }

  preencher() {
    return this;
  }

  selecionar() {
    return this;
  }

  no() {
      return this;
  }

  entrar() {
    return this;
  }

  verificar() {
    return this;
  }

  abrir() {
    return this;
  }

}	