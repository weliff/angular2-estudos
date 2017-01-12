import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  //Não é recomendado utilizar ElementRef, pois causa vulnerabilidade e ataquest cross scripting
  //recomendado utilizar com Renderer para fazer de forma segura as mudanças no elemento
  constructor(private _elementRef: ElementRef,
    private _rederer: Renderer) { 
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    _rederer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
  }



}
