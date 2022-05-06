import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  DecrementandoContador,
  DefinirContador,
  IAppState,
  IncrementaContador,
} from 'src/app/+state/app.state';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor(private store: Store<{ app: IAppState }>) {}

  ngOnInit(): void {}

  incrementar() {
    this.store.dispatch(IncrementaContador());
  }

  decrementar() {
    this.store.dispatch(DecrementandoContador());
  }

  definirContador(valor: string) {
    let vT = parseInt(valor);
    this.store.dispatch(DefinirContador({ payload: vT }));
  }
}
