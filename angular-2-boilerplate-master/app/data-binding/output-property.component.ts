import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'contador',
    template:`
        <div>
            <button (click)="decrementa()" class="btn btn-primary" type="button">-</button>
            <input type="text" [value]="valor" readOnly/>
            <button (click)="incrementa()" class="btn btn-primary" type="button">+</button>
        </div>

    `

})
export class OutputPropertyComponent {
    
    @Input() valor = 0;

    @Output() valorMudou = new EventEmitter();

    incrementa() {
        this.valor++;
        this.valorMudou.emit({"novoValor":this.valor});
    }
    decrementa() {
        this.valor--;
        this.valorMudou.emit({"novoValor":this.valor});
    }
}


