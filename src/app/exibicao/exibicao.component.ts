import { Resposta } from './../model/Resposta';
import { Component, DoCheck, Input } from '@angular/core';
@Component({
  selector: 'app-exibicao',
  templateUrl: './exibicao.component.html',
  styleUrls: ['./exibicao.component.css'],
})
export class ExibicaoComponent implements DoCheck {
  @Input() informacao!: Resposta;
  showErro: boolean = false;
  showSucesso: boolean = false;

  constructor() {}

  ngDoCheck(): void {
    if (this.informacao) {
      if (this.informacao.erro) {
        this.showSucesso = false;
        this.showErro = true;
      } else {
        this.showErro = false;
        this.showSucesso = true;
      }
    }
  }
}
