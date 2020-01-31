import { Action, createReducer, on } from '@ngrx/store';

export const featureKey = 'datasource';

export interface State {
  // tslint:disable
  data: any[];
}

export const initialState: State = {
  data: ['a', 'b', 'c', 'd', 'e'],
};

const _reducer = createReducer(
  initialState,
);

export function reducer(state: State | undefined, action: Action) {
  return _reducer(state, action);
}
