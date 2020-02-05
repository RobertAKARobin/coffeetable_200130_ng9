import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as Model from './models';

import * as Collection from '../collection/models';
import * as Field from '../field/models';

export const selectState = createFeatureSelector(Model.featureKey);

export const selectCollections = createSelector(
  selectState,
  (state: Model.State) => state[Collection.featureKey],
);

export const selectFields = createSelector(
  selectState,
  (state: Model.State) => state[Field.featureKey],
);
