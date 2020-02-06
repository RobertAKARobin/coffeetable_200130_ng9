import {
  createSelector,
} from '@ngrx/store';

import * as CollectionSelectors from '../collection/collection.selectors';

import * as Model from './field.models';

export const selectState = CollectionSelectors.selectFields;

const adapter = Model.adapter.getSelectors(selectState);

export const selectAll = createSelector(
  adapter.selectAll,
  (fields: Model.Schema[]) => fields.map(field => new Model.Field(field)),
);

export const selectIdOfFocus = createSelector(
  selectState,
  (state: Model.State) => state.idOfFocus,
);
