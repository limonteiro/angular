import { Injectable, Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
import { IFormCanDeactivate } from './iform-candeactivate';

@Injectable()
//export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {      
        
        canDeactivate(
            //component: AlunoFormComponent,
            component: IFormCanDeactivate,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            
            console.log("guarda de desativação.");
            
            //return component.podeMudarRota();
            return component.podeDesativar();
    }
}
