


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
/*
import { CursosComponent } from './cursos/cursos.component';
//import { routing } from './app.routing';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos/cursos.service';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
*/
import { AppRoutingModule } from './app.routing.module';
//módulo de funcionalidade
//import { CursosModule } from './cursos/cursos.module';
//import { AlunosComponent } from './alunos/alunos.component';
//import { AlunosModule } from './alunos/alunos.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
    /*,
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
    */
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // CursosModule,
    //AlunosModule,
    AppRoutingModule
    //routing
  ],
  providers: [
    AuthService,
    CursosGuard,
    AuthGuard,
    AlunosGuard
  ],
  //providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }