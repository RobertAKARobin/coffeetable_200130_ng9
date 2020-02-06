import { InjectionToken } from '@angular/core';
import {
  Action,
  ActionReducerMap,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import { environment } from 'src/environments/environment';

export interface State {} // tslint:disable-line

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({}),
});

export const metaReducers: Array<MetaReducer<State>> = !environment.production
  ? []
  : [];
