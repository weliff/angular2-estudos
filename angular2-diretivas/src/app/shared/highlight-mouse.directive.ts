import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') 
  onMouseOver() {
    //this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow')
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    //this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', '')
    this.backgroundColor = '';
    console.log('leave');
    
  }

  // @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor() {
    //codigo extra - bloco chamado sempre que o valor mudar
    console.log('modificado');
    return this.backgroundColor;
  }

  private backgroundColor: string;

  constructor(
    //private _elementRef: ElementRef, private _renderer: Renderer
    ) { }

}
