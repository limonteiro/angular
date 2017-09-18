import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  //Injeção de dependência
  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
    ) { 
    //console.log(this._elementRef);
    //não utilizar o elementRef desta forma para evitar vulnerabilidade.
    //this._elementRef.nativeElement.style.backgrounColor = 'yellow';

    /* utilizar da forma abaixo 
    renderer é um renderizador, 
    ele é responsável por renderizar 
    e fazer modificações no DOM. 
    */
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }

}
