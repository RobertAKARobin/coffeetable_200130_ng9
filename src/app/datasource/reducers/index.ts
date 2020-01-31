import {
  Action,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

import * as fromRoot from 'src/app/core/reducers';

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

export const selectState = (state: fromRoot.State) => state[featureKey];

export const selectData = createSelector(
  selectState,
  (state: State) => state.data,
);
