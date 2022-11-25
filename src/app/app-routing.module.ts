import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarMoradorComponent } from './components/pages/morador/cadastrar-morador/cadastrar-morador.component';
import { ListarMoradorComponent } from './components/pages/morador/listar-morador/listar-morador.component';
import { CadastrarVagaComponent } from './components/pages/vagas/cadastrar-vaga/cadastrar-vaga.component';
import { ListarVagasComponent } from './components/pages/vagas/listar-vagas/listar-vagas.component';

const routes: Routes = [
  {
    path: "pages/morador/cadastrar",
    component: CadastrarMoradorComponent
  },
  {
    path: "pages/morador/listar",
    component: ListarMoradorComponent
  },
  {
    path: "pages/vagas/cadastrar",
    component: CadastrarVagaComponent
  },
  {
    path: "pages/vagas/listar",
    component: ListarVagasComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
