import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  templateUrl: './botao-carregar-mais.component.html',
  styleUrl: './botao-carregar-mais.component.css',
})
export class BotaoCarregarMaisComponent {
  @Input() haMAisPensamentos: boolean = false;


}
