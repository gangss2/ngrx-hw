import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-events',
  templateUrl: './botao-events.component.html',
  styleUrls: ['./botao-events.component.scss']
})
export class BotaoEventsComponent implements OnInit {

  private evento: Event = new CustomEvent('app-botao-handler', { detail: "Fui apertado!" });

  constructor() { }

  ngOnInit(): void { }

  apertado() {
    window.dispatchEvent(this.evento);
  }
}
