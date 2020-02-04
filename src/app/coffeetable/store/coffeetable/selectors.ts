import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as Model from './models';

import * as Collection from '../collection/models';

export const selectState = createFeatureSelector(Model.featureKey);

export const selectCollections = createSelector(
  selectState,
  (state: Model.State) => state[Collection.featureKey],
);
