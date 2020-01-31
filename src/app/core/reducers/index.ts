import { InjectionToken } from '@angular/core';
import {
  Action,
  ActionReducerMap,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import { environment } from 'src/environments/environment';

import * as fromLayout from './layout.reducer';

export interface State {
  [fromLayout.featureKey]: fromLayout.State;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    [fromLayout.featureKey]: fromLayout.reducer,
  }),
});

export const metaReducers: Array<MetaReducer<State>> = !environment.production
  ? []
  : [];

export const selectLayout = (state: State) => state[fromLayout.featureKey];

export const selectLayoutMessage = createSelector(
  selectLayout,
  (state: fromLayout.State) => state.message,
);
