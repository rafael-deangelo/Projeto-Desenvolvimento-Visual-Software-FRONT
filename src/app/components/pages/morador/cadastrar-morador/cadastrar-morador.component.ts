import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Morador } from 'src/app/models/Morador';

@Component({
  selector: 'app-cadastrar-morador',
  templateUrl: './cadastrar-morador.component.html',
  styleUrls: ['./cadastrar-morador.component.css']
})
export class CadastrarMoradorComponent {
  nome!: string;
  cpf!: string;
  apart!: string;
  email!: string;
  bloco!: string;
  modeloVeiculo!: string;
  cor!: string;
  placa!: string;
  moradorid!: number;
  erro!: string;

  //incializar construtor
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { } 

    ngOnInit(): void {
      this.route.params.subscribe((params) => {
        let { id } = params;
        if(id != undefined){
          this.http.get<Morador>
          (`https://localhost:5001/api/morador/buscar/${id}`)
          .subscribe({
            next: (morador) => {
              this.nome = morador.nome;
              this.cpf =  morador.cpf;
              this.moradorid = morador.moradorId!;     // cria uma variavel global e com esse vc consegue saber se vai cadastrar ou alterar ele controla os dois
            },
          });
        }

      });
  }


  cadastrar(): void {
    let morador : Morador = {
      nome : this.nome,
      cpf : this.cpf,
      apartamento : this.apart,
      email : this.email,
      bloco: this.bloco,
      modelo_veiculo : this.modeloVeiculo,
      cor : this.cor,
      placa : this.placa,
    };
    // CONFIGURAÇÃO DA REQUISIÇÃO
    this.http.post<Morador>('https://localhost:5001/api/morador/cadastrar',
      morador
    )

    // EXECUÇÃO DA REQUISIÇÃO
    .subscribe({
      // AQUI EXECUTAMOS ALGO QUANDO A REQUISIÇÃO FOR BEM SUCEDIDA
      next: (morador) => {
        //NAVIGATE LEVARA PARA A LISTA
        this.router.navigate(["pages/morador/listar"]);
      },
      // AQUI EXECUTAMOS ALGO QUANDO A REQUISIÇÃO FOR MAL SUCEDIDA
      error: (error) => {
        if(error.status == 400){
          this.erro = "Erro de validação!";
        }else if(error.status == 0){
          this.erro = "Está faltando iniciar a sua API!";
        }
      },
    });
  }

  alterar(): void {
    let morador : Morador = {
      moradorId : this.moradorid,
      nome : this.nome,
      cpf : this.cpf,
      apartamento : this.apart,
      email : this.email,
      bloco: this.bloco,
      modelo_veiculo : this.modeloVeiculo,
      cor : this.cor,
      placa : this.placa,
    };
    // CONFIGURAÇÃO DA REQUISIÇÃO
    this.http.patch<Morador>('https://localhost:5001/api/morador/alterar',
      morador
    )

    // EXECUÇÃO DA REQUISIÇÃO
    .subscribe({
      // AQUI EXECUTAMOS ALGO QUANDO A REQUISIÇÃO FOR BEM SUCEDIDA
      next: (morador) => {
        this.router.navigate(["pages/morador/listar"]);
      },
      // AQUI EXECUTAMOS ALGO QUANDO A REQUISIÇÃO FOR MAL SUCEDIDA
      error: (error) => {
        if(error.status == 400){
          this.erro = "Erro de validação!";
        }else if(error.status == 0){
          this.erro = "Está faltando iniciar a sua API!";
        }
      },
    });
   }
}
