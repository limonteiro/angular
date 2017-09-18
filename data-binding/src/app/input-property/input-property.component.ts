import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  //O decorator @Input permite que o seletor app-curso tenha uma propriedade chamada de 'nome' 
  @Input('nome') nomeCurso: string = '';

  constructor() { }

  ngOnInit() {
  }

}
