import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {

  private evento: Event = new CustomEvent('app-botao-handler', { detail: "Fui apertado!" });

  constructor() { }

  ngOnInit(): void { }

  apertado() {
    window.dispatchEvent(this.evento);
  }
}
