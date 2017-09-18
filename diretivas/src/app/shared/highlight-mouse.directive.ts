import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
   /* this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'yellow'
    );*/
    this.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave(){
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'white'
    ); */

    this.backgroundColor = 'white';
  }

  //Se não precisar de manipulação da variável.
  //@HostBinding('style.backgroundColor') backgroundColor: string;

  //Se precisar manipular a variável.
  @HostBinding('style.backgroundColor') get setColor(){
    //codigo extra aqui
    return this.backgroundColor;
  }
  private backgroundColor: string;

  constructor(
    //private _elementRef: ElementRef,
    //private _renderer: Renderer
  ) { }

}
