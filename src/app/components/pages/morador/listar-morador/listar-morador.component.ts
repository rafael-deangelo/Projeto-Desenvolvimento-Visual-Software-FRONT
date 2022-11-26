import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Morador } from 'src/app/models/Morador';

@Component({
  selector: 'app-listar-morador',
  templateUrl: './listar-morador.component.html',
  styleUrls: ['./listar-morador.component.css']
})
export class ListarMoradorComponent {
  moradores!: Morador[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // CONFIGURAÇÃO DA REQUISIÇÃO
    this.http.get<Morador[]>
    ("https://localhost:5001/api/morador/listar")
    // EXECUÇÃO DA REQUISIÇÃO
    .subscribe({
        next : (moradores) => {
          //console.table(funcionarios);
          this.moradores = moradores;

          for(let morador of moradores){   // for IN e for OF
            console.log(morador);
          }
        }
    });
  }

  deletar(id: number): void{
    this.http.delete<Morador>
    (`https://localhost:5001/api/morador/deletar/${id}`)
    .subscribe({
      next : (morador) => {
          this.ngOnInit();
      },
    });
  }

}
