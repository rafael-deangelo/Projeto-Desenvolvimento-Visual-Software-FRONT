import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Morador } from 'src/app/models/Morador';
import { Vagas } from 'src/app/models/Vaga';
import { MatSnackBar } from "@angular/material/snack-bar";


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
    private http: HttpClient,private router: Router, private _snackBar: MatSnackBar) {}

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
      next: (vaga) => {
        this._snackBar.open("Vaga cadastrado com sucesso!", "Ok!", {
          verticalPosition: "top",
          horizontalPosition: "center",
        });
        this.router.navigate(["pages/vagas/listar"]);
      },
    });
  }
}