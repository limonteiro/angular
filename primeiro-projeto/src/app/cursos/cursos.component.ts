import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[];

/*
cursosService => Aqui o serviço está sendo injetado no componente.
public/private => Modificador de acesso.
*/
  constructor(private cursosService: CursosService) { 
    this.nomePortal='http://loiane.training';

    this.cursos = this.cursosService.getCursos();
    //var servico = new CursosService();
  }

  ngOnInit() {
  }

}
