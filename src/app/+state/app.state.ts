import { createAction, createReducer, on, props } from '@ngrx/store';

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
export const DefinirContador = createAction(
  ' [ Contador ] Definindo Contador ',
  props<{ payload: number }>()
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
  }),
  on(DefinirContador, (state, { payload }) => {
    state = {
      ...state,
      counter: payload,
    };
    return state;
  })
);
