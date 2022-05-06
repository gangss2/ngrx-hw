import { createAction, createReducer, on } from '@ngrx/store';

export interface IAppState {
  counter: number;
}

export const appInitialState: IAppState = {
  counter: 2,
};

export const IncrementaContador = createAction(
  '[ Contador ] Incrementando contador'
);
export const DecrementandoContador = createAction(
  ' [ Contador ] Decrementando contador'
);

export const appReducer = createReducer(
  appInitialState,
  on(IncrementaContador, (state) => {
    state = {
      ...state,
      counter: state.counter + 1,
    };
    return state;
  }),
  on(DecrementandoContador, (state) => {
    state = {
      ...state,
      counter: state.counter - 1,
    };
    return state;
  })
);
