import { createAction, createReducer, on, props } from '@ngrx/store';

export interface IModalState {
  show: boolean;
}

export const modalInitialState: IModalState = {
  show: false,
};

export const TrueShowing = createAction('[ Modal ] show = true');
export const FalseShowing = createAction(' [ Modal ]  show = false');
export const definirShowing = createAction(
  ' [ Modal ] show = props ',
  props<{ payload: boolean }>()
);
export const ChangeShowing = createAction(' [ Modal ] show = !show ');

export const modalReducer = createReducer(
  modalInitialState,
  on(TrueShowing, (state) => {
    state = {
      ...state,
      show: true,
    };
    return state;
  }),
  on(FalseShowing, (state) => {
    state = {
      ...state,
      show: false,
    };
    return state;
  }),
  on(definirShowing, (state, { payload }) => {
    state = {
      ...state,
      show: payload,
    };
    return state;
  }),
  on(ChangeShowing, (state) => {
    state = {
      ...state,
      show: !state.show,
    };
    return state;
  })
);
