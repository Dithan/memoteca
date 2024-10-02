import { Component } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css',
})
export class PensamentoComponent {
  pensamento = {
    conteudo: 'Hello World',
    autoria: 'Dithan',
    modelo: 'modelo3',
  };
}
