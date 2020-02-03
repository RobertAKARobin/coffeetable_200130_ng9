import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

import * as CoffeetableActions from '../actions';
import * as Coffeetable from '../models';

export const featureKey = 'coffeetable';

export interface State {
  collections: Coffeetable.Collection[];
}

export const initialState: State = {
  collections: [],
};

const _reducer = createReducer(
  initialState,
  on(CoffeetableActions.collectionCreate, (state: State) => ({
    ...state,
    collections: [
      ...state.collections,
      {} as Coffeetable.Collection,
    ],
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return _reducer(state, action);
}

export const selectState = createFeatureSelector(featureKey);

export const selectCollections = createSelector(
  selectState,
  (state: State) => state.collections,
);
