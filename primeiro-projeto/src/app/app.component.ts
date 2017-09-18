import { Component } from '@angular/core';

/*Decorator @Component
(Mais conhecido como anotação no C# ou Java)
É para informar que ele é um componente do Angular 2.

Os dados dentro do decorator são metadados.
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
