import {
  createSelector,
} from '@ngrx/store';

import * as CollectionSelectors from '../collection/selectors';

import * as Model from './models';

export const selectState = CollectionSelectors.selectFields;

const adapter = Model.adapter.getSelectors(selectState);

export const selectAll = createSelector(
  adapter.selectAll,
  (fields: Model.Schema[]) => fields.map(field => new Model.Field(field)),
);
