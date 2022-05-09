import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChangeShowing, IModalState, TrueShowing } from 'src/app/+state/modal.state';

@Component({
  selector: 'app-botao-ngrx',
  templateUrl: './botao-ngrx.component.html',
  styleUrls: ['./botao-ngrx.component.scss']
})
export class BotaoNgrxComponent implements OnInit {

  constructor(private store: Store<{ appM: IModalState }>) { }

  ngOnInit(): void {
  }

  apertado() {
    this.store.dispatch(TrueShowing());
  }
}
