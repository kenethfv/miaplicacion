import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  public titulo = 'hola';
  public lista = [{
    id: 1,
    nombre: 'keneth'},
    {id: 2,
      nombre: 'Andrea'
  }];
  title = 'miaplicacion';
}
