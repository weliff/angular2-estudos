import { Component } from '@angular/core';

@Component({
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
})
export class DataBindingComponent{
    constructor() { }
    
    nome = 'Weliff';
    urlImg = 'http://lorempixel.com/200/100/sports/';
    conteudoAtual = '';
    conteudoSalvo = '';
    isMouseOver = false;

    pessoa = {
        nome: 'Maria'
    };

    nomeCurso = "Curso de angular 2";
    valorInicial = 10;


    getValor() {
       return 1;
    }

    onClick(event:any) {
        alert('Clicou')
    }

    onKeyup(event:KeyboardEvent) {
        // this.conteudoAtual = event.target.value;
    }

    onSave(valor:string) {
        this.conteudoSalvo = valor;
    }

    onMouseSpan() {
        this.isMouseOver = !this.isMouseOver
    }
    
    onValorMudou(event: any) {
        console.log(event);
        console.log(event.novoValor);
    }

}