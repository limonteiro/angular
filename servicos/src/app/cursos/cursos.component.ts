import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  //cursosService: CursosService;

  //Modo de fazer mais trabalhoso
  /*
  constructor() {
    this.cursosService = new CursosService();
   }
  */

  //Injeção de dependência 
  constructor(private cursosService: CursosService) {
    //this.cursosService = cursosService;
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    /*
    this.cursosService.emitirCursoCriado.subscribe(
      curso => console.log(curso)
    ) 
    */
    CursosService.criouNovoCurso.subscribe(
      
      curso => this.cursos.push(curso)

      //arrow function, essa escrita é ES2015 ou ES6, não é typescript
      //curso => console.log(curso)

      /*a linha de cima 33 é a mesma desta
      function(curso){
        console.log(curso);
      }*/
    );
  }

}
