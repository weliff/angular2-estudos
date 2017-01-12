import { Component, OnInit, Control, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import {TodolistService} from './todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  providers: [TodolistService] 
})
export class TodolistComponent implements OnInit {

  service: TodolistService;
  item = {};
  lista;
  // itemControl: Control;
  form: FormGroup;


  @ViewChild('itemControl') itemElement: HTMLElement;

  constructor(service: TodolistService) { 
    this.service = service;
    // this.itemControl = new Control('', Validators.required);
  }

  loadLista() {
    this.lista = this.service.getLista();
  }

  ngOnInit() {
    this.loadLista();
    
  }
  adicionar(item) {
    if(this.itemElement.invalid) return;
    this.service.adicionar(item);
    this.item = {};
    this.loadLista();
  }

  remover(lista: any[]) {
    this.service.remover(lista);
    this.loadLista();
  }

  
}
