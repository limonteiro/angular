import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Rx';

export class AlunosGuard implements CanActivateChild {

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

        //console.log(route);
        //console.log(state);

        if (state.url.includes('editar')){
            //alert('Usuário sem acesso');
            //return Observable.of(false);
        }

        return true;
    }


}