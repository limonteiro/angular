import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.training';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/nature/';

  valorAtual: string = "";
  valorSalvo: string = "";

  isMouseOver: boolean = false;
  nome: string = "abc";

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  getValor() {
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!');
  }

  onKeyUp(evento:KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

}
