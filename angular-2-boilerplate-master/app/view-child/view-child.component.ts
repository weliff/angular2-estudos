import { Component, 
    OnInit, 
    OnChanges, 
    OnDestroy, 
    AfterViewInit, 
    AfterContentInit, 
    AfterViewChecked, 
    DoCheck, 
    AfterContentChecked,
    ViewChild } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'view-child',
    template: `
        <p #variavelP>Exemplo de acesso a variavel local do template no componente</p>
    `
})
export class ViewChildComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterViewChecked, DoCheck, AfterContentChecked {
    constructor() { }

    @ViewChild('variavelP') variavel: HTMLElement;

    ngOnInit() {
        console.log('ngOnInit')
        console.log(this.variavel)
     }

     ngOnChanges() {
        console.log('ngOnChanges')
         console.log(this.variavel)   
     }

     ngOnDestroy() {
        console.log('ngOnDestroy')
        console.log(this.variavel)
         
     }  

     ngAfterViewInit() {
        console.log('ngAfterViewInit')
        console.log(this.variavel)
         
     }

     ngAfterViewChecked() {
        console.log('ngAfterViewChecked')
        console.log(this.variavel)
         
     }

     ngDoCheck() {
        console.log('ngDoCheck')
        console.log(this.variavel)
         
     }

     ngAfterContentChecked() {
        console.log('ngAfterContentChecked')
        console.log(this.variavel)
         
     }
}