import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Vagas } from 'src/app/models/Vaga';

@Component({
  selector: 'app-listar-vagas',
  templateUrl: './listar-vagas.component.html',
  styleUrls: ['./listar-vagas.component.css']
})
export class ListarVagasComponent implements OnInit{
  vagas!: Vagas[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //Configuração da requisição
    this.http
      .get<Vagas[]>("https://localhost:5001/api/vagas/listar")
      // Execução da requisição
      .subscribe({
        next: (vagas) => {
          // console.table(funcionarios);
          this.vagas = vagas;
        },
      });
  }
}
