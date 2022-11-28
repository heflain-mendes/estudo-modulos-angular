import { Resposta } from './model/Resposta';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'apredendo modulos';
  infor!: Resposta;

  constructor() {}

  atualizarResposta = (r: Resposta) => {
    this.infor = r;
  };
}
