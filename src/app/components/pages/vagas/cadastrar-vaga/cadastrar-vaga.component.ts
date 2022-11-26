import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Morador } from 'src/app/models/Morador';
import { Vagas } from 'src/app/models/Vaga';


@Component({
  selector: 'app-cadastrar-vaga',
  templateUrl: './cadastrar-vaga.component.html',
  styleUrls: ['./cadastrar-vaga.component.css']
})
export class CadastrarVagaComponent implements OnInit {
  
  moradorId!: number;
  moradores?: Morador[];
  data!: Date;

  constructor(
    private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    //Configuração da requisição
    this.http
      .get<Morador[]>("https://localhost:5001/api/morador/listar")
      // Execução da requisição
      .subscribe({
        next: (moradores) => {
          // console.table(funcionarios);
          this.moradores = moradores;
        },
      });
  }

  cadastrar(): void {
    let vaga: Vagas = {
      moradorId: this.moradorId
    };
    console.log(vaga);
    this.http.post<Vagas>("https://localhost:5001/api/vagas/cadastrar", vaga).subscribe({
      next: (funcionario) => {
        this.router.navigate(["pages/vagas/listar"]);
      },
    });
  }
}