import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanLoad } from '@angular/router';

import { HomeComponent } from './home/home.component';
//import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth.guard';
//import { AlunosGuard } from './guards/alunos.guard';

const appRoutes: Routes = [
    { path: 'cursos',
        loadChildren: 'app/cursos/cursos.module#CursosModule',
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard],
        canLoad: [AuthGuard]
    },
    { path: 'alunos',
        loadChildren: 'app/alunos/alunos.module#AlunosModule',
        canActivate: [AuthGuard],
        //canActivateChild: [AlunosGuard],
        canLoad: [AuthGuard]
    },
    //{ path: 'cursos', component: CursosComponent },
    //{ path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'login', component: LoginComponent },
    //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
    { path: 'home', 
        canActivate: [AuthGuard],
        component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PaginaNaoEncontradaComponent }
];

//Decorator
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}