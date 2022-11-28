import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "apredendo modulos";
  resposta?: string;

  constructor(){

  }

  atualizarResposta = (r:string) => {

  }
}
