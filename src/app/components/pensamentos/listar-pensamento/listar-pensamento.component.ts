import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css',
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'Hello World!',
      autoria: 'Dithan',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Dithan',
      modelo: 'modelo1',
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit id quos eius tenetur suscipit cum. Ea sit nobis aspernatur, quas quaerat maxime saepe, recusandae, temporibus explicabo quibusdam perferendis soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit id quos eius tenetur suscipit cum. Ea sit nobis aspernatur, quas quaerat maxime saepe, recusandae, temporibus explicabo quibusdam perferendis soluta!',
      autoria: 'Dithan',
      modelo: 'modelo2',
    },
  ];
}
