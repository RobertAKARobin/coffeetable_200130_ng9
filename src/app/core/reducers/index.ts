import {
  Action,
  combineReducers,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromRoot from 'src/app/reducers';
import * as fromLayout from './layout.reducer';

export const featureKey = 'core';

export interface CoreState {
  [fromLayout.featureKey]: fromLayout.State;
}

export interface State extends fromRoot.State {
  [featureKey]: CoreState;
}

export function reducers(state: CoreState | undefined, action: Action) {
  return combineReducers({
    [fromLayout.featureKey]: fromLayout.reducer,
  })(state, action);
}

export const selectCore = createFeatureSelector<State, CoreState>(
  featureKey,
);

export const selectLayout = createSelector(
  selectCore,
  (state: CoreState) => state[fromLayout.featureKey],
);

export const selectLayoutMessage = createSelector(
  selectLayout,
  (state: fromLayout.State) => state.message,
);
