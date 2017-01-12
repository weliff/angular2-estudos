"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DataBindingComponent = (function () {
    function DataBindingComponent() {
        this.nome = 'Weliff';
        this.urlImg = 'http://lorempixel.com/200/100/sports/';
        this.conteudoAtual = '';
        this.conteudoSalvo = '';
        this.isMouseOver = false;
        this.pessoa = {
            nome: 'Maria'
        };
        this.nomeCurso = "Curso de angular 2";
        this.valorInicial = 10;
    }
    DataBindingComponent.prototype.getValor = function () {
        return 1;
    };
    DataBindingComponent.prototype.onClick = function (event) {
        alert('Clicou');
    };
    DataBindingComponent.prototype.onKeyup = function (event) {
        // this.conteudoAtual = event.target.value;
    };
    DataBindingComponent.prototype.onSave = function (valor) {
        this.conteudoSalvo = valor;
    };
    DataBindingComponent.prototype.onMouseSpan = function () {
        this.isMouseOver = !this.isMouseOver;
    };
    DataBindingComponent.prototype.onValorMudou = function (event) {
        console.log(event);
        console.log(event.novoValor);
    };
    DataBindingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'exemplo-data-binding',
            templateUrl: 'data-binding.component.html',
            /*styles: [
                `.highligth {
                    background-color: yellow
                }
                `
            ]*/
            styleUrls: ['data-binding.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], DataBindingComponent);
    return DataBindingComponent;
}());
exports.DataBindingComponent = DataBindingComponent;
//# sourceMappingURL=data-binding.component.js.map