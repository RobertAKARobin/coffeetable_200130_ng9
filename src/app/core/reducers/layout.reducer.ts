import { Action, createReducer, on } from '@ngrx/store';

export const featureKey = 'layout';

export interface State {
  message: string;
}

export const initialState: State = {
  message: 'Hello, world!',
};

const _reducer = createReducer(
  initialState,
);

export function reducer(state: State | undefined, action: Action) {
  return _reducer(state, action);
}
