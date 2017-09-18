import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos() {
    return ['Java', 'Ext JS', 'Angular'];
  }

}
/* 
Serviços servem para conectar com o servidor e trazer os dados.
*/