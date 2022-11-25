import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarMoradorComponent } from './components/pages/morador/cadastrar-morador/cadastrar-morador.component';
import { ListarMoradorComponent } from './components/pages/morador/listar-morador/listar-morador.component';
import { CadastrarVagaComponent } from './components/pages/vagas/cadastrar-vaga/cadastrar-vaga.component';
import { ListarVagasComponent } from './components/pages/vagas/listar-vagas/listar-vagas.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarMoradorComponent,
    ListarMoradorComponent,
    CadastrarVagaComponent,
    ListarVagasComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
