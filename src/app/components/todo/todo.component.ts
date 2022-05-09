import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import {
  DecrementandoContador,
  DefinirContador,
  IAppState,
  IncrementaContador,
} from 'src/app/+state/app.state';
import { IModalState } from 'src/app/+state/modal.state';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor(
    private store: Store<{ app: IAppState }>,
    private storeModal: Store<{ appM: IModalState }>,
    private modalService: NgbModal
  ) {}

  @ViewChild('content')
  conteudoModal: ElementRef;

  ngOnInit(): void {
    /**
     * Listener do app-botao-events;
     */
    window.addEventListener('app-botao-handler', (e: any) => {
      alert(`O Botão foi apertado!\n${e.detail}`);
    });
  }
  ngAfterViewInit() {
    /**
     * Observable do estado do botão app-botao-ngrx - tá bugadável, mas deu a hora :p .
     */
    this.storeModal.select('appM').subscribe((m) => {
      if (m.show) this.modalService.open(this.conteudoModal, { size: 'sm' });
    });
  }

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
