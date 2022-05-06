import { IAppState } from './../../+state/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
})
export class ContadorComponent implements OnInit {
  contador$ = this.store.select('app').pipe(map((app) => app.counter));

  constructor(private store: Store<{ app: IAppState }>) {}

  ngOnInit(): void {}

}
