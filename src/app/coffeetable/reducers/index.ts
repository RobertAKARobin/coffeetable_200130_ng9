import { Action, createReducer, on } from '@ngrx/store';

export const featureKey = 'coffeetable';

export interface State {
  // tslint:disable
  collections: any[],
}

export const initialState: State = {
  collections: []
};

const _reducer = createReducer(
  initialState,
);

export function reducer(state: State | undefined, action: Action) {
  return _reducer(state, action);
}
