import { HttpClient } from '@angular/common/http';
import { EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  showform: boolean = false;
  formulario: FormGroup;
  @Output() dados: EventEmitter<string> = new EventEmitter();

  constructor(private formBiulder: FormBuilder, private http: HttpClient) {
    this.formulario = formBiulder.group({
      cep: [
        '',
        [Validators.required, this.validatorCep, Validators.maxLength(8)],
      ],
    });

    this.showform = true;
  }

  ngOnInit(): void {}

  buscar() {
    if (this.formulario.invalid) {
      this.PercorerCampo(this.formulario, function (controle: AbstractControl) {
        controle.markAsTouched();
      });
    } else {
      const cep = this.formulario.get('cep')?.value;
      this.buscarInformacao(cep);

      this.PercorerCampo(this.formulario, (controle: AbstractControl) => {
        controle.setValue(null);
        controle.markAsUntouched();
      });
    }
  }

  buscarInformacao(cep: string) {
    cep.replace(/\D/g, '');
    this.http.get(`//viacep.com.br/ws/${cep}/json/`).subscribe({
      next: (sucesso) => {
        this.dados.emit(JSON.stringify(sucesso));
      }
    });
  }

  //validador de campo genérico usando recursividade
  PercorerCampo(
    formGroup: FormGroup,
    fun: (controle: AbstractControl) => void
  ) {
    Object.keys(formGroup.controls).forEach((campo) => {
      const controle = this.formulario.get(campo);

      if (controle instanceof FormGroup) {
        this.PercorerCampo(controle, fun);
      } else {
        fun(controle!);
      }
    });
  }

  validatorCep(input: AbstractControl) {
    const re = /^([\d]{2})([\d]{3})([\d]{3}$)/;
    return re.test(input.value) ? null : { CepInvalido: true };
  }

  showmensageErro(campo: string) {
    return (
      this.formulario.get(campo)?.invalid && this.formulario.get(campo)?.touched
    );
  }
}
