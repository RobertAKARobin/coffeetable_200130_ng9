import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as Model from './collection.models';

import * as Field from '../field/field.models';
import * as Record from '../record/record.models';

export const selectState = createFeatureSelector<Model.State>(Model.featureKey);

export const selectFields = createSelector(
  selectState,
  (state: Model.State) => state[Field.featureKey],
);

export const selectRecords = createSelector(
  selectState,
  (state: Model.State) => state[Record.featureKey],
);
