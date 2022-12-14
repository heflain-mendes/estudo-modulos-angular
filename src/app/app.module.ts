import { FormularioModule } from './formulario/formulario.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExibicaoComponent } from './exibicao/exibicao.component';

@NgModule({
  declarations: [
    AppComponent,
    ExibicaoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormularioModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
