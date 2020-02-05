import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as Model from './models';

import * as Field from '../field/models';
import * as Record from '../record/models';

export const selectState = createFeatureSelector<Model.State>(Model.featureKey);

export const selectFields = createSelector(
  selectState,
  (state: Model.State) => state[Field.featureKey],
);

export const selectRecords = createSelector(
  selectState,
  (state: Model.State) => state[Record.featureKey],
);
