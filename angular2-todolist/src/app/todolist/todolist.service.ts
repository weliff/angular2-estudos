import { Injectable } from '@angular/core';

@Injectable()
export class TodolistService {

  lista = [{descricao: 'Tomar banho', selecionado: true}, {descricao: 'Estudar Angular 2', selecionado: false}];

  constructor() { }

  getLista() {
    return this.lista;
  }

  adicionar(item) {
    let maxIds = 5;
    let numero = Math.floor(Math.random() * maxIds);
    if(this.lista.length < maxIds) {
      if (!this.lista.some(item => item.id == numero)) {
        item.id = numero;
        this.lista.push(item);
      } else {
        this.adicionar(item)
      }
    }
  }

  remover(lista: any[]) {
    this.lista = lista.filter(item => !item.selecionado);
  }

}
